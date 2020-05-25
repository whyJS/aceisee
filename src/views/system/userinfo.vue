<template>
  <div>
    <basic-container>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个人信息" name="first">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="用户姓名:">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>

            <el-form-item label="用户手机号:">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>

            <el-form-item label="用户年龄:">
              <el-input v-model.trim="form.age" type="number" maxlength="50" />
            </el-form-item>

            <el-form-item label="邮箱地址:">
              <el-input v-model.trim="form.email" type="email" maxlength="50" />
            </el-form-item>

            <el-form-item label="用户性别:">
              <el-radio-group v-model="form.sex">
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="handleSubmit"
                >立即修改</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="second">
          <el-form
            ref="password"
            :model="query"
            :rules="rules"
            label-width="100px"
          >
            <el-form-item prop="oldPassword" label="原密码:">
              <el-input
                v-model="query.oldPassword"
                placeholder="请输入原密码"
                type="password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item prop="newPassword" label="确认新密码:">
              <el-input
                v-model="query.newPassword"
                placeholder="请输入新密码"
                type="password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item newPassword1 label="确认新密码:">
              <el-input
                v-model="query.newPassword1"
                placeholder="确认新密码"
                type="password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit"
                >立即修改</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </basic-container>
  </div>
</template>

<script>
import option from "@/const/user/info";
import { getUserInfo, updateUserInfo, updatePassword } from "@/api/system/user";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.query.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      type: "info",
      option: option,
      form: {},
      activeName: "first",
      query: {
        oldPassword: "",
        newPassword: "",
        newPassword1: ""
      },
      rules: {
        oldPassword: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        newPassword: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        newPassword1: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this._userInfo();
  },
  methods: {
    handleSubmit() {
      if (this.activeName === "first") {
        this.form.userId = this.form.id;
        updateUserInfo(this.form).then(res => {
          if (res.data.success) {
            this.$message({
              type: "success",
              message: "修改信息成功!"
            });
          } else {
            this.$message({
              type: "error",
              message: res.data.msg
            });
          }
        });
      } else {
        this.$refs.password.validate(valid => {
          if (valid) {
            updatePassword(
              this.query.oldPassword,
              this.query.newPassword,
              this.query.newPassword1
            ).then(res => {
              if (res.data.success) {
                this.query = {
                  oldPassword: "",
                  newPassword: "",
                  newPassword1: ""
                };
                this.$message({
                  type: "success",
                  message: "修改密码成功!"
                });
              } else {
                this.$message({
                  type: "error",
                  message: res.data.msg
                });
              }
            });
          } else {
            return false;
          }
        });
      }
    },

    handleClick(tab) {
      if (tab.name === "first") {
        getUserInfo().then(res => {
          const user = res.data.data;
          this.form = user;
        });
      }
    },
    _userInfo() {
      getUserInfo().then(res => {
        const user = res.data.data;
        this.form = user;
      });
    }
  }
};
</script>

<style></style>
