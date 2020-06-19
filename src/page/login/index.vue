<template>

  <div class="login-container"
       ref="login">
    <top-color v-show="false" />
    <div class="login-weaper animated bounceInDown">
      <!-- <div class="login-left">
        <div class="login-time">
          {{time}}
        </div>
        <img class="img"
             src="./logo.png"
             alt="">
        <p class="title">中航信用 账户中心</p>
      </div> -->
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">
            {{ $t('login.title') }}{{website.title}}

          </h4>
          <userLogin />

        </div>

      </div>
    </div>
  </div>
</template>
<script>
import userLogin from "./userlogin";
import { mapGetters } from "vuex";
import { dateFormat } from "@/util/date";
import { validatenull } from "@/util/validate";
import topLang from "@/page/index/top/top-lang";
import topColor from "@/page/index/top/top-color";

export default {
  name: "login",
  components: {
    userLogin,
    topLang,
    topColor
  },
  data () {
    return {
      time: "",
      activeName: "user"
    };
  },
  watch: {
    $route () {
      const params = this.$route.query;
      this.socialForm.state = params.state;
      this.socialForm.code = params.code;
      if (!validatenull(this.socialForm.state)) {
        const loading = this.$loading({
          lock: true,
          text: `${
            this.socialForm.state === "WX" ? "微信" : "QQ"
            }登录中,请稍后。。。`,
          spinner: "el-icon-loading"
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  },
  created () {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  mounted () {
  },
  computed: {
    ...mapGetters(["website"])
  },
  props: [],
  methods: {
    getTime () {
      this.time = dateFormat(new Date());
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
