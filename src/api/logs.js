import request from "@/router/axios";

export const getUsualList = (current, size) => {
  return request({
    url: "/api/goldnet-log/usual/list",
    method: "get",
    params: {
      current,
      size
    }
  });
};

export const getApiList = (current, size) => {
  return request({
    url: "/api/goldnet-log/api/list",
    method: "get",
    params: {
      current,
      size
    }
  });
};

export const getErrorList = (current, size) => {
  return request({
    url: "/api/goldnet-log/error/list",
    method: "get",
    params: {
      current,
      size
    }
  });
};

export const getUsualLogs = id => {
  return request({
    url: "/api/goldnet-log/usual/detail",
    method: "get",
    params: {
      id
    }
  });
};
export const getApiLogs = id => {
  return request({
    url: "/api/goldnet-log/api/detail",
    method: "get",
    params: {
      id
    }
  });
};
export const getErrorLogs = id => {
  return request({
    url: "/api/goldnet-log/error/detail",
    method: "get",
    params: {
      id
    }
  });
};
