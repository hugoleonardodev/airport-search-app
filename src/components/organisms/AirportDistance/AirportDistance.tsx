import React from 'react'

import AutocompleteWrap from '@components/molecules/AutocompleteWrap'

const AirportDistance: React.FC = () => {
  return (
    <div>
      <AutocompleteWrap placeholderLabel="Select Location A" />
      <AutocompleteWrap placeholderLabel="Select Location B" />
    </div>
  )
}

export default AirportDistance
