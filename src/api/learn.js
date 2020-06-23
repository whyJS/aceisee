import request from "@/router/axios";

export const getLearningList = data =>
  request({
    url: "/list/learn",
    method: "get",
    params: { ...data }
  });
