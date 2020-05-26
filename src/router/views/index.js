import Layout from "@/page/index/";

export default [
  // TOEFL
  {
    path: "/toefl",
    component: Layout,
    redirect: "/toefl/learning",
    name: "TOEFL",
    source: "el-icon-s-data",
    meta: {},
    children: [
      {
        path: "/toefl/learning",
        component: () => import("@/views/toefl/learning.vue"),
        name: "TOEFL Learning",
        source: "el-icon-folder-add",
        meta: {}
      },
      {
        path: "/toefl/exercise",
        component: () => import("@/views/toefl/exercise.vue"),
        name: "TOEFL Exercise",
        source: "el-icon-folder-remove",
        meta: {}
      },
      {
        path: "/toefl/test",
        component: () => import("@/views/toefl/test.vue"),
        name: "TOEFL Test",
        source: "el-icon-folder-delete",
        meta: {}
      },
      {
        path: "/toefl/wordbook",
        component: () => import("@/views/toefl/wordbook.vue"),
        name: "TOEFL Word-Book",
        source: "el-icon-folder-checked",
        meta: {}
      }
    ]
  },

  // SAT
  {
    path: "/sat",
    component: Layout,
    redirect: "/sat/learning",
    name: "SAT",
    source: "el-icon-menu",
    meta: {},
    children: [
      {
        path: "/sat/learning",
        component: () => import("@/views/sat/learning.vue"),
        name: "SAT Learning",
        source: "el-icon-folder-add",
        meta: {}
      },
      {
        path: "/sat/exercise",
        component: () => import("@/views/sat/exercise.vue"),
        name: "SAT Exercise",
        source: "el-icon-folder-remove",
        meta: {}
      },
      {
        path: "/sat/test",
        component: () => import("@/views/sat/test.vue"),
        name: "SAT Test",
        source: "el-icon-folder-delete",
        meta: {}
      },
      {
        path: "/sat/wordbook",
        component: () => import("@/views/sat/wordbook.vue"),
        name: "SAT Word-Book",
        source: "el-icon-folder-checked",
        meta: {}
      }
    ]
  },

  // SSAT
  {
    path: "/ssat",
    component: Layout,
    redirect: "/ssat/learning",
    name: "SSAT",
    source: "el-icon-s-grid",
    meta: {},
    children: [
      {
        path: "/ssat/learning",
        component: () => import("@/views/ssat/learning.vue"),
        name: "SSAT Learning",
        source: "el-icon-folder-add",
        meta: {}
      },
      {
        path: "/ssat/exercise",
        component: () => import("@/views/ssat/exercise.vue"),
        name: "SSAT Exercise",
        source: "el-icon-folder-remove",
        meta: {}
      },
      {
        path: "/ssat/test",
        component: () => import("@/views/ssat/test.vue"),
        name: "SSAT Test",
        source: "el-icon-folder-delete",
        meta: {}
      },
      {
        path: "/ssat/wordbook",
        component: () => import("@/views/ssat/wordbook.vue"),
        name: "SSAT Word-Book",
        source: "el-icon-folder-checked",
        meta: {}
      }
    ]
  }
];
