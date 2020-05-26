<template>
  <div class="top-menu">
    <el-menu :default-active="activeIndex+''"
             mode="horizontal"
             text-color="#333">
      <el-menu-item :index="item.url"
                    v-for="(item,i) in list"
                    @click.native="openHome(item,i)"
                    :key="i">
        <template slot="title">
          <i :class="item.source"
             style="font-size:16px;"></i>
          <span>{{ generateTitle(item) }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "top-menu",
  data () {
    return {
      list: [
        {
          name: "首页",
          source: "el-icon-s-shop",
          url: "/wel/index"
        },
        {
          name: "TOEFL",
          source: "el-icon-s-data",
          url: "/toefl/learning"
        },
        {
          name: "SAT",
          source: "el-icon-menu",
          url: "/sat/learning"
        },
        {
          name: "SSAT",
          source: "el-icon-s-grid",
          url: "/ssat/learning"
        },
      ],

      itemHome: {
        name: "首页",
        source: "el-icon-menu"
      },
      activeIndex: "0",
      items: []
    };
  },
  inject: ["index"],
  created () {

  },
  computed: {

  },
  methods: {
    openHome (item, i) {

      this.$router.push(item.url).catch(err => {
        err;
      });
      this.activeIndex = i
    },
    generateTitle (item) {
      return this.$router.$aceiseeRouter.generateTitle(
        item.name,
        (item.meta || {}).i18n
      );
    }
  }
};
</script>
