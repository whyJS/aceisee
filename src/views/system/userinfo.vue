<template>
  <div>
    <basic-container>
      <el-tabs>
        <el-tab-pane label="个人信息">
          <el-form ref="form"
                   label-width="100px">
            <el-form-item label="用户姓名:">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>

            <el-form-item label="用户手机号:">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>

            <el-form-item label="用户年龄:">
              <el-input v-model.trim="form.age"
                        type="number"
                        maxlength="50" />
            </el-form-item>

            <el-form-item label="邮箱地址:">
              <el-input v-model.trim="form.email"
                        type="email"
                        maxlength="50" />
            </el-form-item>

            <el-form-item label="用户性别:">
              <el-radio-group v-model="form.sex">
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
              </el-radio-group>
            </el-form-item>

            <!-- <el-form-item>
              <el-button type="primary">立即修改</el-button>
            </el-form-item> -->
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </basic-container>
  </div>
</template>

<script>
export default {
  data () {

    return {
      form: {
        userName: '测试',
        sex: '1',
        email: 'asasasas',
        age: 18,
        phone: '12515627266'
      },
    };
  },
  created () {

  },
  methods: {

  }
};
</script>

<style></style>
