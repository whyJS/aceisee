<template>
  <div v-loading="fetching" class="createPost-container">
    <el-form
      ref="postForm"
      :model="postForm"
      :rules="rules"
      :inline-message="false"
      label-width="120px"
      class="form-container"
    >
      <div class="createPost-main-container">
        <el-card shadow="never">
          <el-row>
            <el-col :span="24">
              <el-form-item label="系统类型:" prop="sysType">
                <el-radio-group
                  @change="sysTypeSelect"
                  v-model="postForm.sysType"
                >
                  <el-radio :label="'3'">账户中心</el-radio>
                  <el-radio :label="'2'">运营端</el-radio>
                  <el-radio :label="'1'">企业端</el-radio>
                  <el-radio :label="'4'">积分系统-运营端</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="菜单名称:" prop="name">
                <el-input
                  v-model.trim="postForm.name"
                  :size="eleSize"
                  maxlength="50"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="路由地址:" prop="path">
                <el-input
                  v-model.trim="postForm.path"
                  :size="eleSize"
                  maxlength="50"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="上级菜单:">
                <select-tree
                  v-model="postForm.parentId"
                  :size="eleSize"
                  :options="treeList"
                  @selected="selectedTree"
                  :props="defaultProps"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="菜单样式:" prop="source">
                <!-- <el-input v-model.trim="postForm.source"
                          :size="eleSize"
                          maxlength="50" /> -->
                <select-icon
                  v-if="iconClass"
                  v-model="postForm.source"
                ></select-icon>
                <el-input
                  v-else
                  v-model.trim="postForm.source"
                  :size="eleSize"
                  maxlength="50"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="菜单编号:" prop="code">
                <el-input
                  v-model.trim="postForm.code"
                  :size="eleSize"
                  maxlength="50"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="菜单类型:" prop="category">
                <el-radio-group
                  @change="categorySelect"
                  v-model="postForm.category"
                >
                  <el-radio :label="1">菜单</el-radio>
                  <el-radio :label="2">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="菜单备注:" prop="remark">
                <el-input
                  v-model="postForm.remark"
                  :size="eleSize"
                  type="textarea"
                  :rows="3"
                  maxlength="50"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-row>
          <el-col :span="24">
            <div class="__btn">
              <el-button
                v-if="isEdit == 0"
                type="primary"
                icon="el-icon-edit"
                :loading="addLoading"
                @click="rowSave"
                >保存</el-button
              >
              <el-button
                v-if="isEdit == 1"
                type="primary"
                icon="el-icon-edit"
                :loading="addLoading"
                @click="rowUpdate"
                >确定</el-button
              >
              <!-- <el-button icon="el-icon-delete">取消</el-button> -->
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import selectTree from "@/components/selectTree/index.vue";
// import selectIcon from "@/components/selectIcon/index.vue";
const defaultForm = {
  name: "", // 菜单名称
  path: "", // 路由地址
  parentId: 0, // 上级菜单
  source: "", // 菜单图标
  code: "", // 菜单编号
  category: 1,
  sysType: "3", // 账户类型
  // sort: 1, // 菜单排序
  remark: "", // 菜单备注
  $parentId: "",
  $category: "菜单"
};
// import { update, add, getMenu } from "@/api/system/menu";
import { getRuleRequired } from "@/util/validator";
export default {
  // name: ,
  components: {
    "select-tree": selectTree
    // "select-icon": selectTree
  },
  computed: {
    iconClass() {
      if (this.postForm.sysType == 3 || this.postForm.sysType == 4) {
        return true;
      } else {
        return false;
      }
    }
  },
  props: {
    isEdit: {
      type: Number,
      default: 0
    },
    treeList: {
      type: Array,
      default: null
    },
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      postForm: Object.assign({}, defaultForm),
      eleSize: "small",
      fetching: false,
      rules: {
        name: [getRuleRequired("请输入菜单名称")],
        // path: [getRuleRequired('请输入路由地址')],
        // parentId: [getRuleRequired('请选择上级菜单', 'change')],
        source: [getRuleRequired("请选择菜单图标", "change")],
        code: [getRuleRequired("请输入菜单编号")],
        sysType: [getRuleRequired("请输入菜单别名")]
        // remark: [getRuleRequired('请输入菜单备注')],
      },
      // 数据默认字段
      defaultProps: {
        parent: "parentId", // 父级唯一标识
        value: "id", // 唯一标识
        label: "title", // 标签显示
        children: "children" // 子级
      },

      addLoading: false,
      updataLoading: false
    };
  },
  created() {
    if (this.isEdit == 1 || this.isEdit == 2) {
      this.before();
    }
  },

  watch: {
    // form: {
    //   handler (form) {
    //     if (this.isShowSelect) {
    //       this.$refs.selectTree.filter(form.input1);
    //     }
    //   },
    //   deep: true,//深度监听，重要
    // },
  },
  methods: {
    before() {
      if (this.id) {
        // getMenu(this.id).then(res => {
        //   this.postForm = res.data.data || {};
        // });
      }
    },
    selectedTree(val, label) {
      console.log(val);
      this.postForm.$parentId = label;
    },
    categorySelect(i) {
      if (i == 1) {
        this.postForm.$category = "菜单";
      } else {
        this.postForm.$category = "按钮";
      }
    },

    rowSave() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.addLoading = true;
          // add(this.postForm).then(
          //   () => {
          //     // this.onLoad(this.page);
          //     this.$emit("closeEdit");
          //     this.$message({
          //       type: "success",
          //       message: "操作成功!"
          //     });
          //     this.addLoading = false;
          //   },
          //   error => {
          //     this.addLoading = false;
          //     console.log(error);
          //   }
          // );
        } else {
          return false;
        }
      });
    },
    rowUpdate() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.addLoading = true;
          // update(this.postForm).then(
          //   () => {
          //     this.$emit("closeEdit");
          //     this.$message({
          //       type: "success",
          //       message: "操作成功!"
          //     });
          //     this.addLoading = false;
          //   },
          //   error => {
          //     this.addLoading = false;
          //     console.log(error);
          //   }
          // );
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.createPost-container {
  position: relative;
  z-index: 1000;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 200px;
  .__btn {
    width: 100%;
    text-align: center;
    padding-top: 20px;
  }

  /*下拉框选择树*/
  .objectTree {
    margin-left: 97px;
    position: absolute;
    overflow: auto;
    z-index: 100;
    height: 200px;
    border: 1px solid #ddd;
    line-height: normal;
    z-index: 204;
  }
  .width-220 {
    width: 220px;
  }
}
</style>
