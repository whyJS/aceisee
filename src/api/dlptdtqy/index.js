import request from "@/router/axios";

export const getList = data => {
  return request({
    url:
      "/api/goldnet-accountcenter-center/account/queryCiticibClearAccountDetail",
    method: "post",
    data
  });
};
