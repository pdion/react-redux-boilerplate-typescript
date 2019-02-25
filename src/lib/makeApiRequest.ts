import axios from 'axios'

import { BASE_URL, headers } from 'src/constants/endpoints'

export interface RequestOptions {
  url: string,
  method: string
  data?: object | string
  headers?: object
}

export default function makeApiRequest(options: RequestOptions): Promise<APIResponse> {
  return axios({
    data: options.data,
    headers: {
      ...headers.DEFAULT,
      ...options.headers,
    },
    method: options.method,
    url: options.url || BASE_URL,
  }).then(response => (
      {
        data: response.data,
        ok: true,
        status: response.status,
      }
  )).catch(response => (
      {
        data: response.data,
        error: response.error,
        ok: false,
        status: response.status,
      }
  ))
}
