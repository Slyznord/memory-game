import axios from 'axios'
import { baseURL } from '@/API/api.config'

class Api {
  client

  constructor () {
    this.client = axios.create({ baseURL })
  }

  async execute (method:any, url:any, { data, params }:any):Promise<any> {
    const result = await this.client({
      method,
      url,
      params,
      data
    })

    return result.data
  }

  get (url:string, params:Record<string, unknown> = { }) {
    return this.execute('get', url, { params })
  }
}

export default new Api()
