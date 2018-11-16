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
            <form class="login_form" action="" method="post" autocomplete="off">
              <ul>
                <li class="form-group"><input class="form-control" maxlength="50" name="" placeholder="请输入邮箱账号/手机号" type="text"></li>
                <li class="form-group"><input class="form-control" name="" placeholder="请输入密码" type="password"></li>
                <li class="form-group verifyCode">
                  <input class="form-control" maxlength="4" name="" placeholder="请输入验证码" type="text">
                  <img src="../../static/images/verifyCode.jpg" alt="">
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
            <form class="login_form" action="" method="post" autocomplete="off">
              <ul>
                <li class="form-group"><input class="form-control" maxlength="50" name="" placeholder="请输入邮箱账号/手机号" type="text"></li>
                <li class="form-group"><input class="form-control" name="" placeholder="请输入密码" type="password"></li>
                <li class="form-group"><input class="form-control" name="" placeholder="请输入确认密码" type="password"></li>
                <li class="form-group verifyCode">
                  <input class="form-control" maxlength="4" name="" placeholder="请输入验证码" type="text">
                  <img src="../../static/images/verifyCode.jpg" alt="">
                </li>
              </ul>
            </form>
            <p class="good-tips marginB10">
              <label for="userTxt"><input type="checkbox" id="userTxt"> 用户协议</label>
            </p>
            <div class="login-box marginB10">
              <button id="login_btn" type="button" class="btn btn-micv5 btn-block globalRegister">注&nbsp;&nbsp;册</button>
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

  </div>
</template>
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/login.css"></style>

<script>
    export default {
        name: "register",
      created:function () {
      }
        ,mounted:function () {
        this.getData();
        $(function () {
          $("#registerBtn").click(function(){
            $("#login").slideUp();
            $("#register").slideDown();
          });

          $("#loginBtn").click(function(){
            $("#register").slideUp();
            $("#login").slideDown();
          });
        });
      },
      methods:{
          getData:function () {
            let type=this.$route.query.type;
            let that=this;
            if(type=="register"){
              $("#login").slideUp();
              $("#register").slideDown();
            }else{
              $("#register").slideUp();
              $("#login").slideDown();
            }
          }
      }
    }
</script>

<style scoped>

</style>
