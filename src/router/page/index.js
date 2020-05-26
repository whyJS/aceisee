import Layout from "@/page/index/";

export default [
  {
    path: "/login",
    name: "登录页",
    component: () => import("@/page/login/index"),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: "/lock",
    name: "锁屏页",
    component: () => import("@/page/lock/index"),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: "/404",
    component: () => import("@/components/error-page/404"),
    name: "404",
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: "/403",
    component: () => import("@/components/error-page/403"),
    name: "403",
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: "/500",
    component: () => import("@/components/error-page/500"),
    name: "500",
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: "/",
    name: "主页",
    redirect: "/wel"
  },
  {
    path: "/myiframe",
    component: Layout,
    redirect: "/myiframe",
    children: [
      {
        path: ":routerPath",
        name: "iframe",
        component: () => import("@/components/iframe/main"),
        props: true
      }
    ]
  },
  {
    path: "/wel",
    component: Layout,
    name: "zz",
    source: "el-icon-s-grid",
    redirect: "/wel/index",
    children: [
      {
        path: "/wel/index",
        name: "首页",
        meta: {
          i18n: "dashboard"
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/wel/index")
      }
    ]
  },

  {
    path: "/study",
    component: Layout,
    name: "study",
    source: "el-icon-s-grid",
    redirect: "/study/learning",
    children: [
      {
        path: "/study/learning",
        name: "learning",
        meta: {
          isTab:false
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/study/learning")
      }
    ]
  },

  {
    path: "/info",
    component: Layout,
    redirect: "/info/index",
    children: [
      {
        path: "/info/index",
        name: "个人信息",
        meta: {
          i18n: "info"
        },
        component: () =>
          import(/* webpackChunkName: "views" */ "@/views/system/userinfo")
      }
    ]
  },
  {
    path: "*",
    redirect: "/404"
  }
];
