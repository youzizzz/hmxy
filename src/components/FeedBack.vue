<template>
  <div>
    <div id="main-wrapper">
      <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
          <div class="major f_l">
            <div class="logo f_l">
              <a href="/">
                <b><i class="wi wi-sunset light-logo"></i></b>
                <span class="light-logo">
                                IT峰汇
                            </span>
              </a>
            </div>
            <!--<div class="search">-->
            <!--<div class="search_map hover f_l">-->
            <!--<a href="/lives/" class="hov ">-->
            <!--<span>直播</span>-->
            <!--</a>-->
            <!--<a href="/eventlist" class="hov ml24">-->
            <!--<span class="hovv">技术峰会</span>-->
            <!--</a>-->
            <!--<a href="/dakalive" class="hov ml24">-->
            <!--<span>大咖视频</span>-->
            <!--</a>-->
            <!--<a href="/meet/material" class="hov ml24">-->
            <!--<span>会议PPT</span>-->
            <!--</a>-->
            <!--<a href="/subjects" class="hov ml24">-->
            <!--<span>技术专题</span>-->
            <!--</a>-->
            <!--</div>-->
            <!--</div>-->
          </div>

          <div class="quick f_r">
            <router-link :to="{path:'register',query:{type:'register'}}" tag="div" class="content"
                         style="display: inline;"><a href="java:void(0)" class="btn btn-login">注册</a></router-link>
            <router-link :to="{path:'register',query:{type:'login'}}" tag="div" class="content"
                         style="display: inline;">
              <button type="button" class="btn btn-login waves-effect waves-light">登录</button>
            </router-link>
          </div>
        </nav>
      </header>

      <div class="page-wrapper" style="min-height: 876px;">
        <div class="row">
          <!-- leftColumn begin -->
          <div class="col-lg-9 col-xlg-9 col-md-8">

            <div class="feed-list">
              <div class="feed-section">
                <div class="avatar">
                  <img src="https://thirdqq.qlogo.cn/g?b=oidb&amp;k=dnlRXWUAZ1XHWGlFPA2Lpw&amp;s=100" class="img-circle"
                       width="42">
                </div>
                <div class="post-self">
                  <div class="post-header">
                    <div class="create-time">今天 08:59</div>
                    <div class="creator">
                      <div class="user-name">腻碍@</div>
                    </div>
                    <div class="post-flags"></div>
                  </div>
                  <div class="post-body">
                    <div class="post-content">为什么主页模板的照片更换不了，一直保存失败</div>
                  </div>
                  <div class="post-footer">
                    <div class="more-action">
                      <!-- 鼠标经过 显示删除，默认隐藏 -->
                      <div class="del"><a href="#">删除</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="feed-section">
                <div class="avatar">
                  <img src="https://thirdqq.qlogo.cn/g?b=oidb&amp;k=dnlRXWUAZ1XHWGlFPA2Lpw&amp;s=100" class="img-circle"
                       width="42">
                </div>
                <div class="post-self">
                  <div class="post-header">
                    <div class="create-time">今天 08:59</div>
                    <div class="creator">
                      <div class="user-name">腻碍@</div>
                    </div>
                    <div class="post-flags"></div>
                  </div>
                  <div class="post-body">
                    <div class="post-content">为什么主页模板的照片更换不了，一直保存失败</div>
                  </div>
                  <div class="post-footer">
                    <div class="more-action">
                      <div class="del"><a href="#">删除</a></div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
          <!-- leftColumn end -->

          <!-- rightColumn begin -->
          <div class="col-lg-3 col-xlg-3 col-md-4">
            <div class="card">
              <div class="card-body">
                <div class="text-center m-t-30">
                  <div class="logout"><a href="#">[退出]</a></div>
                  <img src="../assets/images/1.png" alt="img" class="img-circle"
                       width="150">
                  <h4 class="card-title m-t-10">Hanna Gover</h4>
                  <h6 class="card-subtitle">Accoubts Manager Amix corp</h6>
                  <div class="row text-center justify-content-md-center">
                    <div class="col-6">
                      <a href="javascript:void(0)" class="link"><i class="icon-people"></i>
                        <span class="font-medium">254</span>
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0)" class="link"><i class="icon-picture"></i>
                        <span class="font-medium">54</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="login-box marginB10">
                  <button id="login_btn" type="button" class="btn btn-micv5 btn-block globalLogin" data-toggle="modal"
                          data-target="#feedBackModal">我要反馈
                  </button>
                </div>
                <div class="threeLogin">
                  <span>其他方式登录</span><a class="nqq" href="javascript:;"></a><a class="nwx" href="javascript:;"></a><a
                  class="nwb"></a>
                </div>
              </div>

            </div>
          </div>
          <!-- rightColumn end -->
        </div>
      </div>

      <footer class="footer"> © 2018 洲际保险</footer>
    </div>


    <div id="gotop">
    <a class="gotop"></a>
    </div>


    <!-- 我要反馈弹出 begin -->
    <div class="modal fade" id="feedBackModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
         aria-hidden="true">
      <div style="display:table; width:100%; height:100%;">
        <div style="vertical-align:middle; display:table-cell;">
          <div class="modal-dialog modal-lg">
            <div class="modal-content" style="border: none;">
              <div>
                <div class="modal-header">
                  <h4 class="modal-title">我要反馈</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <section class="box-login v5-input-txt">
                    <!-- 点击增加 .text-focus -->
                    <form class="feed-form text-focus" action="" method="post" autocomplete="off">
                      <div>
                        <textarea name="" placeholder="问题描述需大于5小于200字"></textarea>
                        <div class="additional">
                          <div class="tips">还可以输入 200 字</div>
                        </div>
                      </div>
                    </form>
                    <div class="login-box marginB10">
                      <button type="button" class="btn btn-micv5 btn-block globalLogin">提交反馈</button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {} from '../assets/js/custom'

  export default {
    name: "FeedBack",
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        // this.$api.get('topics', null, r => {
        //   console.log(r)
        // })
      }
    }
  }
</script>
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/login.css"></style>
<style scoped>

</style>
