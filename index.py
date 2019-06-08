from flask import Flask,render_template,request
from urllib import request as req,parse
import ssl
ssl._create_default_https_context=ssl._create_unverified_context
app=Flask(__name__)
# 首页对应的页面
@app.route("/")
def index():
    return render_template("index.html")
# 采集的数据送往的地址
@app.route("/send",methods=["POST"])
def send():
    data=parse.urlencode(request.form).encode("utf8")
    print(data)
    res=req.urlopen("https://118.190.150.35:5000/api/photo",data=data)
    con=res.read()
    print(con)
    return con

# 要对比的地址
@app.route("/check",methods=["POST"])
def check():
    data=parse.urlencode(request.form).encode("utf8")
    print(data)
    res=req.urlopen("https://118.190.150.35:5000/api/check",data=data)
    con=res.read()
    print(con)
    return con
app.run()