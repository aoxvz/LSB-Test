import request from '@/utils/request'

export function table_test(query) {
  return request({
    url: 'https://odws.hccg.gov.tw/001/Upload/25/opendataback/9059/59/f8bec8be-eb77-4c37-93e6-9245cd9961bc.json',
    method: 'get',
    params: query
  })
}
