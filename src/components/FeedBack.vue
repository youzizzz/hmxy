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
              <div class="feed-section" v-for="(message,index) in messageList">
                <div class="avatar">
                  <img src="https://thirdqq.qlogo.cn/g?b=oidb&amp;k=dnlRXWUAZ1XHWGlFPA2Lpw&amp;s=100" class="img-circle"
                       width="42">
                </div>
                <div class="post-self">
                  <div class="post-header">
                    <div class="create-time">{{message.creatorDate}}</div>
                    <div class="creator">
                      <div class="user-name">{{message.creatorBy}}</div>
                    </div>
                    <div class="post-flags"></div>
                  </div>
                  <div class="post-body">
                    <div class="post-content">{{message.messageContent}}</div>
                  </div>
                  <div class="post-footer">
                    <div class="more-action">
                      <!-- 鼠标经过 显示删除，默认隐藏 -->
                      <div class="del"><a href="#">删除</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <!--<div class="feed-section">-->
              <!--<div class="avatar">-->
              <!--<img src="https://thirdqq.qlogo.cn/g?b=oidb&amp;k=dnlRXWUAZ1XHWGlFPA2Lpw&amp;s=100" class="img-circle"-->
              <!--width="42">-->
              <!--</div>-->
              <!--<div class="post-self">-->
              <!--<div class="post-header">-->
              <!--<div class="create-time">今天 08:59</div>-->
              <!--<div class="creator">-->
              <!--<div class="user-name">腻碍@</div>-->
              <!--</div>-->
              <!--<div class="post-flags"></div>-->
              <!--</div>-->
              <!--<div class="post-body">-->
              <!--<div class="post-content">为什么主页模板的照片更换不了，一直保存失败</div>-->
              <!--</div>-->
              <!--<div class="post-footer">-->
              <!--<div class="more-action">-->
              <!--<div class="del"><a href="#">删除</a></div>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->


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
                    <form action="" method="post" autocomplete="off">
                      <div class="form-group row">
                        <label class="control-label text-right col-sm-2">类型</label>
                        <div class="col-sm-8">
                          <select class="form-control" name="messageType" id="messageType">
                            <!--<option value="0">用户补全</option>-->
                            <option value="">请选择</option>
                            <option value="1">友链申请</option>
                            <option value="2">反馈建议</option>
                            <!--<option value="3">其余待定</option>-->
                          </select>
                        </div>
                      </div>

                      <div class="feed-form text-focus">
                        <textarea name="messageContent" id="messageContent" placeholder="问题描述需大于5小于200字"></textarea>
                        <div class="additional">
                          <div class="tips">还可以输入 200 字</div>
                        </div>
                      </div>
                    </form>
                    <div class="login-box marginB10">
                      <button id="feedBack_btn" type="button" @click="userFeedback()"
                              class="btn btn-micv5 btn-block globalLogin">提交反馈
                      </button>
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
        messageListUrl: "http://10.8.30.33:7088/web/message/listPage",
        messageUrl: "http://10.8.30.33:7088/web/message/findMessageById",
        feedbackUrl: "http://10.8.30.33:7088/web/message/userFeedback",
        messageList: [],
        page:1,
        limit:10
      }
    },
    created() {
        this.initPage();
        this.windowScroll();
        this.getData();
        this.showMessageList();
    },
    methods: {
      initPage() {
        $(function () {
          //模态框关闭事件
          $("#feedBackModal").on('hidden.bs.modal', function () {
            // $(this).removeData('bs.modal');
            $("#messageType").val("");
            $("#messageContent").val("");
          });

        });
      },
      windowScroll(){
        let that = this;
        //是否可以加载
        let flag = true;
        $(window).scroll(function () {
          if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            if(flag){
              flag = false;
              that.$ajax.get(that.messageListUrl,{params:{"page":that.page,"limit":that.limit}}).then(function (res) {
                $(res.data.data).each(function () {
                  that.messageList.push(this);
                })
                flag = true;
                that.page+=1;
              });
            }
          }
        });
      },
      getData() {
        // this.$api.get('topics', null, r => {
        //   console.log(r)
        // })
      },
      showMessageList() {
        let that = this;
        that.$ajax.get(that.messageListUrl,{params:{"page":that.page,"limit":that.limit}}).then(function (res) {
          that.messageList = res.data.data;
          that.page+=1;
        })
      },
      userFeedback() {
        let that = this;
        var params = new URLSearchParams();
        params.append("messageType", $("#messageType").val());
        params.append("messageContent", $("#messageContent").val());
        $("#feedBack_btn").attr("disabled", true);
        that.$ajax.post(that.feedbackUrl, params).then(function (res) {

          if ("10000" == res.data.code) {
            that.$ajax.get(that.messageUrl,{params:{"messageId":res.data.data}}).then(function (result) {
              that.messageList.unshift(result.data.data);
            })
            $("#feedBackModal").modal("hide");
            $("#feedBack_btn").attr("disabled", false);
          }
        })
      }
    }
  }
</script>
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/login.css"></style>
<style scoped>

</style>
