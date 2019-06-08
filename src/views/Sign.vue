<template>
  <div>
      <div class="bg1">
      </div>
      <div class="bg2">
          <div class="head"></div>
          <div class="body"></div>
      </div>
      <div class="text1">
          请通过人脸识别验证您的身份
      </div>
      <div class="text2">
          请按照以下步骤完成脸部验证
      </div>
      <!--error-->
      <div :class="['inputbox',{error:isError}]">
          <div class="icon"></div>
          <input type="text" placeholder="请输入您的名字" v-model="val" @change="change">
          <div class="notice">
              <div class="notice-icon"></div>
              <div class="notice-text">{{message}}</div>
          </div>
      </div>
      <!--active-->
      <div :class="['start',{active:isActive}]" @click="start">开始识别</div>
  </div>
</template>

<script>
    export default {
        data: () => ({
            val:"",
            isError:false,
            isActive:false,
            message:""
        }),
        methods:{
           change:function(){
             if(this.val===""){
                 this.isError=true;
                 this.isActive=false;
                 this.message="姓名不能为空";
                 return;
             }
             var reg=/^[\u4e00-\u9fa5]{2,4}$/;
             if(!reg.test(this.val)){
                 this.isError=true;
                 this.isActive=false;
                 this.message="请输入合法的姓名";
                 return;
             }
             this.isError=false;
             this.isActive=true;
           },
           start:function(){
              if(this.isActive){
                 this.$router.push({path:"/notice"});
                 localStorage.name=this.val;
              }
           }
        }
    }
</script>

<style scoped>
    @keyframes scale {
        0% {
            transform: scale(0.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .bg1 {
        width: 3.14rem;
        height: 3.14rem;
        background: rgba(220, 240, 231, 0.4);
        margin: 1.73rem auto 0;
        border-radius: 50%;
        animation: scale 2s ease-in infinite alternate;
    }

    .bg2 {
        width: 2.26rem;
        height: 2.26rem;
        background: #dbefe6;
        border-radius: 50%;
        position: absolute;
        left: 2.62rem;
        top: 2.2rem;
    }

    .head {
        width: .68rem;
        height: .68rem;
        background: linear-gradient(to bottom, #2eb986 0, #33d14d 100%);
        margin: 0.38rem auto 0;
        border-radius: 50%;
        box-shadow: 0.1rem 0.1rem 0.24rem rgba(54, 206, 141, 0.75);
    }

    .body {
        width: 1.26rem;
        height: .6rem;
        margin: .13rem auto 0;
        background: linear-gradient(to bottom, #2eb986 0, #33d14d 100%);
        box-shadow: 0.1rem 0.1rem 0.24rem rgba(54, 206, 141, 0.75);
        border-radius: .3rem;
    }

    .text1 {
        width: 100%;
        height: 0.32rem;
        margin-top: 0.27rem;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.32rem;
        color: #2db86f;
    }

    .text2 {
        width: 100%;
        height: 0.23rem;
        margin-top: 0.23rem;
        font-size: 0.22rem;
        text-align: center;
        line-height: 0.23rem;
        color: rgba(0, 0, 0, 0.4);
    }

    .inputbox {
        width: 5.44rem;
        height: 0.6rem;
        margin: 1.67rem auto 0;
        border-bottom: 0.02rem solid #e8e8e8;
    }

    .icon {
        width: 0.21rem;
        height: 0.12rem;
        background: #ffcb2e;
        margin-top: 0.25rem;
        float: left;
        border-radius: 0.06rem;
        box-shadow: 0.03rem 0.03rem 0.08rem rgba(255, 203, 46, 0.75);
    }

    input {
        width: 3rem;
        height: 0.6rem;
        border: none;
        /*透明背景*/
        background: transparent;
        margin-left: 0.18rem;
        float: left;
    }

    input:focus {
        /*轮廓线*/
        outline: none;
    }

    .start {
        width: 3.68rem;
        height: 0.7rem;
        margin: 2.61rem auto 0;
        background: #e8e8e8;
        border-radius: 0.35rem;
        text-align: center;
        line-height: 0.7rem;
        font-size: 0.24rem;
        color: rgba(0, 0, 0, 0.3);
    }

    .active {
        background: linear-gradient(to right, #3e9dff 0, #41c3ff 100%);
        box-shadow: 0.1rem 0.2rem 0.24rem rgba(58, 183, 255, 0.75);
        color: #fff;
    }

    .error {
        border-bottom: 1px solid #ff2246;
        position: relative;
    }

    .error > .icon {
        background: #dbdbdb;
        box-shadow: none;
    }

    .error > input {
        color: #ff2246;
    }

    .error > .notice {
        /*显示元素*/
        display: block;
    }

    .notice {
        width: 2.59rem;
        height: 0.32rem;
        position: absolute;
        left: 0.39rem;
        top: -0.32rem;
        /*把当前元素隐藏起来*/
        display: none;
    }

    .notice-icon {
        width: 0.28rem;
        height: 0.28rem;
        border-radius: 50%;
        background: linear-gradient(to top, #ff2246 0, #ff7022 100%);
        position: relative;
        box-shadow: 0.03rem 0.03rem 0.07rem rgba(255, 42, 77, 0.47);
        float: left;
    }

    .notice-icon:before {
        content: "";
        position: absolute;
        width: 0.04rem;
        height: 0.12rem;
        background: #fff;
        border-radius: 0.02rem;
        left: 0.12rem;
        top: 0.05rem;
    }

    .notice-icon:after {
        content: "";
        position: absolute;
        width: 0.04rem;
        height: 0.04rem;
        background: #fff;
        border-radius: 0.02rem;
        left: 0.12rem;
        bottom: 0.05rem;
    }

    .notice-text {
        float: left;
        font-size: 0.22rem;
        color: #ff2246;
        margin-left: 0.16rem;
        line-height: 0.27rem;
    }
</style>
