<template>
  <basic-container>
    <el-tabs>
      <el-tab-pane label="中信回单明细">
        <el-row class="topWrapper">
          <el-form :model="formQuery"
                   :rules="rules"
                   ref="ruleForm"
                   label-width="120px"
                   class="demo-form-inline">
            <el-col :span="12">
              <el-form-item label="登录名	:"
                            prop="userName">
                <el-input v-model="formQuery.userName"
                          placeholder="请输入登录名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="主体账号	:"
                            prop="mainAccNo">
                <el-input v-model="formQuery.mainAccNo"
                          placeholder="请输入主体账号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="附属账号	:"
                            prop="subAccNo">
                <el-input v-model="formQuery.subAccNo"
                          placeholder="请输入附属账号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="起始日期	:"
                            prop="startDate">
                <el-date-picker v-model="formQuery.startDate"
                                value-format="yyyyMMdd"
                                type="date"
                                placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="终止日期	:"
                            prop="endDate">
                <el-date-picker v-model="formQuery.endDate"
                                value-format="yyyyMMdd"
                                type="date"
                                placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="起始记录号	:"
                            prop="startRecord">
                <el-input v-model="formQuery.startRecord"
                          type="number"
                          placeholder="请输入起始记录号"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="24"
                    class="btnCls">
              <el-button type="primary"
                         icon="el-icon-search"
                         @click="searchChange">查询</el-button>
              <!-- <el-button icon="el-icon-delete"
                         @click="searchReset">清空</el-button> -->
            </el-col>
          </el-form>

        </el-row>

        <el-table :data="data"
                  ref="crud"
                  :header-cell-style="{
        color: '#333',
        fontWeight: 700,
        background: '#f5f5f5'
      }"
                  border
                  align="center">
          <!-- 附属账号 -->
          <el-table-column align="center"
                           width="150"
                           label="附属账号">
            <template slot-scope="scope">
              <span>{{ scope.row.subAccNo }}</span>
            </template>
          </el-table-column>

          <!-- 交易类型 -->
          <el-table-column align="center"
                           width="150"
                           label="交易类型">
            <template slot-scope="scope">
              <span>{{ scope.row.tranType }}</span>
            </template>
          </el-table-column>

          <!-- 交易日期 -->
          <el-table-column align="center"
                           width="150"
                           label="交易日期">
            <template slot-scope="scope">
              <span>{{ scope.row.tranDate }}</span>
            </template>
          </el-table-column>

          <!-- 交易时间 -->
          <el-table-column align="center"
                           width="150"
                           label="交易时间">
            <template slot-scope="scope">
              <span>{{ scope.row.tranTime }}</span>
            </template>
          </el-table-column>

          <!-- 柜员交易号 -->
          <el-table-column align="center"
                           width="150"
                           label="柜员交易号">
            <template slot-scope="scope">
              <span>{{ scope.row.tellerNo }}</span>
            </template>
          </el-table-column>

          <!-- 交易序号 -->
          <el-table-column align="center"
                           width="150"
                           label="交易序号">
            <template slot-scope="scope">
              <span>{{ scope.row.tranSeqNo }}</span>
            </template>
          </el-table-column>

          <!-- 对方账号 -->
          <el-table-column align="center"
                           width="150"
                           label="对方账号">
            <template slot-scope="scope">
              <span>{{ scope.row.accountNo }}</span>
            </template>
          </el-table-column>

          <!-- 对方账户名称 -->
          <el-table-column align="center"
                           width="150"
                           label="对方账户名称">
            <template slot-scope="scope">
              <span>{{ scope.row.accountNm }}</span>
            </template>
          </el-table-column>

          <!-- 对方开户行名称 -->
          <el-table-column align="center"
                           width="150"
                           label="对方开户行名称">
            <template slot-scope="scope">
              <span>{{ scope.row.accBnkNm }}</span>
            </template>
          </el-table-column>

          <!-- 借贷标识 -->
          <el-table-column align="center"
                           width="150"
                           label="借贷标识">
            <template slot-scope="scope">
              <span>{{ scope.row.loanFlag=="C"?"贷":"借" }}</span>
            </template>
          </el-table-column>

          <!-- 交易金额 -->
          <el-table-column align="center"
                           width="150"
                           label="交易金额">
            <template slot-scope="scope">
              <span>{{ scope.row.tranAmt }}</span>
            </template>
          </el-table-column>

          <!-- 账户余额 -->
          <el-table-column align="center"
                           width="150"
                           label="账户余额">
            <template slot-scope="scope">
              <span>{{ scope.row.accBalAmt }}</span>
            </template>
          </el-table-column>
          <!-- 手续费金额 -->
          <el-table-column align="center"
                           width="150"
                           label="手续费金额">
            <template slot-scope="scope">
              <span>{{ scope.row.pdgAmt }}</span>
            </template>
          </el-table-column>
          <!-- 摘要 -->
          <el-table-column align="center"
                           width="150"
                           label="摘要">
            <template slot-scope="scope">
              <span>{{ scope.row.memo }}</span>
            </template>
          </el-table-column>
          <!-- 打印校验码 -->
          <el-table-column align="center"
                           fixed="right"
                           width="150"
                           label="打印校验码">
            <template slot-scope="scope">
              <span>{{ scope.row.verifyCode }}</span>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>

    </el-tabs>
    <div style="width:100%;height:40px;"></div>

  </basic-container>
</template>

<script>

import { mapGetters } from "vuex";
import { getList } from "@/api/dlptdtqy";

export default {
  data () {
    return {
      data: [],
      formQuery: {
        userName: "",
        mainAccNo: "",
        subAccNo: "",
        startDate: "",
        endDate: "",
        startRecord: 1,
        pageNumber: 10
      },
      rules: {
        userName: [
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        mainAccNo: [
          { required: true, message: '请输入主体账号', trigger: 'blur' }
        ],
        subAccNo: [
          { required: true, message: '请输入附属账号', trigger: 'blur' }
        ],
        startDate: [
          { required: true, message: '请选择起始日期', trigger: 'change' }
        ],
        endDate: [
          { required: true, message: '请选择终止日期', trigger: 'change' }
        ],
        startRecord: [
          { required: true, message: '请输入起始记录号', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo", "permission"]),

  },
  mounted () {


  },
  methods: {
    onLoad () {
      this.loading = true;
      getList(
        this.formQuery
      ).then(res => {
        if (res.data.code == 200 && res.data.data.code == 0) {
          console.log(res.data.data.userDataList)
          let arr = res.data.data.userDataList || []
          let list = []
          arr.map((i) => {
            if (i != "") {
              list.push(i)
            }
          })
          this.data = list || []

          console.log(this.data)
        } else {
          console.log(res)
          this.data = []
        }
        // if(res.data)
        this.loading = false;
        // this.selectionClear();
      });
    },
    searchChange () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.onLoad()
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    },
  },
  components: {

  }
};
</script>

<style lang="scss" scoped>
.topWrapper {
  padding-top: 20px;
  padding-bottom: 20px;
  .btnCls {
    text-align: center;
  }
}
</style>
