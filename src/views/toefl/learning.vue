<template>
  <div class="dashboard-editor-container">
    <!-- <div>
      <img src="./img/timg.jpg" alt="">
    </div> -->
    <el-tabs type="border-card">
      <!-- <el-tab-pane> -->
      <div class="width_main">

        <div class="recommend-class">TOEFL</div>
        <div class="member_index_tab">
          <div class="swiper-container">
            <div class="swiper-wrapper">

              <div class="swiper-slide on">
                <a class="on">Exercise</a>
              </div>

              <div class="swiper-slide on">
                <a>Learning</a>
              </div>
              <div class="swiper-slide on">
                <a>Test</a>
              </div>
              <div class="swiper-slide on">
                <a>Word-Book</a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- </el-tab-pane> -->

    </el-tabs>

  </div>
</template>

<script>

export default {
  name: 'DashboardAdmin',
  components: {

  },
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
      tableData: [1]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.dashboard-editor-container {
  padding: 32px;
  background-color: #fff;

}
.width_main {
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .recommend-class {
        font-size: 24px;
        font-weight: normal;
        height: 24px;
        line-height: 21px;
        border-left: 5px solid #ff3f5a;
        padding-left: 15px;
        color: #fd486f;
        margin-top: 0px;

    }
    .member_index_tab {
      border: none;
      .swiper-container {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
          .swiper-wrapper {
              text-align: right;
              display: block;
              .swiper-slide {
            -webkit-flex-shrink: 0;
              -ms-flex-negative: 0;
              flex-shrink: 0;
              width: 100%;
              height: 100%;
              position: relative;
              -webkit-transition-property: -webkit-transform;
              transition-property: -webkit-transform;
              -o-transition-property: transform;
              transition-property: transform;
              transition-property: transform,-webkit-transform;
              text-align: right;
              width: auto;
              display: inline-block;
              margin-left: 45px;
              position: relative;

              a {
                  font-size: 16px;
                  color: #666;
                  display: inline-block;
                  padding-bottom: 9px;
                  text-decoration: none;
                  color: #000;
                  &:hover{
                          color: #fd486f;

                  }
                  &.on{
                    color: #fd486f;
                      &:after {
                          content: '';
                          width: 30%;
                          height: 3px;
                          background-color: #fd486f;
                          display: block;
                          left: 35%;
                          position: absolute;
                          bottom: 0;
                      }
                  }
              }

          }
          }

      }
    }
}

</style>

