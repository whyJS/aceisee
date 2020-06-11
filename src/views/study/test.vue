<template>
  <basic-container>
    <el-row style="padding-bottom:20px;">
      <el-button icon="el-icon-arrow-left" type="primary">返回</el-button>
      <el-button type="warning" v-show="learning" icon="el-icon-edit" @click="learning = !learning">Test</el-button>
      <el-button type="warning" v-show="!learning" icon="el-icon-edit" @click="learning = !learning">Learning
      </el-button>
    </el-row>
    <el-row v-show="learning" :gutter="20">
      <el-col :span="12">

        <el-table :data="data" ref="crud" :header-cell-style="styleCss" border lazy align="left">

          <el-table-column align="center" label="Words">
            <template>
              <div class="listLeft">
                <el-table :data="listLeft" ref="crud" :show-header="styleCssLeft" highlight-current-row @row-click="btn"
                  border lazy align="left">
                  <el-table-column align="center">
                    <template slot-scope="scope">
                      <div class="leftItem">{{scope.row.text}}</div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table :data="data" ref="crud" :header-cell-style="styleCss" border lazy align="left">
          <el-table-column align="center" label="Detail">
            <template>
              <div class="listRight">
                <table width="100%" class="table" align="center" cellspacing="0" cellpadding="0">
                  <caption class="tableheader">学生成绩表
                  </caption>

                  <tbody style="width：100%">
                    <tr align="center">
                      <td>小明</td>
                      <td>89</td>

                    </tr>

                    <tr align="center">
                      <td>小红</td>
                      <td>96</td>

                    </tr>

                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小明</td>
                      <td>89</td>

                    </tr>

                    <tr align="center">
                      <td>小红</td>
                      <td>96</td>

                    </tr>

                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小明</td>
                      <td>89</td>

                    </tr>

                    <tr align="center">
                      <td>小红</td>
                      <td>96</td>

                    </tr>

                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小明</td>
                      <td>89</td>

                    </tr>

                    <tr align="center">
                      <td>小红</td>
                      <td>96</td>

                    </tr>

                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小明</td>
                      <td>89</td>

                    </tr>

                    <tr align="center">
                      <td>小红</td>
                      <td>96</td>

                    </tr>

                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                    <tr align="center">
                      <td>小张</td>
                      <td>54</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row class="top" v-show="!learning">
      <div class="item" v-for="(val,index) in trueList" :key="index">
        <el-button v-if="val" type="success" icon="el-icon-check" circle></el-button>
        <el-button v-else type="danger" icon="el-icon-close" circle></el-button>
      </div>

    </el-row>
    <el-row v-show="!learning">
      <div class="testlist">
        <diV class="testlistHeader">
          <h1>这是单词</h1>
        </diV>
        <table style="margin-left:250px;">
          <tbody>
            <tr>
              <td>
                <table class="ans werTable">
                  <tbody>
                    <tr>
                      <td><input style="width:30px;height:30px;border:2px solid #8f8f8f;" type="checkbox"
                          onclick="doAnswer(this,false,null,11906)"></td>
                      <td class="questionTD">开花；发育，成熟；繁荣</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table class="ans werTable">
                  <tbody>
                    <tr>
                      <td><input style="width:30px;height:30px;border:2px solid #8f8f8f;" type="checkbox"
                          onclick="doAnswer(this,true,null,11906)"></td>
                      <td class="questionTD">g</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table class="ans werTable">
                  <tbody>
                    <tr>
                      <td><input style="width:30px;height:30px;border:2px solid #8f8f8f;" type="checkbox"
                          onclick="doAnswer(this,false,null,11906)"></td>
                      <td class="questionTD">撒胡椒粉；大量给予</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table class="ans werTable">
                  <tbody>
                    <tr>
                      <td><input style="width:30px;height:30px;border:2px solid #8f8f8f;" type="checkbox"
                          onclick="doAnswer(this,false,null,11906)"></td>
                      <td class="questionTD">行星</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-row>
  </basic-container>
</template>

<script>
export default {
  name: "studyLearning",
  components: {},
  data () {
    return {
      learning: false,
      flag: false,
      data: [1],
      styleCss: {
        color: '#333',
        fontWeight: 700,
        background: '#f5f5f5'
      },
      listLeft: [
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '1' },
        { text: '2' },

      ],
      styleCssLeft: false,

      trueList: [false, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true]
    };
  },
  methods: {

    btn (row, col, event) {
      console.log(row)
      console.log(col)
      console.log(event)
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid #a9a9a9;
  border-bottom: 0px solid #a9a9a9;
  border-right: 0px solid #a9a9a9;
  .tableheader {
    width: 100%;
    font-weight: bold;
    background-color: rgb(229, 229, 229);
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #a9a9a9;
    border-bottom: 0px solid #a9a9a9;
  }
  tr {
    td {
      border-bottom: 1px solid #a9a9a9;
      border-right: 1px solid #a9a9a9;
      padding: 6px;
      box-sizing: border-box;
      &:nth-child(1) {
        background-color: rgb(229, 229, 229);
        width: 150px;
      }
    }
  }
}
.list {
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 400px);
}

.listLeft {
  .leftItem {
    width: 100%;
    text-align: left;
  }
}
.listRight {
  height: calc(100vh - 500px);
  overflow: auto;
}

.testlist {
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 400px);
  border: 1px dashed #333;
  .testlistHeader {
    width: 100%;
    text-align: center;
  }
  .testlistContent {
  }
}

.top {
  .item {
    display: inline-block;
    padding-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.listLeft {
  height: calc(100vh - 500px);
  overflow: auto;
  /* 用来设置当前页面element全局table 选中某行时的背景色*/
  .el-table__body tr.current-row > td {
    background-color: #409eff !important;
    color: #fff;
  }
  /* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #409eff;
    /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
    color: #fff;
  }
}
</style>
