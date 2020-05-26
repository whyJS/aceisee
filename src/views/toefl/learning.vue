<template>
  <basic-container>
    <el-tabs type="border-card">
      <el-tab-pane label="听力（7）">
        <div>
          <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="阅读TOEFL (2)">配置管理</el-tab-pane>
    </el-tabs>
  </basic-container>
</template>

<script>
export default {
  name: "DashboardAdmin",
  components: {},
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: #fff;
  position: relative;
  .huanying {
    width: 100%;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    padding-top: 100px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
