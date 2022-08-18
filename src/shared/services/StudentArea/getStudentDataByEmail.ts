import { AxiosRequestConfig, AxiosResponse } from 'axios'

import learningAreaV2 from './learningAreaV2'

const getStudentDataByEmail = async (
  email: string,
  token: string
): Promise<AxiosResponse<IEmailContetResponse, AxiosRequestConfig>> => {
  const api = learningAreaV2()
  const response = await api.post(
    `/email/content/?email=${email}`,
    {},
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )
  return response
}

export default getStudentDataByEmail
