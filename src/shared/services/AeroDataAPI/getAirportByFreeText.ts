import { AxiosRequestConfig, AxiosResponse } from 'axios'

import aeroDataApi from './aeroDataApi'

const getAiportByFreeText = async (
  searchQuery: string
): Promise<AxiosResponse<IAeroDataAPIResponse, AxiosRequestConfig>> => {
  const api = aeroDataApi()
  const response = await api.get(`/multi?term=${searchQuery}&limit=10`, {})
  return response
}

export default getAiportByFreeText
