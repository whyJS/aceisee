import Layout from "@/page/index/";

export default [
  // TOEFL
  {
    path: "/toefl",
    component: Layout,
    redirect: "/toefl/learning",
    name: "TOEFL",
    source: "el-icon-s-grid",
    meta: {},
    children: [
      {
        path: "/toefl/learning",
        component: () => import("@/views/toefl/learning.vue"),
        name: "Learning",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/toefl/exercise",
        component: () => import("@/views/toefl/exercise.vue"),
        name: "Exercise",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/toefl/test",
        component: () => import("@/views/toefl/test.vue"),
        name: "Test",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/toefl/wordbook",
        component: () => import("@/views/toefl/wordbook.vue"),
        name: "Word Book",
        source: "el-icon-s-grid",
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
    source: "el-icon-s-grid",
    meta: {},
    children: [
      {
        path: "/sat/learning",
        component: () => import("@/views/sat/learning.vue"),
        name: "Learning",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/sat/exercise",
        component: () => import("@/views/sat/exercise.vue"),
        name: "Exercise",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/sat/test",
        component: () => import("@/views/sat/test.vue"),
        name: "Test",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/sat/wordbook",
        component: () => import("@/views/sat/wordbook.vue"),
        name: "Word Book",
        source: "el-icon-s-grid",
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
        name: "Learning",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/ssat/exercise",
        component: () => import("@/views/ssat/exercise.vue"),
        name: "Exercise",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/ssat/test",
        component: () => import("@/views/ssat/test.vue"),
        name: "Test",
        source: "el-icon-s-grid",
        meta: {}
      },
      {
        path: "/ssat/wordbook",
        component: () => import("@/views/ssat/wordbook.vue"),
        name: "Word Book",
        source: "el-icon-s-grid",
        meta: {}
      }
    ]
  }
];
