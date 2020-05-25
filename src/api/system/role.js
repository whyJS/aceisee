import request from "@/router/axios";

export const getList = (current, size, params) => {
  return request({
    url: "/api/goldnet-system/role/list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};
export const getListPage = (current, size, params) => {
  return request({
    url: "/api/goldnet-system/role/page",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const grantTree = code => {
  return request({
    url: "/api/goldnet-system/menu/grant-tree",
    method: "get",
    params: {
      code
    }
  });
};

// export const grant = (roleIds, menuIds, dataScopeIds, apiScopeIds) => {
export const grant = (roleIds, menuIds) => {
  return request({
    url: "/api/goldnet-system/role/grant",
    method: "post",
    data: {
      roleIds,
      menuIds
    }
  });
};

export const remove = ids => {
  return request({
    url: "/api/goldnet-system/role/remove",
    method: "post",
    params: {
      ids
    }
  });
};

export const add = row => {
  return request({
    url: "/api/goldnet-system/role/submit",
    method: "post",
    data: row
  });
};

export const update = row => {
  return request({
    url: "/api/goldnet-system/role/submit",
    method: "post",
    data: row
  });
};

export const getRole = roleIds => {
  return request({
    url: "/api/goldnet-system/menu/role-tree-keys",
    method: "get",
    params: {
      roleIds
    }
  });
};

export const getRoleTree = tenantId => {
  return request({
    url: "/api/goldnet-system/role/tree",
    method: "get",
    params: {
      tenantId
    }
  });
};
// 获取租户列表
export const getTenantList = () => {
  return request({
    url: "/api/goldnet-system/tenant/select",
    method: "get",
    params: {}
  });
};
