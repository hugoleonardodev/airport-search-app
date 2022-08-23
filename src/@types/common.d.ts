import { google } from 'google-maps'

// eslint-disable-next-line @typescript-eslint/naming-convention
declare interface Window {
  // add you custom properties and methods
  google: google
}

interface IContextProvider {
  children?: React.ReactNode
}
