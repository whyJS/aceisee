<template>
  <div>
    <basic-container>
      <div class="wrapper">欢迎光临，账户中心</div>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "wel",
  data () {
    return {
      activeNames: ['1', '2', '3', '5'],
      logActiveNames: ['14']
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created () {
  },
  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
};
</script>

<style>
.el-font-size {
  font-size: 14px;
}
</style>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 70px;
  font-weight: bold;
  color: #333;
}
</style>

