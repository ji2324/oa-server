<template>
  <el-container>
    <el-aside width="200px">
      <common-nar />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonNar from "views/common/CommonNar";
export default {
  components: {
    CommonNar,
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  height: 100%;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>