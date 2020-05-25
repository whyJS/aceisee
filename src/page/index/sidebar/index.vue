<template>
  <div class="aceisee-sidebar">
    <logo></logo>
    <el-scrollbar style="height:100%">
      <div v-if="validatenull(menuList)" class="aceisee-sidebar--tip">
        {{ $t("menuTip") }}
      </div>
      <el-menu
        unique-opened
        :default-active="nowTagValue"
        mode="vertical"
        :show-timeout="200"
        :collapse="keyCollapse"
      >
        <sidebar-item
          :menu="menuList"
          :screen="screen"
          first
          :props="website.menu.props"
          :collapse="keyCollapse"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { validatenull } from "@/util/validate";
import { mapGetters } from "vuex";
import logo from "../logo";
import sidebarItem from "./sidebarItem";

export default {
  name: "sidebar",
  components: { sidebarItem, logo },
  inject: ["index"],
  data() {
    return {};
  },
  created() {
    this.index.openMenu(this.menuId);
  },
  computed: {
    ...mapGetters([
      "website",
      "menu",
      "tag",
      "keyCollapse",
      "screen",
      "menuId",
      "menuList"
    ]),
    nowTagValue: function() {
      return this.$router.$aceiseeRouter.getValue(this.$route);
    }
  },
  mounted() {},
  methods: {
    validatenull(val) {
      return validatenull(val);
    }
  }
};
</script>
<style lang="scss" scoped></style>
