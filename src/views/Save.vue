<template>
    <div>
        <div class="videobox">
            <video src="" autoplay></video>
        </div>
        <div class="notice">正脸对准屏幕</div>
        <canvas hidden></canvas>

    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
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
        mounted() {
            var video = document.querySelector("video");
            var width = video.offsetWidth;
            var height = video.offsetHeight;
            var canvas = document.querySelector("canvas");
            canvas.width = width;
            canvas.height = height;
            navigator.mediaDevices.getUserMedia({
                video: {
                    width: width,
                    height: height
                }
            }).then((data) => {
                video.srcObject = data;
                var num = 1;
                var flag=true
                //监听视频的播放
                this.say("摇摇头，眨眨眼", () => {
                    video.onprogress = () => {
                        //让这个事件只执行一次
                        if (!flag) {
                            return;
                        }
                        flag=false
                        //获取画布的绘制对象
                        var cobj = canvas.getContext("2d");
                        //将当前的视频内容绘制到画布当中
                        cobj.drawImage(video, 0, 0);
                        //画布toDataURL将当前画布的内容转化为base64
                        var data = canvas.toDataURL("image/jpeg", .7).substr(23);
                        fetch("/api/send",{
                            method:"post",
                            headers:{
                                "content-type":"application/x-www-form-urlencoded"
                            },
                            body:"url="+data+"&name="+localStorage.name
                        }).then(function (e) {
                            return e.json()
                        }).then((e)=>{
                            if(e.error_code){
                                flag=true;
                                num++;
                                console.log(num);
                                if(num==5){
                                    this.say("请将人脸放入框内")
                                }
                                if(num==10){
                                    this.$router.push("/")
                                    flag=false
                                }
                            }else{
                                this.$router.push("/complate")
                            }
                        })


                    }
                })


            })
        }
    }
</script>
<style scoped>
    .videobox {
        width: 4rem;
        height: 5.15rem;
        margin: 2.52rem auto 0;
        background: #f6f6f6;
    }

    .videobox > video {
        width: 4rem;
        height: 5.15rem;
    }

    .notice {
        width: 100%;
        height: 0.32rem;
        margin: 3.31rem auto 0;
        font-size: 0.32rem;
        line-height: 0.32rem;
        text-align: center;
        color: #a0a0a0;
    }

    canvas {
        background: #ccc;
    }
</style>