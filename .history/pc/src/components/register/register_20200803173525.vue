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
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await httpService.put(APIs.UserAPI.login, {
            userName: this.ruleForm.username,
            password: this.ruleForm.password,
          });
          console.log(result);

          result.expect((err) => {
            return "网络请求失败，请检查网络配置";
          });

          if (result.data.status === 200) {
            let token = result.data.data.data;
            await cache.setItem("user", token);
          }

          this.$router.push({ name: "home" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>