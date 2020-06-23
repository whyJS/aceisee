import request from "@/router/axios";


export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    params: data
  })
}

//查询分类树
export function getCategoryTree () {
  return request({
    url: "/category/tree",
    method: "get",
    params: {}
  });
}

