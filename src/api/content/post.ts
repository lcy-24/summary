/*
 * @Author: 朽木白
 * @Date: 2023-06-16 15:41:27
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-06-20 14:55:59
 * @Description: 帖子管理
 */

import http from '@/utils/http'
import type { PageRes } from '../types'
import type { IPost } from './types'

/**
 * @description 获取分页列表(带搜索)
 * @param page
 * @param limit
 * @param roleName
 * @returns {<PageRes<IPost.IResPost>>}
 */
export function getPostList(params: IPost.IReqQuery) {
  return http.get<PageRes<IPost.IResPost>>(
    `/admin/content/post/list/${params.pageSize}/${params.pageNum}`,
    { name: params.name },
  )
}
