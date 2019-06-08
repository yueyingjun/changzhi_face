<template>
     <div class="confirm">
   	    <div class="icon">
         <img src="../assets/img/complete.png">
   	    </div>
   	    <div class="text">
          头像已拍摄完成
   	    </div>
   	    <div class="btns">
   	    	  <router-link to="/check">下一步</router-link>
   	    </div>
   </div>
</template>

<script>
    export default {
        name: "complate",
        methods: {
            say: function (con, callback) {
                // 新建语音对象
                var speech = window.speechSynthesis;
                // 新建语音内容对象
                var speechset = new SpeechSynthesisUtterance();
                speechset.onend = function () {
                    if (callback) {
                        callback()
                    }
                }
                speechset.text = con;
                //控制设备进行发声
                speech.speak(speechset);
            }
        },

        mounted(){
            this.say("头像采集完毕")
        }
    }
</script>

<style scoped>
 .confirm{
       	width:5.65rem;
       	height:4.5rem;
       	/*引入背景图片*/
       	background:url(../assets/img/tankuang.png) no-repeat 0 0/5.65rem 4.5rem;
       	position:absolute;
       	left:0;
       	right:0;
       	top:0;
       	bottom:0;
       	margin:auto;
       }
       .icon{
       	width:1.39rem;
       	height:0.96rem;
       	margin:0.77rem auto 0;
       }
       .icon>img{
       	width:1.39rem;
       	height:0.96rem;
       }
       .text{
       	width:100%;
       	height:0.27rem;
       	margin-top:0.32rem;
       	font-size:0.26rem;
       	text-align:center;
       	line-height:0.27rem;
       	color:rgba(0,0,0,0.5);
       }
       .btns{
       	width:3.58rem;
       	height:0.72rem;
       	margin:0.3rem auto 0;
        border-radius:0.36rem;
        text-align: center;
        line-height:0.72rem;
        font-size:0.24rem;
        color:#fff;
        background:linear-gradient(to right,#33d07d 0,#3de43d 100%);
        box-shadow:0.1rem 0.1rem 0.24rem rgba(43,225,129,0.75);
       }
</style>