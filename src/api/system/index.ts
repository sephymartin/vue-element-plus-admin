import request from '@/config/axios'
import type { SysUserDTO } from './types'

export const querySysUser = ({ params }: AxiosConfig): Promise<IResponse> => {
  return request.post({ url: '/querySysUser', params })
}
