import request from "@/router/axios";

export const getList = (current, size, params, deptId) => {
  return request({
    url: "/api/goldnet-user/page",
    // url: "/api/goldnet-user/list",
    method: "get",
    params: {
      ...params,
      current,
      size,
      deptId
    }
  });
};

export const remove = ids => {
  return request({
    url: "/api/goldnet-user/remove",
    method: "post",
    params: {
      ids
    }
  });
};

export const add = row => {
  return request({
    url: "/api/goldnet-user/submit",
    method: "post",
    data: row
  });
};

export const update = row => {
  return request({
    url: "/api/goldnet-user/update",
    method: "post",
    data: row
  });
};

export const updateUserInfo = row => {
  return request({
    url: "/api/goldnet-user/updateUserInfo",
    method: "post",
    data: row
  });
};

export const getUser = id => {
  return request({
    url: "/api/goldnet-user/detail",
    method: "get",
    params: {
      id
    }
  });
};

export const getUserInfo = () => {
  return request({
    url: "/api/goldnet-user/info",
    method: "get"
  });
};

export const resetPassword = userIds => {
  return request({
    url: "/api/goldnet-user/reset-password",
    method: "post",
    params: {
      userIds
    }
  });
};

export const updatePassword = (oldPassword, newPassword, newPassword1) => {
  return request({
    url: "/api/goldnet-user/update-password",
    method: "post",
    params: {
      oldPassword,
      newPassword,
      newPassword1
    }
  });
};
