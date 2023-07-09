import request from '@/utils/request'

export const login = data => {
  return request({
    url: 'authorizations',
    method: 'POST',
    data
  })
}
