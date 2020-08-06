<template>
<div class="login-container df a-center w00 h00">
  <div class="login-box w00 h00 df j-center">
    <el-card class="box-card w00 h00">
      <div class="register-text df a-center j-center">请注册新用户</div>

      <div class="login-box-item">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div>
            <el-form-item prop="username">
              <el-input placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
          </div>

          <div class="btn">
            <el-form-item>
              <el-button type="primary" size="medium" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
import {
  cache
} from "@/services/cache";
import {
  APIs
} from "@/apis";
import {
  httpService
} from "@/services/http-service";
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
        username: [{
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
        password: [{
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
          const result = await httpService.post(APIs.UserAPI.register, {
            userName: this.ruleForm.username,
            password: this.ruleForm.password,
          });
          result.expect((err) => {
            return "网络请求失败，请检查网络配置";
          });
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

<style lang="scss" scoped>
.register-text {
  margin-top: 10px;
  letter-spacing: 2px;
  font-size: 30px;
  color: rgb(66, 66, 66);
}

.login-container {
  background: rgb(250, 250, 250);
  width: 100%;
}

.login-box {
  height: 50%;
}

.login-box-item {
  margin-top: 20px;
  position: relative;
  left: -10%;
}

.box-card {
  width: 40%;
}

.el-button {
  width: 80%;
  position: relative;
  left: 10%;
  margin-top: 10px;
}
</style>
