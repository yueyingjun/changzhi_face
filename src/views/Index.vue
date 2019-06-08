<template>
   <div>
       <div class="avatar">
           <img src="../assets/img/avatar.png">
       </div>
       <div class="text">
           JOIN AI BOX
       </div>
       <div class="login" @click="$router.push({path:'/sign'})">
           手动登录
       </div>
       <div class="face" @click="$router.push({path:'/confirm'})">
           人脸识别
       </div>
   </div>
</template>
<script>
    export default {
    }
</script>
<style scoped>
    .avatar{
        width:2.55rem;
        height:2.55rem;
        margin:2.08rem auto 0;
        border-radius:50%;
        box-shadow:0 0 10px #c7c7c7;
    }
    .avatar>img{
        width:2.55rem;
        height:2.55rem;
    }
    .text{
        width:100%;
        height:0.32rem;
        margin-top:0.77rem;
        font-size:0.36rem;
        text-align:center;
        line-height:0.32rem;
        /*加粗*/
        font-weight:bold;
    }
    .login{
        width:4.71rem;
        height:0.72rem;
        margin:4.34rem auto 0;
        border-radius:0.36rem;
        background:linear-gradient(to right,#3e9dff 0,#41c3ff 100%);
        box-shadow:0.1rem 0.1rem 0.24rem rgba(58,183,255,0.75);
        font-size:0.24rem;
        color:#fff;
        text-align:center;
        line-height:0.72rem;
    }
    .face{
        width:4.71rem;
        height:0.72rem;
        margin:0.47rem auto 0;
        border-radius:0.36rem;
        background:linear-gradient(to right,#33d07d 0,#3de43d 100%);
        box-shadow:0.1rem 0.1rem 0.24rem rgba(43,225,129,0.75);
        font-size:0.24rem;
        color:#fff;
        text-align:center;
        line-height:0.72rem;
    }
</style>
