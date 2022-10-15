<template>
  <header class="header">
    <div class="left-header">
      <el-button
        icon="el-icon-menu"
        style="margin-right: 20px"
        @click="changeStyle"
      ></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in headerList" :key="index">{{
          item.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-header">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      changeStyle: "changeCollapse",
    }),
  },
  computed: {
    ...mapState({
      headerList: "headerList",
    }),
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /deep/ .left-header {
    display: flex;
    align-items: center;
    .el-breadcrumb__item {
      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
  }
}
</style>