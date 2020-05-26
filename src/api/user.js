import request from "@/router/axios";

export const loginByUsername = () =>
  request({
    url: "",
    method: "post",
    headers: {},
    params: {}
  });

export const refreshToken = () =>
  request({
    url: "",
    method: "post",
    headers: {},
    params: {}
  });

export const getButtons = params => {
  return request({
    url: "/api/goldnet-system/menu/buttons",
    method: "get",
    params: {
      ...params
    }
  });
};

export const getCaptcha = () =>
  request({
    url: "/api/goldnet-auth/oauth/captcha",
    method: "get"
  });

export const logout = () =>
  request({
    url: "/api/goldnet-auth/oauth/logout",
    method: "get"
  });

export const getUserInfo = () =>
  request({
    url: "/api/goldnet-auth/oauth/user-info",
    method: "get"
  });

export const sendLogs = list =>
  request({
    url: "/api/goldnet-auth/oauth/logout",
    method: "post",
    data: list
  });
