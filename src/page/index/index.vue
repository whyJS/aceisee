<template>
  <div class="aceisee-contail" :class="{ 'aceisee--collapse': isCollapse }">
    <div class="aceisee-header">
      <!-- 顶部导航栏 -->
      <top ref="top" />
    </div>
    <div class="aceisee-layout">
      <div class="aceisee-left">
        <!-- 左侧导航栏 -->
        <sidebar />
      </div>
      <div class="aceisee-main">
        <!-- 顶部标签卡 -->
        <tags />
        <!-- 主体视图层 -->
        <div
          style="height:100%;overflow-y:auto;overflow-x:hidden;"
          id="aceisee-view"
          v-show="!isSearch"
        >
          <keep-alive>
            <router-view class="aceisee-view" v-if="$route.meta.$keepAlive" />
          </keep-alive>
          <router-view class="aceisee-view" v-if="!$route.meta.$keepAlive" />
        </div>
      </div>
    </div>
    <div class="aceisee-shade" @click="showCollapse"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tags from "./tags";
// import search from "./search";
import top from "./top/";
import sidebar from "./sidebar/";
import admin from "@/util/admin";
// import { validatenull } from "@/util/validate";
// import { calcDate } from "@/util/date.js";
// import { getStore } from "@/util/store.js";

export default {
  components: {
    top,
    tags,
    // search,
    sidebar
  },
  name: "index",
  provide() {
    return {
      index: this
    };
  },
  data() {
    return {
      //搜索控制
      isSearch: false,
      //刷新token锁
      refreshLock: false,
      //刷新token的时间
      refreshTime: ""
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  computed: mapGetters(["isMenu", "isLock", "isCollapse", "website"]),
  props: [],
  methods: {
    showCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    // 初始化
    init() {
      this.$store.commit("SET_SCREEN", admin.getScreen());
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit("SET_SCREEN", admin.getScreen());
        }, 0);
      };
      // this.$store.dispatch("FlowRoutes").then(() => {
      // });
    },
    //打开菜单
    openMenu() {
      console.log("xxxx");
    }
  }
};
</script>
