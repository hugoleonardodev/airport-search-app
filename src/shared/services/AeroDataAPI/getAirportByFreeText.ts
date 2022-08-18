import { AxiosRequestConfig, AxiosResponse } from 'axios'

import aeroDataApi from './aeroDataApi'

const getAiportByFreeText = async (
  searchQuery: string
): Promise<AxiosResponse<IAeroDataAPIResponse, AxiosRequestConfig>> => {
  const api = aeroDataApi()
  const response = await api.get(
    `/airports/search/term?q=${searchQuery}&limit=10`,
    {}
  )
  return response
}

export default getAiportByFreeText
