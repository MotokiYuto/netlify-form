<template>
<div id="app">
  <div>
    <button @click="topPage">トップページ</button>
    <button @click="subPage">サブページ</button>
    <button @click="userListPage">ユーザー一覧ページ（リダイレクトされる）</button>
    <button @click="userListPageRedirect">ユーザー一覧ページ（リダイレクトされない）</button>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    topPage(){
      conosle.log()
      this.$router.push({name: 'Home'});
    },
    subPage(){
      this.$router.push({name: 'SubPage'});
    },
    userListPage(){
      this.$router.push({name: 'UserList', query: {redirect: true}});
    },
    userListPageRedirect(){
      this.$router.push({name: 'UserList'});
    }
  }
}
</script>
















<style scoped>
#app{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(2);
}
button{
  display: block;
  margin: 20px;
}
</style>