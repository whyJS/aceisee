<template>
  <basic-container>
    <el-row></el-row>
    <el-row>
      <el-col :span="12">
        
         <el-table :data="data"
                    ref="crud"
                    :header-cell-style="styleCss"
                    border
                    lazy
                    align="left">

            <el-table-column align="center"
                             label="Words">
              <template>
                <div class="listLeft">
                  <el-table :data="listLeft"
                    ref="crud"
                    :show-header="styleCssLeft"
                    highlight-current-row
                   @row-click = "btn"
                    border
                    lazy
                    align="left">
                    <el-table-column  align="center">
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
         <el-table :data="data"
                    ref="crud"
                     :header-cell-style="styleCss"
                    border
                    lazy
                    align="left">
            <el-table-column align="center"
                             label="Detail">
              <template>
                <div class="listRight">
                  <el-table :data="listLeft"
                    ref="crud"
                    highlight-current-row
                   @row-click = "btn"
                    border
                    lazy
                    align="left">
                    <el-table-column  align="center">
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
    </el-row>
    <el-row></el-row>
  </basic-container>
</template>

<script>
export default {
  name: "studyLearning",
  components: {},
  data () {
    return {
      flag:false,
      data:[1],
     styleCss:{
        color: '#333',
        fontWeight: 700,
        background: '#f5f5f5'
      },
      listLeft:[
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'1'},
        {text:'2'},

      ],
      styleCssLeft:false,
    };
  },
  methods: {

    btn(row,col,event){
         console.log(row) 
         console.log(col)
         console.log(event)
    }
  }
};
</script>

<style lang="scss" scoped>
.list{
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 400px);
}

.listLeft{
  .leftItem{
    width: 100%;
    text-align: left;
  }
}
.listRight{
  height: calc(100vh - 500px);
  overflow: auto;

}
</style>

<style lang="scss">
.listLeft{
  height: calc(100vh - 500px);
  overflow: auto;
  /* 用来设置当前页面element全局table 选中某行时的背景色*/
  .el-table__body tr.current-row>td{
    background-color: #409EFF !important;
    color: #fff;
  }
  /* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #409EFF;
    /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
    color: #fff;
  }
}


</style>
