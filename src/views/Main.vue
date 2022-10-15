<template>
  <el-container>
    <el-aside width="auto">
      <common-nar />
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonNar from "views/common/CommonNar";
import CommonHeader from "views/common/CommonHeader";

export default {
  components: {
    CommonNar,
    CommonHeader,
  },
};
</script>

<style  scoped>
#app {
  height: 100vh;
}
.el-header {
  background-color: #333;
}

.el-container {
  height: 100%;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>