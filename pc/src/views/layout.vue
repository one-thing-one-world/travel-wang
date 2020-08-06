<template>
<div class="w00 h00">
  <el-container class="h00">
    <div class="hea h00">
      <el-header class="fixed topitem f1">
        <top></top>
      </el-header>
    </div>

    <el-container class="w00 h00 aside-box">
      <el-aside class="aside" width="150px">
        <div class="fixed aside_container">
          <div class="aside_box w150 h44 fs14" v-for="(item,index) in list" :key="index">
            <div class="w150 h44 df a-center" :class="{'highLignt':item.page===num}" @click="gotoPage(item)">
              <div class="aside_item df m-l-20">
                <div>
                  <i :class="item.img"></i>
                </div>
                <div class="p-l-8">{{item.text}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-aside>

      <el-container class="main-box w00 h00">
        <el-main class="main w00 h00">
          <div class="main_container h00 w00">
            <div class="main_box w00 h00">
              <router-view></router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</div>
</template>

<script>
import {
  cache
} from "@/services/cache";
import top from "@/components/top/top.vue";
export default {
  name: "",
  props: {},
  components: {
    top,
  },
  data() {
    return {
      flag: "",
      onetag: "",
      num: "",
      isAdmin: null,

      list: [{
          text: "首页",
          img: "el-icon-location",
          page: "/",
        },

        {
          text: "管理员列表",
          img: "el-icon-check",
          page: "/managerList",
        },
        {
          text: "注册",
          img: "el-icon-menu",
          page: "/register",
        },
        // ,
        // {
        //     text: '',
        //     img: 'el-icon-menu',
        //     page: '/published'
        // }, {
        //     text: '',
        //     img: 'el-icon-menu',
        //     page: '/statistics'
        // }, {
        //     text: '',
        //     img: 'el-icon-check',
        //     page: '/publishArtical'
        // }, {
        //     text: '',
        //     img: 'el-icon-setting',
        //     page: '/tabPage'
        // }, {
        //     text: '',
        //     img: 'el-icon-setting',
        //     page: '/exportExcell'
        // }, {
        //     text: '',
        //     img: 'el-icon-setting',
        //     page: '/pictureUpload'
        // }, {
        //     text: '',
        //     img: 'el-icon-delete',
        //     page: '/exitPage'
        // }
      ],
    };
  },
  methods: {
    gotoPage(item) {
      this.num = item.page;
      if (this.$route.path !== item.page) {
        this.$router.push(item.page);
      }
    },
    async judgeIsZero() {
      if (!this.isZero) {
        this.list = this.list.slice(0, 1);
      }
    },
  },
  created() {},
  mounted() {
    this.judgeIsZero();
    this.num = this.$route.path;
  },
  watch: {
    "$route.path"(val) {
      this.num = val;
    },
  },
  computed: {
    tatal() {
      return tod;
    },
    isZero() {
      return this.$store.state.isZero
    }
  },
};
</script>

<style lang="scss" scoped>
.aside-box {
  background: rgb(250, 250, 250) !important;
}

.topitem {
  z-index: 9999;
  padding: 0px !important;
}

.highLignt {
  background: rgb(91, 91, 119);
}

.aside {
  background: rgb(72, 72, 85);
}

.aside_container {
  background: rgb(72, 72, 85);
  top: 50px;
  left: 0px;
  width: 150px;

  .aside_box {
    background: rgb(72, 72, 85);
    color: white;

    &:hover {
      color: yellow;
      cursor: pointer;
      background: rgb(91, 91, 119);
    }
  }
}

.main-box {
  height: calc(100% - 50px) !important;
}

.main {
  margin-top: 50px;
  }
</style>
