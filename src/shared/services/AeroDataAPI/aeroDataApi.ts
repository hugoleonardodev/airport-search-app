import axios, { AxiosInstance } from 'axios'

const aeroDataApi = (): AxiosInstance => {
  try {
    const api = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BASE_API}`,
      headers: {
        'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_BASE_API_HOST}`,
        'Content-Type': 'application/json'
      }
    })
    return api
  } catch {
    throw new Error('Unable to create api client instance')
  }
}

export default aeroDataApi
