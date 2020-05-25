<template>
  <div class="dashboard-editor-container">
    <!-- <div class="huanying">欢迎光临，ACEiSEE-WORD</div> -->
    <el-tabs type="border-card">
      <el-tab-pane label="听力（7）">
        <div>
          <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
          <!-- <div class="chart-wrapper" /> -->
          <el-table
            :data="tableData"
            border
            style="margin-top:50px;"
          >
            <el-table-column
              prop="date"
              label="试题"
              height="100"
            >
              <div class="tableRow">
                <span />
              </div>
            </el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="阅读TOEFL (2)">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'DashboardAdmin',
  components: {

  },
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
      tableData: [1]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.dashboard-editor-container {
  padding: 32px;
  background-color: #fff;
  // background-color: rgb(240, 242, 245);
  position: relative;
  .huanying{
    width: 100%;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    padding-top: 100px;
  }
  .chart-wrapper{
    height: 200px;
    width: 90%;
    margin: 0 auto;
  }
  .tableRow{
    height: 500px;
  }

}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
<style>
.el-table th {
  background: #f5f5f5;
}
</style>
