import request from "@/router/axios";

export const startList = (current, size, params) => {
  return request({
    url: "/api/goldnet-flow/work/start-list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const claimList = (current, size, params) => {
  return request({
    url: "/api/goldnet-flow/work/claim-list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const todoList = (current, size, params) => {
  return request({
    url: "/api/goldnet-flow/work/todo-list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const sendList = (current, size, params) => {
  return request({
    url: "/api/goldnet-flow/work/send-list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const doneList = (current, size, params) => {
  return request({
    url: "/api/goldnet-flow/work/done-list",
    method: "get",
    params: {
      ...params,
      current,
      size
    }
  });
};

export const claimTask = taskId => {
  return request({
    url: "/api/goldnet-flow/work/claim-task",
    method: "post",
    params: {
      taskId
    }
  });
};

export const completeTask = data => {
  return request({
    url: "/api/goldnet-flow/work/complete-task",
    method: "post",
    data
  });
};
