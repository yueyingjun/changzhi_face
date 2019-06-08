<template>
    <div class="bg">
        <div class="voice"></div>
        <div class="text1">将音量调整到适中</div>
        <div class="text2">并根据语音提示以及视频完成动作</div>
        <div class="sure" @click="$router.push({path:'/save'})">我知道了</div>
    </div>
</template>

<script>
    export default {
        data: () => ({}),
        methods:{
           say:function(){
               // 新建语音对象
               var speech=window.speechSynthesis;
               // 新建语音内容对象
               var speechset=new SpeechSynthesisUtterance();
               speechset.text="将音量调整到适中 并根据语音提示以及视频完成动作";
               //控制设备进行发声
               speech.speak(speechset);
           }
        },
        created:function(){
            this.say();
        }
    }
</script>

<style>
    .bg{
        width:100%;
        height:100%;
        position:absolute;
        background:url(../assets/img/bg.png) no-repeat 0 0/cover;
    }
    .voice{
        width:6.63rem;
        height:1.58rem;
        background:url(../assets/img/yinpin.png) no-repeat 0 0/cover;
        margin:3.62rem auto 0;
    }
    .text1{
        width:100%;
        height:0.3rem;
        margin:.87rem auto 0;
        text-align: center;
        line-height:0.3rem;
        font-size:0.22rem;
        color:rgba(0,0,0,0.4);
    }
    .text2{
        width:100%;
        height:0.3rem;
        margin:0 auto;
        text-align: center;
        line-height:0.3rem;
        font-size:0.22rem;
        color:rgba(0,0,0,0.4);
    }
    .sure{
        width:3.7rem;
        height:0.73rem;
        margin:3.6rem auto 0;
        border-radius:0.365rem;
        background:linear-gradient(to right,#ffab32 0,#ffce37 100%);
        box-shadow:0.1rem 0.1rem 0.24rem rgba(254,211,62,0.75);
        font-size:0.24rem;
        text-align: center;
        line-height:0.73rem;
        color:#fff;
    }
</style>
