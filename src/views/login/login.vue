<!--  -->
<template>
  <div class= 'login_background'>
    <div class="login_maoboli"></div>
      <div class='login_main login_Height'></div>
  </div>
</template>

<script>
export default {
    name: 'login',
  data () {
    return {
    };
  },
  methods: {}
}

</script>
<style scoped>
.login_background {
  position: absolute;
  top: 0;
  left: 0;
  /*以上三句是让整个div放在屏幕的最左上方*/
  width: 100%;
  height: 100%;
  min-width: 60%;
  /*以上两句实现全屏大小*/
  background: url("../../assets/login.jpg") no-repeat center 0; /*引入背景图，不重复出现*/
  background-size: cover; /*图片随屏幕大小同步缩放,但是图片画面可能只显示一部分*/
  background-color: rgba(0,0,0,0.5);
}
.login_maoboli {
  width: 100%;
  height: 100%;
  
  background: inherit;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  -o-filter: blur(3px);
  filter: blur(3px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
}
.login_main {
  width: 700px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  border-radius: 20px;
  box-shadow: 2px 2px 20px #888888;
  background-color: rgba(230, 230, 230, 0.6);
}
  .login_height{
}
</style>