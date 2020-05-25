<template>
  <div class="navbar">
    <div class="head_1 new_daohang">
      <div class="qx-class-nav">
        <div class="tit"><span>ACEiSEE-WORD</span></div>
        <a class="active" href="/member/yysy-archives-713.html " title="雅思培训 ">TOEFL</a>
        <a href="/member/yysy-archives-714.html " title="托福培训 ">SSAT</a>
        <a href="/member/yysy-archives-3948.html " title="SAT培训 ">SAT</a>

        <div class="tuichu">
          <a href="/member/yysy-archives-3974.html " title="中学英语 ">退出登录</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {

    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {

  .new_daohang {
    width: 100%;
    border-bottom: 1px solid #e4e9ed;
    background-color: #F5F7FA;

    }
    .new_daohang>.qx-class-nav {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 60px;
    overflow: hidden;
    display: flex;
    }
    .new_daohang>.qx-class-nav >.tit >span {
    color: #fff;
    font-size: 24px;
    }
    .new_daohang>.qx-class-nav >.tit {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        // float: left;
        background: #ff3f5a;
        padding: 0px 24px;
        margin-right: 10px;
    }

    .new_daohang>.qx-class-nav>a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0;
    padding: 0;
    height: 30px;
    line-height: 30px;
    border: none;
    margin: 15px 10px;
    width: auto;
    padding: 0 20px;
    font-size: 16px;
    color: #333;
    border-radius: 5px;
    // display: inline-block;
    text-align: center;
}
.new_daohang>.qx-class-nav>a.active{
    background-color: #068bf2;
    color: #FFFFFF;
}
 .new_daohang>.qx-class-nav>.tuichu{
   flex: 1;
   text-align: right;
    a{
  overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
    margin-top: 0;
    padding: 0;
    height: 30px;
    line-height: 30px;
    border: none;
    margin: 15px 0;
    width: auto;
    padding: 0 12px;
    font-size: 16px;
    color: #333;
    border-radius: 5px;
    // display: inline-block;
    text-align: center;
    &:hover {
    background-color: #068bf2;
    color: #FFFFFF;
}
 }
 }
.new_daohang>.qx-class-nav a:hover {
    background-color: #068bf2;
    color: #FFFFFF;
}

}
</style>
