<template>
  <basic-container>
    <el-row style="padding-bottom:20px;">
      <el-button icon="el-icon-arrow-left" type="primary" @click="back">返回</el-button>
      <el-button type="warning" v-show="learning" icon="el-icon-edit" @click="learning = !learning">Test</el-button>
      <el-button type="warning" v-show="!learning" icon="el-icon-edit" @click="learning = !learning">Learning
      </el-button>
    </el-row>
    <!-- <el-row>
      <el-select v-model="search"
                 filterable
                 placeholder="请选择">
        <el-option v-for="(item,index) in listLeft"
                   :key="index"
                   :label="item.text"
                   :value="item.id">
        </el-option>
      </el-select>
    </el-row> -->

    <el-row v-show="learning" :gutter="20">
      <el-col :span="12">
        <div class="content">
          <div class="listHeader">
            Words
          </div>
          <div class="list">
            <el-table :data="listLeft" ref="left" :show-header="styleCssLeft" highlight-current-row @row-click="btn"
              border lazy align="left">
              <el-table-column align="center">
                <template slot-scope="scope">
                  <div class="leftItem">{{scope.row.name}}</div>
                </template>
              </el-table-column>
            </el-table>
          </div>

        </div>

      </el-col>
      <el-col :span="12">

        <div class="content">
          <div class="listHeader">
            Detail
          </div>
          <div class="list">
            <div class="rightWrapper">
              <table width="100%" class="table" align="center" cellspacing="0" cellpadding="0">
                <caption class="tableheader">{{leftObj.name}}
                </caption>
                <tbody style="width：100%">
                  <tr align="center">
                    <td>kind</td>
                    <td>{{leftObj.kind}}</td>

                  </tr>
                  <tr align="center">
                    <td>phonetic</td>
                    <td>{{leftObj.phonetic}}</td>

                  </tr>
                  <tr align="center">
                    <td>zhDesc</td>
                    <td>{{leftObj.zhDesc}}</td>

                  </tr>
                  <tr align="center">
                    <td>enDesc</td>
                    <td>{{leftObj.enDesc}}</td>

                  </tr>
                  <tr align="center">
                    <td>wordRoot</td>
                    <td>{{leftObj.wordRoot}}</td>

                  </tr>
                  <tr align="center">
                    <td>example</td>
                    <td>{{leftObj.example}}</td>

                  </tr>

                </tbody>
              </table>
            </div>

          </div>

        </div>
      </el-col>
    </el-row>

    <!-- right -->
    <el-row class="top" v-show="!learning">
      <div class="item" v-for="(val,index) in trueList" :key="index">
        <el-button v-if="val.type" type="success" size="mini" icon="el-icon-check" circle></el-button>
        <el-button v-else type="danger" size="mini" icon="el-icon-close" circle></el-button>
      </div>

    </el-row>
    <el-row style="min-height:368px;" v-show="!learning">
      <div v-if="wordType == 1" class="testlist">
        <div v-for="(item,i) in wordList" :key="i" v-show="wordIndex == i">
          <div class="testlistHeader">
            <h1>{{item.title}}</h1>
          </diV>
          <table style="margin-left:250px;">
            <tbody>
              <tr>
                <td>
                  <table class="ans werTable">
                    <tbody>
                      <tr>
                        <td v-for="(val,index) in item.options" :key="index">
                          <input style="width:30px;height:30px;border:2px solid #8f8f8f;" type="checkbox"
                            @click="doAnswer(item.answer,val.key,item)">
                        </td>
                        <td class="questionTD">开花；发育，成熟；繁荣</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
      <div v-else-if="wordType == 0" class="testlist">
        <div class="star">
          <el-button type="primary" @click="star">开始</el-button>
        </div>
      </div>

      <div v-else class="testlist">
        <div class="word">
          <div v-show="!val.type" v-for="(val,index) in trueList" :key="index" class="wordItem">{{val.word.title}}</div>

        </div>
        <div class="end">
          <table width="100%" class="table" align="center" cellspacing="0" cellpadding="0">
            <caption class="tableheader">结果
            </caption>
            <tbody style="width：100%">
              <tr align="center">
                <td>Word count</td>
                <td>Right</td>
                <td>Wrong</td>
                <td>With time</td>
              </tr>
              <tr align="center">
                <td>{{wordCount}}</td>
                <td>{{right}}</td>
                <td>{{wrong}}</td>
                <td>{{withTime}}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </el-row>
  </basic-container>
</template>

<script>
// sorry you didn't pass the list
// import { getLearningList } from '@/api/learn'
export default {
  name: "studyLearning",
  components: {},
  data () {
    return {
      learning: true,
      styleCss: {
        color: '#333',
        fontWeight: 700,
        background: '#f5f5f5'
      },
      listLeft: [],
      styleCssLeft: false,
      leftObj: {},

      wordType: 0,
      wordList: [],
      wordIndex: 0,
      trueList: [],
      search: '',
      starTime: 0,
      endTime: 0
    };
  },
  created () {
    this.onload()
  },
  methods: {
    onload () {
      setTimeout(() => {

        this.listLeft = [
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind1",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind2",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind3",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind1",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind2",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind3",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind1",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind2",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind3",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1",
            "wordId": 1,
            "kind": "kind",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          },
          {
            "name": "ceshi1xxxx",
            "wordId": 1,
            "kind": "kind",
            "phonetic": "phonetic",
            "zhDesc": "zhDesc",
            "enDesc": "enDesc",
            "wordRoot": "wordRoot",
            "example": "example",
            "fileUrl": "fileUrl"
          }
        ]
        this.leftObj = this.listLeft[0] || {}
        this.$refs.left.setCurrentRow(this.listLeft[0]);
        // 答题list
        this.wordList = [
          {
            "wordId": 1,
            "type": 1,
            "title": "word1",
            "options": [
              {
                "key": "A",
                "value": "你好"
              },
            ],
            "answer": "A"
          },
          {
            "wordId": 1,
            "type": 1,
            "title": "word2",
            "options": [
              {
                "key": "A",
                "value": "你好"
              },
            ],
            "answer": "b"
          },
          {
            "wordId": 1,
            "type": 1,
            "title": "word3",
            "options": [
              {
                "key": "A",
                "value": "你好"
              },
            ],
            "answer": "c"
          },
          {
            "wordId": 1,
            "type": 1,
            "title": "word4",
            "options": [
              {
                "key": "A",
                "value": "你好"
              },
            ],
            "answer": "d"
          },
        ]
      }, 2000)

      // getLearningList().then((res) => {

      // })
    },
    btn (row) {
      this.leftObj = row
    },
    star () {
      this.wordType = 1
      this.starTime = new Date().getTime()
    },
    doAnswer (i1, i2, word) {
      if (i1 == i2) {
        let obj = {
          word: word,
          type: true
        }
        this.trueList.push(obj)
      } else {
        let obj = {
          word: word,
          type: false
        }
        this.trueList.push(obj)
      }

      if (this.trueList.length < this.wordList.length) {
        this.wordIndex = this.wordIndex + 1
      } else {
        this.wordType = 2
        this.endTime = new Date().getTime()
      }
    },
    back () {
      this.$router.back()
    },
    // 计算两个时间差 dateBegin 开始时间
    timeFn (leave1) {

      var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000)

      // var leave4 = leave3 % (60 * 1000)      //计算分钟数后剩余的毫秒数
      // var minseconds = Math.round(leave4 / 1000)
      let h = ''
      let m = ''
      let s = ''
      if (hours < 10) {
        h = "0" + hours
      } else {
        h = hours
      }
      if (minutes < 10) {
        m = "0" + minutes
      } else {
        m = minutes
      }
      if (seconds < 10) {
        s = "0" + seconds
      } else {
        s = seconds
      }
      var timeFn = h + ":" + m + ":" + s;
      return timeFn;
    }
  },
  computed: {
    wordCount () {
      return this.trueList.length
    },
    right () {
      let num = 0
      this.trueList.forEach((item) => {
        if (item.type) {
          num++
        }
      })
      return num
    },
    wrong () {
      let num = 0
      this.trueList.forEach((item) => {
        if (!item.type) {
          num++
        }
      })
      return num
    },
    withTime () {
      if (this.endTime == 0) {
        return '00:00:00'
      } else {
        let time = this.endTime - this.starTime
        return this.timeFn(time)
      }
    }

  }
};
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid #dcdfe6;
  height: calc(100vh - 400px);
  overflow: hidden;
  position: relative;
  .listHeader {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #333;
    background: rgb(245, 245, 245);
    box-sizing: border-box;
    padding-left: 10px;
    border-bottom: 1px solid #dcdfe6;
    text-align: center;
  }
  .list {
    width: 100%;
    height: calc(100vh - 442px);
    // padding: 20px;
    overflow: auto;
    box-sizing: border-box;
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
    .rightWrapper {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 20px;
    }
  }
}

//试题
.testlist {
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 400px);
  min-height: 368px;
  border: 1px dashed #333;
  .testlistHeader {
    width: 100%;
    text-align: center;
  }
  .testlistContent {
  }
  .star {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .wordItem {
      padding: 5px;
      margin: 5px;
      background-color: rgb(187, 187, 187);
      color: rgb(255, 255, 255);
    }
  }
  .end {
    width: 400px;
    height: 100px;
    margin: 0 auto;
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
        }
      }
    }
  }
}

.top {
  overflow-x: auto;
  height: 40px;
  white-space: nowrap;
  .item {
    display: inline-block;
    padding-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="scss">
.content {
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
