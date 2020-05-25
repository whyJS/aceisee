import {
  setToken,
  setRefreshToken,
  removeToken
} from "@/util/auth";
import { Message } from "element-ui";
import { setStore, getStore } from "@/util/store";
import { isURL, validatenull } from "@/util/validate";
import { deepClone } from "@/util/util";
import website from "@/config/website";
import {
  loginByUsername,
  getUserInfo,
  refreshToken,
  getButtons
} from "@/api/user";
import { getTopMenu, getRoutes } from "@/api/system/menu";

import ViewsRouter from "@/router/views/"; // 页面路由

function addPath(ele, first) {
  const menu = website.menu;
  const propsConfig = menu.props;
  const propsDefault = {
    label: propsConfig.label || "name",
    path: propsConfig.path || "path",
    icon: propsConfig.icon || "icon",
    children: propsConfig.children || "children"
  };
  const icon = ele[propsDefault.icon];
  ele[propsDefault.icon] = validatenull(icon) ? menu.iconDefault : icon;
  const isChild =
    ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
  if (!isChild) ele[propsDefault.children] = [];
  if (!isChild && first && !isURL(ele[propsDefault.path])) {
    ele[propsDefault.path] = ele[propsDefault.path] + "/index";
  } else {
    ele[propsDefault.children].forEach(child => {
      addPath(child);
    });
  }
}

const user = {
  state: {
    tenantId: getStore({ name: "tenantId" }) || "",
    userInfo: getStore({ name: "userInfo" }) || [],
    permission: getStore({ name: "permission" }) || {},
    roles: [],
    menu: getStore({ name: "menu" }) || [],
    menuId: getStore({ name: "menuId" }) || [],
    menuAll: getStore({ name: "menuAll" }) || [],
    token: getStore({ name: "token" }) || "",
    refreshToken: getStore({ name: "refreshToken" }) || "",
    menuList:ViewsRouter
  },
  actions: {
    //根据用户名登录
    LoginByUsername({ commit }) {
      return new Promise((resolve, reject) => {
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
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("SET_TOKEN", "");
            commit("SET_MENU", []);
            commit("SET_MENU_ID", {});
            commit("SET_MENU_ALL", []);
            commit("SET_ROLES", []);
            commit("DEL_ALL_TAG");
            commit("CLEAR_LOCK");
            removeToken();
            window.localStorage.clear()
            window.sessionStorage.clear()
            resolve();

        }, 10);
      });
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token);
      state.token = token;
      setStore({ name: "token", content: state.token, type: "session" });
    },
    SET_MENU_ID(state, menuId) {
      state.menuId = menuId;
      setStore({ name: "menuId", content: state.menuId, type: "session" });
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll;
      setStore({ name: "menuAll", content: state.menuAll, type: "session" });
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
      setRefreshToken(refreshToken);
      state.refreshToken = refreshToken;
      setStore({
        name: "refreshToken",
        content: state.refreshToken,
        type: "session"
      });
    },
    SET_TENANT_ID: (state, tenantId) => {
      state.tenantId = tenantId;
      setStore({ name: "tenantId", content: state.tenantId, type: "session" });
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({ name: "userInfo", content: state.userInfo });
    },
    SET_MENU: (state, menu) => {
      state.menu = menu;
      let menuAll = state.menuAll;
      if (!validatenull(menu)) {
        const obj = menuAll.filter(ele => ele.path === menu[0].path)[0];
        if (!obj) {
          menuAll = menuAll.concat(menu);
          state.menuAll = menuAll;
        }
        setStore({ name: "menuAll", content: menuAll, type: "session" });
      }
      setStore({ name: "menu", content: state.menu, type: "session" });
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      let result = [];

      function getCode(list) {
        list.forEach(ele => {
          if (typeof ele === "object") {
            const chiildren = ele.children;
            const code = ele.code;
            if (chiildren) {
              getCode(chiildren);
            } else {
              result.push(code);
            }
          }
        });
      }

      getCode(permission);
      state.permission = {};
      result.forEach(ele => {
        state.permission[ele] = true;
      });
      setStore({
        name: "permission",
        content: state.permission,
        type: "session"
      });
    }
  }
};
export default user;
