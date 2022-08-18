import axios, { AxiosInstance } from 'axios'

const learningAreaV2 = (): AxiosInstance => {
  try {
    const api = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BASE_API}`
      // headers: {
      //   Authorization: 'Bearer ' + token
      // }
    })

    return api
  } catch {
    throw new Error('Unable to create api client instance')
  }
}

export default learningAreaV2
