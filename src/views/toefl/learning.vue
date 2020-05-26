<template>
  <basic-container>
    <el-tabs type="border-card">
      <el-tab-pane label="听力（7）">
        <div class="top">
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="1"
                      border>听力测试试题1</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="2"
                      border>听力测试试题2</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="3"
                      border>听力测试试题3</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="4"
                      border>听力测试试题4</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="5"
                      border>听力测试试题5</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="6"
                      border>听力测试试题6</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="7"
                      border>听力测试试题7</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="8"
                      border>听力测试试题8</el-radio>
          </div>
          <div class="topRadio">
            <el-radio v-model="radio1"
                      label="9"
                      border>听力测试试题9</el-radio>
          </div>
        </div>
        <div class="content">
          <el-table :data="data"
                    ref="crud"
                    :header-cell-style="{
        color: '#333',
        fontWeight: 700,
        background: '#f5f5f5'
      }"
                    border
                    lazy
                    align="left">

            <!-- 航信编号	 -->
            <el-table-column align="left"
                             label="试题">
              <template>
                <div class="list">
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="1"
                              border>听力测试试题1</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="2"
                              border>听力测试试题2</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="3"
                              border>听力测试试题3</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="4"
                              border>听力测试试题4</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="5"
                              border>听力测试试题5</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="6"
                              border>听力测试试题6</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="7"
                              border>听力测试试题7</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="8"
                              border>听力测试试题8</el-radio>
                  </div>
                  <div class="topRadio">
                    <el-radio v-model="radio1"
                              label="9"
                              border>听力测试试题9</el-radio>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 立即开始 -->
        <el-row>
          <el-col :span="24"
                  class="btnCls">
            <el-button type="primary"
            @click="study()"
                       icon="el-icon-edit">立即开始</el-button>

          </el-col>
        </el-row>

      </el-tab-pane>
      <el-tab-pane label="阅读TOEFL (2)">配置管理</el-tab-pane>
    </el-tabs>
  </basic-container>
</template>

<script>
export default {
  name: "DashboardAdmin",
  components: {},
  data () {
    return {
      data: [1],
      radio1: "1",
      radio2: "2",
      radio3: "3",
      radio4: "4",
      radio5: "5",
      radio6: "6",
      radio7: "7",
      radio8: "8",
      radio9: "9"
    };
  },
  methods: {
    study(){
      this.$router.push('/study/learning')
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  flex-wrap: wrap;
  .topRadio {
    // width: 100px;
    margin-top: 10px;
    margin-right: 16px;
  }
}
.content {
  margin-top: 30px;
  .list {
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 20px;
    .topRadio {
      // width: 100px;
      margin-top: 20px;
      margin-right: 16px;
    }
  }
}

.btnCls {
  text-align: center;
  margin-top: 40px;
}
</style>
