<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item prop="username">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.username"
                auto-complete="off"
                :placeholder="$t('login.username')">
        <i slot="prefix"
           class="el-icon-user" />
      </el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.pass"
                auto-complete="off"
                :placeholder="$t('login.password')">
        <i class="el-icon-view el-input__icon"
           slot="suffix"
           @click="showPassword" />
        <i slot="prefix"
           class="el-icon-edit" />
      </el-input>
    </el-form-item>
    <el-form-item>
      
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 size="small"
                 @click.native.prevent="handleLogin"
                 class="login-submit">{{ $t("login.submit") }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";
import website from "@/config/website";


export default {
  name: "userlogin",
  data () {
    return {
      tenantMode: website.tenantMode,
      loginForm: {
        
        //用户名
        username: "",
        //密码
        pass: "",
        password: "",
        
      },
      loginRules: {
       
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, message: "密码长度最少为6位", trigger: "blur" }
        ]
      },
      passwordType: "password"
    };
  },
  created () {
   
  },
  mounted () { },
  computed: {
    ...mapGetters(["tagWel"])
  },
  props: [],
  methods: {
 
    showPassword () {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "登录中,请稍后。。。",
            spinner: "el-icon-loading"
          });
          this.loginForm.password = this.loginForm.pass;
          // this.loginForm.password = sha256_digest(this.loginForm.pass)
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.tagWel.value });
              loading.close();
            })
            .catch(() => {
              loading.close();
              this.refreshCode();
            });
        }
      });
    },

  }
};
</script>

<style></style>
