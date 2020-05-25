import request from "@/router/axios";

export const getList = (current, size, params) => {
  return request({
    url: "/api/goldnet-system/menu/list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const getLazyList = (parentId, sysType, params) => {
  return request({
    url: "/api/goldnet-system/menu/lazy-list",
    method: "get",
    params: {
      ...params,
      sysType,
      parentId
    }
  });
};

export const getLazyMenuList = (parentId, params) => {
  return request({
    url: "/api/goldnet-system/menu/lazy-menu-list",
    method: "get",
    params: {
      ...params,
      parentId
    }
  });
};

export const getMenuList = (current, size, params) => {
  return request({
    url: "/api/goldnet-system/menu/menu-list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const remove = ids => {
  return request({
    url: "/api/goldnet-system/menu/remove",
    method: "post",
    params: {
      ids
    }
  });
};

export const add = row => {
  return request({
    url: "/api/goldnet-system/menu/submit",
    method: "post",
    data: row
  });
};

export const update = row => {
  return request({
    url: "/api/goldnet-system/menu/submit",
    method: "post",
    data: row
  });
};

export const getMenu = id => {
  return request({
    url: "/api/goldnet-system/menu/detail",
    method: "get",
    params: {
      id
    }
  });
};

export const getTopMenu = () =>
  request({
    url: "/api/goldnet-system/menu/top-menu",
    method: "get"
  });

export const getRoutes = (topMenuId, params) => {
  return request({
    url: "/api/goldnet-system/menu/routes",
    method: "get",
    params: {
      topMenuId,
      ...params
    }
  });
};

export const getMenuTree = params => {
  return request({
    url: "/api/goldnet-system/menu/tree",
    method: "get",
    params
  });
};
