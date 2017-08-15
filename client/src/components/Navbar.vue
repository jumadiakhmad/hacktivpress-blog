<template lang="html">
  <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">HactivPress-Blog</el-menu-item>
    <div class="user_menu" style="float:right" v-show="statusLogin == null">
      <el-menu-item index="1" @click="signInDialog">SignIn</el-menu-item>
      <el-menu-item index="1" @click="signUpDialog">SignUp</el-menu-item>
    </div>

    <el-submenu index="2" style="float:right;" v-show="statusLogin">
      <template slot="title"><b>Welcome, {{userActive}}</b></template>
      <el-menu-item index="2-2" @click="toProfile">Profile</el-menu-item>
      <el-menu-item index="2-3" @click="toHome">Home</el-menu-item>
      <el-menu-item index="2-4" @click="signOut">SignOut</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    data () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<style lang="css">
</style>
