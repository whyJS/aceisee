import request from "@/router/axios";

export const loginByUsername = (data) =>
  request({
    url: "/user/login",
    method: "post",
    params: { ...data }
  });

