import request from '@/utils/request'

export function getList(test) {
  return request({
    url: 'login2/login2',
    method: 'get',
    test
  })
}
