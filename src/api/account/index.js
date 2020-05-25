import request from "@/router/axios";

export const getList = (current, size, clearingBatch) => {
  return request({
    url: "/api/goldnet-accountcenter-center/clearingbatch/list",
    method: "post",
    data: {
      ...clearingBatch,
      current,
      size
    }
  });
};

export const getDetailList = batchNo => {
  return request({
    url: "/api/goldnet-accountcenter-center/clearingbatchdetail/list",
    method: "post",
    data: {
      batchNo
    }
  });
};

export const setUser = data => {
  return request({
    url:
      "/api/goldnet-accountcenter-center/clearingbatchdetail/updateAccountBySid",
    method: "post",
    data
  });
};

// 手动清分
export const setClearing = data => {
  return request({
    url: "/api/goldnet-accountcenter-center/clearingbatchdetail/push",
    method: "post",
    data
  });
};
