<template>
  <div class="container w00 h00">
    <div class="box w00 h00 m-t-20">
      <div class="box-item w00 h00 ccc">
        <el-table :data="list" border style="width: 100%">
          <el-table-column prop="createTime" label="创建时间" ></el-table-column>
          <el-table-column prop="username" label="用户名" ></el-table-column>
          <el-table-column prop="loginTime" label="登录时间" ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { cache } from "@/services/cache";
import { APIs } from "@/apis";
import { httpService } from "@/services/http-service";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: null,
    };
  },
  methods: {},
  async mounted() {
    const result = await httpService.get(APIs.UserAPI.admins);
    this.list = result.data.data.data;
    dayjs(this.time).format("YYYY年MM月DD日hh时mm分mm秒");
    this.list.map((item) => {
      item.createTime = dayjs(item.createTime).format(
        "YYYY年 MM月DD日hh时mm分"
      );
      item.loginTime = dayjs(item.loginTime).format("YYYY年 MM月DD日hh时mm分");
    });
  },
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.container {
  background: rgb(250, 250, 250);
}
</style>
