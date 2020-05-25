import Layout from "@/page/index/";

export default [
  {
    path: "/wel",
    component: Layout,
    name: "zz",
    source:"iconfont iconicon_work",
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
  }
];
