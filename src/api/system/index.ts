import request from '@/config/axios'
import type { SysUserDTO } from './types'
import { TableResponse } from '@/types/table'

export const querySysUser = (data: any): Promise<IResponse<TableResponse<SysUserDTO>>> => {
  return request.post({ url: '/querySysUser', data: data })
}
