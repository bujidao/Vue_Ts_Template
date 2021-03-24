import request from '@/utils/request'

/**
 * 科室
 */

/**
 * 获取列表
 * @param params
 * @returns
 */
export const getDataList = (params?: any) => {
  return request({
    url: '/wn/getDepartmentList',
    method: 'get',
    params: params
  })
}
