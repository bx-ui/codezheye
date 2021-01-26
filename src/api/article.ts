import request from '@/utils/request'

export interface ColumnQueryType {
  currentPage: number;
  pageSize: number;
}

export function loadColumn (obj: ColumnQueryType) {
  return request({
    url: '/api/columns',
    method: 'get',
    params: obj
  })
}

export function columnUserInfo (obj: { id: any }) {
  return request({
    url: `/api/columns/${obj.id}`,
    method: 'get'
  })
}

// 获取某个专栏下的文章
export function columnList (obj: ColumnQueryType, id: any) {
  return request({
    url: `/api/columns/${id}/posts`,
    method: 'get',
    params: obj
  })
}
