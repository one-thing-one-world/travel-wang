<template>
  <div class="login-container">
    <div class="login-box df j-center">
      <div class="login-box-item df f-column j-center">
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
import { cache } from "@/services/cache";
import { APIs } from "@/apis";
import { httpService } from "@/services/http-service";

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
          const token = result.data.data.data;

          result.expect((err) => {
            return "网络请求失败，请检查网络配置";
          });

          if (result.data.status === 200) {
            await cache.setItem("user", token);
          }
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
.img img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  position: absolute;

  color: #181a1b;
  left: 52%;
  letter-spacing: 5px;

  top: -20%;
  font-size: 30px;
}

.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #181a1b;
  color: white;
}

.login-box {
  width: 30%;
  height: 50%;
  background: white;
  position: absolute;
  border-radius: 12px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.login-box-item {
  width: 100%;
  height: 78%;
  position: relative;
  left: -40px;
  margin-top: 80px;
}

.btn {
  margin-top: 40px;
  position: relative;
  top: 0;
  // left: -40px;
  // font-size: 20px;
}

.el-button {
  width: 100%;

  font-size: 20px;
  letter-spacing: 2px;
}
</style>
