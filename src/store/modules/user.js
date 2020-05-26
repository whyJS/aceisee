import { setToken, removeToken } from "@/util/auth";
// import { Message } from "element-ui";
import { setStore, getStore } from "@/util/store";

// import { loginByUsername } from "@/api/user";

import ViewsRouter from "@/router/views/"; // 页面路由

const user = {
  state: {
    userInfo: getStore({ name: "userInfo" }) || [],
    token: getStore({ name: "token" }) || "",
    menuList: ViewsRouter
  },
  actions: {
    //根据用户名登录
    LoginByUsername({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("SET_TOKEN", "这是测试token");
          commit("SET_REFRESH_TOKEN", "这是测试token");
          commit("SET_USER_INFO", {});
          commit("DEL_ALL_TAG");
          commit("CLEAR_LOCK");

          resolve();
        }, 10);
      });
    },

    // 登出
    LogOut({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("SET_TOKEN", "");
          commit("DEL_ALL_TAG");
          commit("CLEAR_LOCK");
          removeToken();
          window.localStorage.clear();
          window.sessionStorage.clear();
          resolve();
        }, 10);
      });
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token);
      state.token = token;
      setStore({ name: "token", content: state.token, type: "session" });
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({ name: "userInfo", content: state.userInfo });
    }
  }
};
export default user;
