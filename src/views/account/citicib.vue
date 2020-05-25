<template>
  <basic-container>
    <el-tabs>
      <el-tab-pane label="中信清分管理">
        <el-row class="topWrapper">
          <el-form :model="formQuery"
                   label-width="100px"
                   class="demo-form-inline">
            <el-col :span="12">
              <el-form-item label="渠道名称	:">
                <el-input v-model="formQuery.chId"
                          placeholder="请输入渠道名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="批次号	:">
                <el-input v-model="formQuery.batchNo"
                          placeholder="请输入批次号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="清分状态:">
                <el-select style="width:100%;"
                           v-model="formQuery.dealStatus"
                           placeholder="请选择">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="24"
                    class="btnCls">
              <el-button type="primary"
                         icon="el-icon-search"
                         @click="searchChange">查询</el-button>
              <el-button icon="el-icon-delete"
                         @click="searchReset">清空</el-button>
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
                  row-key="id"
                  border
                  lazy
                  align="center">
          <el-table-column align="center"
                           fixed="left"
                           type="selection"
                           width="40"> </el-table-column>
          <!-- id -->
          <el-table-column align="center"
                           type="index"
                           fixed="left"
                           label="#"
                           width="40"> </el-table-column>
          <!-- 批次号	 -->
          <el-table-column align="center"
                           fixed="left"
                           label="批次号	">
            <template slot-scope="scope">
              <span class="spanCls"
                    @click="showDetail(scope.row)">{{ scope.row.batchNo }}</span>
            </template>
          </el-table-column>

          <!-- 渠道 -->
          <el-table-column align="center"
                           label="渠道">
            <template slot-scope="scope">
              <span>{{ scope.row.chId }}</span>
            </template>
          </el-table-column>

          <!-- 航信金额	 -->
          <el-table-column align="center"
                           label="航信金额	">
            <template slot-scope="scope">
              <span>{{ scope.row.creditAmountCore }}</span>
            </template>
          </el-table-column>

          <!-- 本次清分金额	 -->
          <el-table-column align="center"
                           label="本次清分金额">
            <template slot-scope="scope">
              <span>{{ scope.row.payoffAmountCore	 }}</span>
            </template>
          </el-table-column>

          <!-- 清分状态 -->
          <el-table-column align="center"
                           label="清分状态">
            <template slot-scope="scope">
              <span>{{ scope.row.dealStatus | dealStatus }}</span>
            </template>
          </el-table-column>

          <!-- 清分时间	 -->
          <!-- <el-table-column align="center"
                           label="清分时间	">
            <template slot-scope="scope">
              <span>{{ scope.row.dealTime }}</span>
            </template>
          </el-table-column> -->

          <!-- 清分金额	 -->
          <!-- <el-table-column align="center"
                           label="清分金额">
            <template slot-scope="scope">
              <span>{{ scope.row.dealAmount	 }}</span>
            </template>
          </el-table-column> -->
        </el-table>

        <pagination v-show="page.total > 0"
                    :total="page.total"
                    :page.sync="page.currentPage"
                    :limit.sync="page.pageSize"
                    @pagination="onLoad" />
      </el-tab-pane>

    </el-tabs>

    <el-drawer ref="viewDrawer"
               title="修改账户信息"
               :visible.sync="viewDrawer"
               :destroy-on-close="destroyOnClose"
               direction="rtl"
               :append-to-body="appendToBody"
               size="50%">
      <user-edit @closeEdit="closeEdit" />
    </el-drawer>

    <el-drawer ref="detailDrawer"
               :title="isEditTitle"
               :visible.sync="detaildrawer"
               :destroy-on-close="destroyOnClose"
               direction="rtl"
               :append-to-body="appendToBody"
               size="80%">
      <account-detail :batchNo="batchNo"
                      :bankType="bankType"
                      :chId="chId"
                      @closeView="closeView"></account-detail>
    </el-drawer>

  </basic-container>
</template>

<script>

import { mapGetters } from "vuex";
import UserEdit from "./components/user-edit";
import accountDetail from "./components/detail";
import { getList } from "@/api/account";

export default {
  data () {
    return {
      data: [],
      options: [{
        value: '0',
        label: '未处理'
      }, {
        value: '1',
        label: '处理中'
      }, {
        value: '2',
        label: '成功'
      }, {
        value: '3',
        label: '处理失败'
      }, {
        value: '4',
        label: '通知航信成功'
      }, {
        value: '5',
        label: '通知航信失败'
      }],
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 10
      },
      formQuery: {
        chId: '',//渠道名称
        batchNo: '',//批次号
        bankType: "CITICIB",// 银行类型
        dealStatus: "",//处理状态
      },

      loading: false,

      // 详情
      detaildrawer: false,
      appendToBody: true,
      destroyOnClose: true,
      isEditTitle: '详情',
      batchNo: '',//批次号
      bankType: '',//银行编码	
      chId: '',//渠道ID	

      // 修改账户信息
      viewDrawer: false,

    };
  },
  filters: {
    dealStatus (value) {
      if (value == 0) {
        return '未处理'
      } else if (value == 1) {
        return '处理中'
      } else if (value == 2) {
        return '成功'
      } else if (value == 3) {
        return '处理失败'
      } else if (value == 4) {
        return '通知航信成功'
      } else if (value == 5) {
        return '通知航信失败'
      } else {
        return ''
      }
    }
  },
  computed: {
    ...mapGetters(["userInfo", "permission"]),
    permissionList () {
      return {
        viewBtn: this.vaildData(this.permission.account_clear_view, false),
        clearBtn: this.vaildData(this.permission.account_clear_clear, false),
        editBtn: this.vaildData(this.permission.account_clear_edit, false)
      };
    }
  },
  mounted () {
    this.onLoad()
  },
  methods: {
    onLoad () {
      this.loading = true;
      getList(
        this.page.currentPage,
        this.page.pageSize,
        Object.assign({}, this.formQuery)
      ).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
      });
    },
    // 搜索
    searchChange () {

      this.onLoad();
    },
    // 重制
    searchReset () {

      this.formQuery = {
        chId: '',//渠道名称
        batchNo: '',//批次号
        bankType: "CITICIB",// 银行类型
        dealStatus: "",//处理状态
      }
      this.onLoad();
    },

    // 关闭弹框
    closeView () {
      this.$refs.detailDrawer.closeDrawer();
      this.detaildrawer = false;
    },
    closeEdit () {
      this.$refs.viewDrawer.closeDrawer();
      this.viewDrawer = false;
    },
    // 打开详情
    showDetail (i) {
      this.batchNo = i.batchNo
      this.bankType = i.bankType
      this.chId = i.chId
      this.detaildrawer = true
    },
    showUser () {
      this.viewDrawer = true;
    }

  },
  components: {
    "user-edit": UserEdit,
    "account-detail": accountDetail
  }
};
</script>

<style lang="scss" scoped>
.topWrapper {
  padding-top: 20px;
  .btnCls {
    text-align: center;
  }
}
.spanCls {
  color: #409eff;
  cursor: pointer;
}
</style>
