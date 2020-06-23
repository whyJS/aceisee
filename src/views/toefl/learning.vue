<template>
  <basic-container>
    <el-tabs @tab-click="tableHandle" v-model="tabIndex" type="border-card">
      <el-tab-pane v-for="(item,index) in tab" :key="index"
        :label="`${item.name}（${item.children?item.children.length:0}）`" :name="item.code">
        <div class="top">
          <div class="topRadio" v-for="(val,i) in item.children" :key="i">
            <el-radio @change="tabClick" v-model="c3" :label="val.code" border>{{val.name}}</el-radio>
          </div>
        </div>
        <div class="content">
          <div class="listHeader">
            试题
          </div>
          <div class="list">

            <div v-for="(listval,listindex) in list" :key="listindex" class="topRadio">
              <el-radio @change="listClick" v-model="listId" :label="listval.listId" border>
                {{listval.listName}}</el-radio>
            </div>

          </div>

        </div>

        <!-- 立即开始 -->
        <el-row>
          <el-col :span="24" class="btnCls">
            <el-button type="primary" @click="study()" icon="el-icon-edit">立即开始</el-button>

          </el-col>
        </el-row>

      </el-tab-pane>

    </el-tabs>
  </basic-container>
</template>

<script>
import { getCategoryTree } from '@/api/user'
import { getLearningList } from '@/api/learn'

export default {
  name: "DashboardAdmin",
  components: {},
  data () {
    return {
      tab: [],
      tabIndex: '',
      c3: '',
      listId: '',
      list: [],

      data: [1],
      dataList: [1]

    };
  },
  created () {
    this.onload()
  },
  methods: {
    onload () {
      getCategoryTree().then((res) => {

        let tab = []
        if (res.data.data) {
          res.data.data.forEach(item => {
            if (item.code === 'TOEFL') {
              if (item.children) {

                item.children.forEach((val) => {
                  if (val.children) {
                    tab.push(val)
                  }
                })
              }
            }
          });
        }
        this.tab = tab
        this.tabIndex = this.tab[0].code
        console.log(this.tab)
      })
    },
    tabClick (val) {
      console.log(val)
      this.list = [
        {
          "listName": "ceshi2",
          "status": 1,
          "listId": 2
        },
        {
          "listName": "ceshi3",
          "status": 1,
          "listId": 3
        },
        {
          "listName": "ceshi4",
          "status": 1,
          "listId": 4
        },
        {
          "listName": "ceshi5",
          "status": 1,
          "listId": 5
        },
        {
          "listName": "ceshi6",
          "status": 1,
          "listId": 6
        }
      ]


      // getCategoryTree({
      //   c3: val
      // }).then((res) => {
      //   console.log(res)
      // })
    },
    tableHandle (val) {
      console.log(val)
      console.log(this.tabIndex)
    },
    listClick (val) {
      this.listId = val

    },
    study () {
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
  border: 1px solid #dcdfe6;
  .listHeader {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #333;
    background: rgb(245, 245, 245);
    box-sizing: border-box;
    padding-left: 10px;
    border-bottom: 1px solid #dcdfe6;
  }
  .list {
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    box-sizing: border-box;
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
