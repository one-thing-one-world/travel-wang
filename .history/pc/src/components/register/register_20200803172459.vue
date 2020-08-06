<template>
  <div>
    <div>
      <div class="login-box-item b1">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="title">登录</div>
          <div>
            <el-form-item prop="username">
              <el-input placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" v-model="ruleForm.password"></el-input>
            </el-form-item>
          </div>

          <div class="btn">
            <el-form-item>
              <el-button type="primary" size="medium" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>