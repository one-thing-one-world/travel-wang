<template>
  <register></register>
</template>

<script>
import register from "../components/register/register";
export default {
  name: "",
  props: {},
  components: {
    register,
  },
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