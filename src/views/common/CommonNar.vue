<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    text-color="#fff"
    background-color="#545c64"
  >
    <h3 v-if="!isCollapse">协同办公系统</h3>
    <el-menu-item
      v-for="item in noChildrenMenu"
      :key="item.path"
      :index="item.i"
      @click="choice(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in haveChildrenMenu"
      :key="item.path"
      :index="item.i"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="child in item.children"
        :key="child.path"
        :index="child.i"
        style="cursor: pointer"
        @click.native="choice(child)"
      >
        <span slot="title">{{ child.label }}{{ child.index }}</span>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menus: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          i: "1",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          i: "2",
        },
        {
          path: "/department",
          name: "department",
          label: "部门管理",
          icon: "s-home",
          i: "3",
        },
        {
          path: "/setting",
          name: "setting",
          label: "考勤设置",
          icon: "setting",
          i: "4",
        },
        {
          path: "/manage",
          name: "manage",
          label: "考勤管理",
          icon: "edit-outline",
          i: "5",
        },
        {
          path: "/approval",
          name: "approval",
          label: "请假审批",
          icon: "tickets",
          i: "6",
        },
        {
          path: "/apply",
          name: "apply",
          label: "请假申请",
          icon: "document-remove",
          i: "7",
        },
        {
          label: "我的考勤",
          icon: "date",
          path: "/other",
          i: "8",
          children: [
            {
              path: "/list",
              name: "list",
              label: "考勤列表",
              i: "81",
            },
            {
              path: "/calendar",
              name: "calendar",
              label: "考勤日历",
              i: "82",
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.isCollapse,
    }),
    noChildrenMenu() {
      let result = this.menus.filter((m) => !m.children);
      return result;
    },
    haveChildrenMenu() {
      let result = this.menus.filter((m) => m.children);
      return result;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapMutations(["addheaderList"]),
    choice(item) {
      this.addheaderList(item);
      this.$router.replace({
        path: item.path,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  h3 {
    color: white;
    height: 48px;
    text-align: center;
  }
}
</style>