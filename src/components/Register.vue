<template>
  <div class="login-bg">
    <div class="login-logo">
      <a href="#">
        <b><i class="wi wi-sunset light-logo"></i></b>
        <span class="light-logo">
               IT峰汇
            </span>
      </a>
    </div>
    <!-- login begin -->
    <div class="login-main clearfix" id="login">
      <div class="row">
        <div class="col-md-8">
          <div class="tab-con">
            <section class="box-login v5-input-txt" id="box-login">
              <div id="login-form-tips" class="tips-error">
                <!-- 错误提示：此div不隐藏 -->
              </div>
              <form class="login_form" action="" method="post" autocomplete="off" id="loginForm">
                <ul>
                  <li class="form-group"><input class="form-control" maxlength="50" name="" placeholder="请输入邮箱账号/手机号"
                                                type="text"></li>
                  <li class="form-group"><input class="form-control" name="" placeholder="请输入密码" type="password"></li>
                  <li class="form-group verifyCode">
                    <input class="form-control" maxlength="4" name="" placeholder="请输入验证码" type="text"
                           style="display: inline;width: 75%;">
                    <Sidentify :identifyCode="identifyCode" style="position: relative;top: 14px;display: inline-block"
                               @click.native="refreshCode"></Sidentify>
                  </li>
                </ul>
              </form>
              <p class="good-tips marginB10">
                <a href="javascript:;" target="_blank" class="f_r" id="btnForgetpsw">忘记密码？</a>
                <label for="inpwd"><input type="checkbox" id="inpwd"> 记住密码</label>
              </p>
              <div class="login-box marginB10">
                <button id="login_btn" type="button" class="btn btn-micv5 btn-block globalLogin">登&nbsp;&nbsp;录</button>
              </div>
              <div class="threeLogin">
                <span>其他方式登录</span><a class="nqq" href="javascript:;"></a><a class="nwx" href="javascript:;"></a><a
                class="nwb"></a>
              </div>
            </section>
          </div>
        </div>
        <div class="col-md-4">
          <div class="reg">
            <p>还没有账号？<br>赶快免费注册一个吧！</p>
            <a class="reg-btn" href="javascript:void(0)" id="registerBtn">立即免费注册</a>
          </div>
        </div>
      </div>
    </div>
    <!-- login end -->

    <!-- register begin -->
    <div class="login-main clearfix" style="display:none;" id="register">
      <div class="row">
        <div class="col-md-8">
          <div class="tab-con">
            <section class="box-login v5-input-txt" id="box-login">
              <div id="login-form-tips" class="tips-error">
                <!-- 错误提示：此div不隐藏 -->
              </div>
              <form class="login_form" id="registerForm" action="" method="post" autocomplete="off">
                <ul>
                  <li class="form-group">
                    <div class="row">
                      <label class="col-md-3"> 用户名</label>
                      <input class="form-control col-md-9" @blur="checkUseName" v-model="user.username" maxlength="50" required name="" placeholder="用户名,不少于4位字符,不能包含特殊字符"
                             type="text">
                    </div>
                  </li>
                  <li class="form-group">
                    <div class="row">
                      <label class="col-md-3">密 码</label>
                      <input class="form-control col-md-9" v-model="user.password" @blur="checkPassword" name="password" required placeholder="密码,至少8位,必须包含一个大写字母,一个小写字母,和一个数字" type="password">
                    </div>
                  </li>
                  <li class="form-group">
                    <div class="row">
                      <label class="col-md-3">确认密码</label>
                      <input class="form-control col-md-9" name="repassword" required placeholder="请输入确认密码"
                             type="password">
                    </div>
                  </li>
                  <li class="form-group">
                    <div class="row">
                      <label class="col-md-3">邮 箱</label>
                      <input class="form-control col-md-9" v-model="user.email" @blur="verifyEmail" name="" required
                             placeholder="通过邮箱获取验证码" type="email">
                    </div>
                  </li>
                  <li class="form-group">
                    <div class="row">
                      <label class="col-md-3">验证码</label>
                      <input class="form-control col-md-5" name="verifyCode" required placeholder="请输入验证码" type="text">
                      <input type="button" class="btn btn-primary" v-bind:disabled="verifyInput"
                             v-bind:value="verifyInputName" style="margin-left: 1rem;" @click="getVerifyCode">
                      <span style="color: red;margin-left: 8rem;" v-text="verifyText"></span>
                    </div>
                  </li>
                </ul>
              </form>
              <!--<p class="good-tips marginB10">-->
              <!--<label for="userTxt"><input type="checkbox" id="userTxt"> 用户协议</label>-->
              <!--</p>-->
              <div class="login-box marginB10">
                <button id="login_btn" type="button" @click="registerUser"
                        class="btn btn-micv5 btn-block globalRegister">注&nbsp;&nbsp;册
                </button>
              </div>
            </section>
          </div>
        </div>
        <div class="col-md-4">
          <div class="reg">
            <p>已经有账号？<br>赶快登录吧！</p>
            <a class="reg1-btn" href="javascript:void(0)" id="loginBtn">立即登录</a>
          </div>
        </div>
      </div>
    </div>
    <!-- register end -->
    <div class="login-footer">
      <p>Copyright © 2018 xxxxxx.cn. All Rights Reserved.</p>
    </div>
    <v-dialog ref="modolAlert"></v-dialog>
  </div>
</template>
<!--<style scoped src="../assets/css/style.css"></style>-->
<style scoped src="../assets/css/login.css"></style>

<script>
  import Sidentify from '../components/identify'
  import {hex_md5} from '../assets/js/md5'
  export default {
    name: "register",
    data() {
      return {
        identifyCode: "1234",
        identifyCodes: ["a", "b", "c", "d", "e", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        verifyText: "",
        verifyInputName: "获取验证码",
        verifyInput: false,
        index: 60,
        user: {
          username: "",
          password: "",
          email: ""
        },
        emailVerify: /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
        passwordVerify:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
        checkEmailApi: "http://10.8.30.33:7088/web/user/checkMailbox",
        sendEmailApi: "http://10.8.30.33:7088/web/sendEmail",
        emailVal: 0,
        usernameVerify:/^[a-zA-Z0-9\u4e00-\u9fa5]{4,}$/,
        registerApi:"http://10.8.30.33:7088/web/user/register"
      }
    },
    created: function () {
    }
    , mounted: function () {
      this.getData();
      this.refreshCode();
      $(function () {
        $("#registerBtn").click(function () {
          $("#login").slideUp();
          $("#register").slideDown();
        });

        $("#loginBtn").click(function () {
          $("#register").slideUp();
          $("#login").slideDown();
        });
      });
    },
    methods: {
      getData: function () {
        let type = this.$route.query.type;
        let that = this;
        if (type == "register") {
          $("#login").slideUp();
          $("#register").slideDown();
        } else {
          $("#register").slideUp();
          $("#login").slideDown();
        }
      },
      refreshCode: function () {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode: function (o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
        }
      },
      randomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      getVerifyCode: function () {
        let that = this;
        if (that.user.email === "") {
          that.$refs.modolAlert.alert({
            btnIcon: "btn-primary",
            title: "温馨提示",
            content: "邮箱不能为空!"
          });
          $("input[type=email]").focus();
          return;
        } else {
          if (!that.emailVerify.test(that.user.email)) {
            that.$refs.modolAlert.alert({
              btnIcon: "btn-primary",
              title: "温馨提示",
              content: "邮箱格式有误!"
            });
            $("input[type=email]").focus();
            return;
          }
          that.verifyEmail();
          console.info(this.emailVal);
          if (this.emailVal != 0) {
            return false;
          }
        }
        var param = new URLSearchParams();
        param.append("email", that.user.email);
        that.$ajax.post(that.sendEmailApi, param).then(function (result) {
          if (result.data.code === "10000") {
            that.verifyText = "验证码已经发到上述填写邮箱,请及时查收!";
            that.verifyInput = true;
            var verifyInterval = setInterval(function () {
              if (that.index == 0) {
                window.clearInterval(verifyInterval);
                that.verifyText = "";
                that.verifyInput = false;
                that.verifyInputName = "重新获取";
                return;
              }
              that.index = that.index == 0 ? 0 : that.index - 1;
              that.verifyInputName = that.index + "秒可重新发送";

            }, 1000);
          }
        });
      },
      verifyEmail: function () {
        let that = this;
        if (that.user.email != "") {
          if (!that.emailVerify.test(that.user.email)) {
            that.$refs.modolAlert.alert({
              btnIcon: "btn-primary",
              title: "温馨提示",
              content: "邮箱格式有误!"
            });
            that.emailVal = 1;
            return false;
          }
          that.$ajax.get(that.checkEmailApi, {params: {"email": that.user.email}}).then(function (result) {
            if (result.data.code !== "10000") {
              that.$refs.modolAlert.alert({
                btnIcon: "btn-primary",
                title: "温馨提示",
                content: "该邮箱已被注册!"
              });
              that.emailVal = 1;
              return false;
            }
          });
        }
      },
      registerUser: function () {
        let that = this;
        var flag = true;
        $("#registerForm input").each(function () {
          if ($(this).val().trim() === "") {
            that.$refs.modolAlert.alert({
              btnIcon: "btn-primary",
              title: "温馨提示",
              content: $(this).prev().text().replace(" ", "") + "不能为空!"
            });
            flag = false;
            return false;
          }else{
            if($(this).val().trim().indexOf("<")>=0||$(this).val().trim().indexOf(">")>=0){
              that.$refs.modolAlert.alert({
                btnIcon: "btn-primary",
                title: "温馨提示",
                content: $(this).prev().text().replace(" ", "") + "中包含非法字符!"
              });
              flag = false;
              return false;
            }
          }
        });
        if (!flag) {
          return flag;
        }
        that.verifyEmail();
        if (this.emailVal != 0) {
          return false;
        }
        if ($("#registerForm input[name=password]").val().trim() !== $("#registerForm input[name=repassword]").val().trim()) {
          that.$refs.modolAlert.alert({
            btnIcon: "btn-primary",
            title: "温馨提示",
            content: "两次密码不一致!"
          });
          $("#registerForm input[name=repassword]").focus();
          return false;
        }
        var data=new URLSearchParams();
        data.append("username",that.user.username);
        data.append("password",hex_md5(that.user.password));
        data.append("email",that.user.email);
        data.append("verifyCode",$("#registerForm input[name=verifyCode]").val());
        that.$ajax.post(that.registerApi,data).then(function (result) {
          if(result.data.code==="10000"){
            that.$refs.modolAlert.alert({
              btnIcon: "btn-primary",
              title: "温馨提示",
              content: "新增成功!"
            });
            that.$router.push({path:"register",query:{type:"login"}});
            that.$router.go(0);
          }
        }).catch(function (error) {
          console.info(error);
        })
      },
      checkPassword:function () {
        let that=this;
        if(that.user.password!==""){
         if(!that.passwordVerify.test(that.user.password)){
           that.$refs.modolAlert.alert({
             btnIcon: "btn-primary",
             title: "温馨提示",
             content: "密码格式不正确!"
           });
           $("#registerForm input[name=password]").focus();
         }
        }else{
          that.$refs.modolAlert.alert({
            btnIcon: "btn-primary",
            title: "温馨提示",
            content:"密码为必填!"
          });
          $("#registerForm input[name=password]").focus();
        }
      },
      checkUseName:function () {
        let that=this;
        if(that.user.username!==""){
          if(!that.usernameVerify.test(that.user.username)){
            that.$refs.modolAlert.alert({
              btnIcon: "btn-primary",
              title: "温馨提示",
              content: "用户名格式不正确!"
            });
            $("#registerForm input[name=useraname]").focus();
          }
        }else{
          that.$refs.modolAlert.alert({
            btnIcon: "btn-primary",
            title: "温馨提示",
            content:"用户名为必填!"
          });
          $("#registerForm input[name=useraname]").focus();
        }
      }
    },
    components: {
      Sidentify
    }
  }
</script>

<style scoped>

  .col-md-3 {
    padding-top: 0.5rem;
  }
</style>
