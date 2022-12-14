import React from 'react'

// Define general type for useWindowSize hook, which includes width and height
interface ISize {
  width: number | undefined
  height: number | undefined
}

/**
 * A really common need is to get the current size of the browser window.
 * This hook returns an object containing the window's width and height.
 * If executed server-side (no window object) the value of width and height will be undefined.
 * @see https://usehooks.com/useWindowSize/
 * @example
  function App() {
  const {width, height}: ISize = useWindowSize();
    return (
      <div>
        {width}px / {height}px
      </div>
    );
  }
 */
function useWindowSize(): ISize {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState<ISize>({
    width: undefined,
    height: undefined
  })
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export default useWindowSize
