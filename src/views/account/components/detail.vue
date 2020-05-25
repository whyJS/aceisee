<template>
  <div v-loading="fetching"
       class="createPost-container">
    <el-table :data="data"
              ref="crud"
              :header-cell-style="{
        color: '#333',
        fontWeight: 700,
        background: '#f5f5f5'
      }"
              row-key="id"
              border
              lazy
              align="center">
      <!-- id -->
      <el-table-column align="center"
                       type="index"
                       fixed="left"
                       label="#"
                       width="40"> </el-table-column>
      <!-- 航信编号	 -->
      <el-table-column align="center"
                       width="150"
                       fixed="left"
                       label="航信编号">
        <template slot-scope="scope">
          <span>{{ scope.row.claimsNo }}</span>
        </template>
      </el-table-column>

      <!-- 航信金额 -->
      <el-table-column align="center"
                       width="150"
                       label="航信金额">
        <template slot-scope="scope">
          <span>{{ scope.row.claimsAmount }}</span>
        </template>
      </el-table-column>

      <!-- 账户id	 -->
      <el-table-column align="center"
                       width="150"
                       label="账户id	">
        <template slot-scope="scope">
          <span>{{ scope.row.aisinoBankSid }}</span>
        </template>
      </el-table-column>

      <!-- 批次号	 -->
      <el-table-column align="center"
                       width="150"
                       label="批次号	">
        <template slot-scope="scope">
          <span>{{ scope.row.batchNo }}</span>
        </template>
      </el-table-column>

      <!-- 付款人账号	 -->
      <el-table-column align="center"
                       width="150"
                       label="付款人账号	">
        <template slot-scope="scope">
          <span>{{ scope.row.payAcno }}</span>
        </template>
      </el-table-column>

      <!-- 付款人户名	 -->
      <el-table-column align="center"
                       width="180"
                       label="付款人户名	">
        <template slot-scope="scope">
          <span>{{ scope.row.payAcname }}</span>
        </template>
      </el-table-column>

      <!-- 代理企业账号	 -->
      <el-table-column align="center"
                       width="150"
                       label="代理企业账号	">
        <template slot-scope="scope">
          <span>{{ scope.row.memberAcno }}</span>
        </template>
      </el-table-column>

      <!-- 代理企业名称	 -->
      <el-table-column align="center"
                       width="150"
                       label="代理企业名称	">
        <template slot-scope="scope">
          <span>{{ scope.row.memberAcname }}</span>
        </template>
      </el-table-column>

      <!-- 收款人账号	 -->
      <el-table-column align="center"
                       width="150"
                       label="收款人账号">
        <template slot-scope="scope">
          <span>{{ scope.row.rcvAcno }}</span>
        </template>
      </el-table-column>

      <!-- 收款人户名		 -->
      <el-table-column align="center"
                       width="150"
                       label="收款人户名	">
        <template slot-scope="scope">
          <span>{{ scope.row.rcvAcname }}</span>
        </template>
      </el-table-column>

      <!-- 收款方联行号		 -->
      <el-table-column align="center"
                       width="150"
                       label="收款方联行号	">
        <template slot-scope="scope">
          <span>{{ scope.row.rcvBankNo }}</span>
        </template>
      </el-table-column>
      <!-- 收款方行名		 -->
      <el-table-column align="center"
                       width="150"
                       label="收款方行名	">
        <template slot-scope="scope">
          <span>{{ scope.row.rcvBankName }}</span>
        </template>
      </el-table-column>
      <!-- 金额	 -->
      <el-table-column align="center"
                       width="150"
                       label="金额">
        <template slot-scope="scope">
          <span>{{ scope.row.amt }}</span>
        </template>
      </el-table-column>
      <!-- 企业凭证编号		 -->
      <el-table-column align="center"
                       width="150"
                       label="企业凭证编号	">
        <template slot-scope="scope">
          <span>{{ scope.row.certNo }}</span>
        </template>
      </el-table-column>
      <!-- 清分处理时间		 -->
      <el-table-column align="center"
                       width="150"
                       label="清分处理时间	">
        <template slot-scope="scope">
          <span>{{ scope.row.clearingHandleDate }}</span>
        </template>
      </el-table-column>
      <!-- 发送结果	 -->
      <el-table-column align="center"
                       width="150"
                       label="发送结果">
        <template slot-scope="scope">
          <span>{{ scope.row.sendStatus | sendStatus }}</span>
        </template>
      </el-table-column>
      <!-- 清分处理结果	 -->
      <el-table-column align="center"
                       width="150"
                       label="清分处理结果">
        <template slot-scope="scope">
          <span>{{ scope.row.status | status}}</span>
        </template>
      </el-table-column>
      <!-- 失败原因		 -->
      <el-table-column align="center"
                       width="150"
                       label="失败原因	">
        <template slot-scope="scope">
          <span>{{ scope.row.failedReason }}</span>
        </template>
      </el-table-column>
      <!-- 是否自持	 -->
      <!-- <el-table-column align="center"
                       width="150"
                       label="是否自持">
        <template slot-scope="scope">
          <span>{{ scope.row.corpHoldStatus | corpHoldStatus }}</span>
        </template>
      </el-table-column> -->

      <!-- 操作 -->
      <el-table-column align="center"
                       fixed="right"
                       label="操作"
                       width="180">
        <template slot-scope="scope">
          <el-button icon="el-icon-view"
                     type="text"
                     v-if="scope.row.failedReason.length > 0 "
                     @click="bankDetail(scope.row)"
                     size="small">修改账户</el-button>
          <!-- <el-button type="text"
                     icon="el-icon-edit"
                     @click="setClearing(scope.row)"
                     v-if="scope.row.status == 1"
                     size="small">手动清分</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改银行账户"
               :visible.sync="dialogVisible"
               append-to-body="true"
               width="40%">
      <el-form :model="formQuery"
               label-width="120px"
               class="demo-form-inline">
        <el-col :span="24">
          <el-form-item label="银行户名:">
            <el-input disabled="true"
                      v-model="formQuery.rcvAcname"
                      placeholder="请输入银行户名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="银行账号:">
            <el-input v-model="formQuery.rcvAcno"
                      placeholder="请输入银行账号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="开户银行全称:">
            <el-input v-model="formQuery.rcvBankName"
                      placeholder="请输入开户银行全称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="开户银行联行号:">
            <el-input v-model="formQuery.rcvBankNo"
                      placeholder="请输入开户银行联行号"></el-input>
          </el-form-item>
        </el-col>

      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="setUserClick">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getDetailList, setUser, setClearing } from "@/api/account";


export default {
  // name: ,
  components: {

  },
  filters: {
    sendStatus (value) {
      if (value == 0) {
        return '未发送'
      } else if (value == 1) {
        return '发送成功'
      } else if (value == 2) {
        return '发送失败'
      } else {
        return ''
      }
    },
    status (value) {
      if (value == 0) {
        return '成功'
      } else if (value == 1) {
        return '失败'
      } else if (value == 2) {
        return '未知'
      } else if (value == 3) {
        return '审核拒绝'
      } else if (value == 4) {
        return '用户撤销 '
      } else if (value == 9) {
        return '未处理---初始状态'
      } else {
        return ''
      }
    },
    corpHoldStatus (value) {
      if (value == 0) {
        return '非自持'
      } else if (value == 1) {
        return '自持'
      } else {
        return ''
      }
    }
  },
  props: {
    batchNo: {
      type: String,
      default: ''
    },
    bankType: {
      type: String,
      default: ''
    },
    chId: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      eleSize: 'small',
      fetching: false,
      data: [],
      dialogVisible: false,
      formQuery: {
        "aisinoBankSid": "",
        "rcvAcno": "",
        "rcvAcname": "",
        "rcvBankNo": "",
        "rcvBankName": ""
      }
    }
  },
  created () {
    this.before()
  },

  watch: {

  },
  methods: {
    before () {
      this.fetching = true;
      getDetailList(this.batchNo).then(res => {
        this.data = res.data.data;
        this.fetching = false;
      });
    },
    closeView () {
      this.$emit("closeView")
    },
    bankDetail (i) {

      this.formQuery.aisinoBankSid = i.aisinoBankSid
      this.formQuery.rcvAcno = i.rcvAcno
      this.formQuery.rcvAcname = i.rcvAcname
      this.formQuery.rcvBankName = i.rcvBankName
      this.formQuery.rcvBankNo = i.rcvBankNo


      this.dialogVisible = true

    },
    //手动清分
    setClearing (i) {
      this.$confirm("确定手动清分?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        return setClearing({
          bankType: this.bankType,
          chId: this.chId,
          batchNo: i.batchNo,
          claimsNo: i.claimsNo
        });
      })
        .then(() => {
          this.before();
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
    },
    setUserClick () {
      setUser(this.formQuery).then(() => {

        this.before()
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.dialogVisible = false
      });
    }
    // setUser () {
    //   setUser()
    // }
  }

}
</script>

<style lang="scss" scoped>
.createPost-container {
  position: relative;
  z-index: 1000;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 200px;
  padding-left: 20px;
  padding-right: 20px;
  .btnArr {
    text-align: center;
  }
}
</style>
