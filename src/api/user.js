import request from "@/router/axios";

export const loginByUsername = (
  tenantId,
  username,
  password,
  type,
  key,
  code
) =>
  request({
    url: "/api/goldnet-auth/oauth/token",
    method: "post",
    headers: {
      "Tenant-Id": tenantId,
      "Captcha-Key": key,
      "Captcha-Code": code
    },
    params: {
      tenantId,
      username,
      password,
      grant_type: "captcha",
      scope: "all",
      type
    }
  });

export const refreshToken = (refresh_token, tenantId) =>
  request({
    url: "/api/goldnet-auth/oauth/token",
    method: "post",
    headers: {
      "Tenant-Id": tenantId
    },
    params: {
      tenantId,
      refresh_token,
      grant_type: "refresh_token",
      scope: "all"
    }
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
