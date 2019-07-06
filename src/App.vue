<template>
  <div id="app">
       <Router-view></Router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted(){
    let arr = [
      {
        data:{},
        url: 'signIn',
        reqType: 'get'
      },
      {
        data:{},
        url: 'signUp',
        reqType: 'post'
      }
    ]
    this.$ALL(arr).then((res1)=>{
      console.log(res1)
    })
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
