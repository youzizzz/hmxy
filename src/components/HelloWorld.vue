<template xmlns:v-for="http://www.w3.org/1999/xhtml">
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
          <div class="search">
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
          </div>
        </div>
        <div class="quick f_r">
          <router-link :to="{path:'register',query:{type:'register'}}" tag="div" class="content" style="display: inline;">  <a href="java:void(0)" class="btn btn-login">注册</a></router-link>
          <router-link :to="{path:'register',query:{type:'login'}}" tag="div" class="content" style="display: inline;">  <button type="button" class="btn btn-login waves-effect waves-light">登录</button></router-link>
        </div>
      </nav>
    </header>

    <div class="page-wrapper" style="min-height: 876px;">
      <div class="row">
        <!-- leftColumn begin -->
        <div class="col-lg-10 col-xlg-9 col-md-8">

          <!--  筛选 begin -->
          <div class="card ">
            <div class="card-body findlist_tj">
              <div class="li">
                <div class="label1">时间</div>
                <div class="items">
                  <a href="/eventlist?category=&amp;day=&amp;city=%E5%8C%97%E4%BA%AC&amp;orderBy=latest"
                     class="item  active ">全部</a>
                  <a href="/eventlist?category=&amp;day=0&amp;city=%E5%8C%97%E4%BA%AC&amp;orderBy=latest"
                     class="item">今天</a>
                  <a href="/eventlist?category=&amp;day=1&amp;city=%E5%8C%97%E4%BA%AC&amp;orderBy=latest"
                     class="item">明天</a>
                  <a href="/eventlist?category=&amp;day=7&amp;city=%E5%8C%97%E4%BA%AC&amp;orderBy=latest"
                     class="item">本周</a>
                  <a href="/eventlist?category=&amp;day=6_7&amp;city=%E5%8C%97%E4%BA%AC&amp;orderBy=latest"
                     data-value="d3" class="item ">下周</a>
                  <a href="/eventlist?category=&amp;day=30&amp;city=%E5%8C%97%E4%BA%AC&amp;orderBy=latest"
                     class="item">本月</a>
                  <a href="javascript:void(0)" class="item " id="datetimepicker2">指定日期</a>
                  <input type="hidden" class="input event_field_time_input" id="startTime" name="startTime"
                         value="" data-date-format="yyyy-mm-dd">
                </div>
              </div>
              <div class="li" id="area">
                <div class="label1">城市</div>
                <div class="items">
                  <input type="hidden" value="" id="selectCity">
                  <a href="javascript:void(0)" data-value="" class="item active"
                     id="eventLocation" @click="cxtjClick">全国</a>
                    <a href="javascript:void(0)" class="item"  v-for="(addr,index) in address" @click="cxtjClick" v-bind:value="addr.areId">{{addr.cityName}}</a>
                </div>
              </div>
              <div class="li" id="category">
                <div class="label1">技术类别</div>
                <div class="items">
                  <a href="javascript:void(0)"
                     data-value="" class="item  active" value="" @click="cxtjClick">全部</a>
                  <a href="javascript:void(0)" class="item"  v-for="(category,index) in categorys" @click="cxtjClick" v-bind:value="category.cfId">{{category.categoryName}}</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 筛选 end -->

          <!-- 轮播 begin -->
          <div class="card">
            <div class="card-body">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <!--<img class="img-responsive" src="../assets/images/img4.jpg"-->
                    <!--alt="First slide">-->
                  </div>
                  <div class="carousel-item">
                    <!--<img class="img-responsive" src="../assets/images/img5.jpg"-->
                    <!--alt="Second slide">-->
                  </div>
                  <div class="carousel-item">
                    <!--<img class="img-responsive" src="../assets/images/img6.jpg"-->
                    <!--alt="Third slide">-->
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                  class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div class="row" id="mettings_all">
            <div v-if="!meetings" class="card col-sm-3">数据暂无</div>
            <div class="card col-sm-3" v-for="(meeting,index) in meetings">
             <a href="javascript:void(0);"> <img class="card-img-top" :src="meeting.logoUrl" alt="Card image cap"></a>
              <div class="card-block">
                <a class="card-title meeting_title"  href="javascript:void(0)">{{meeting.title}}</a>
                <p class="card-text">
                  <span style="display: block;font-size: 14px;"><font-awesome-icon icon="clock" size="xs" />  {{meeting.shareStartTime}}-{{meeting.shareEndTime}}</span>
                  <span style="font-size: 14px;"> <font-awesome-icon icon="map-marker-alt" size="xs" /> {{meeting.areaId.replace(" ","")}}</span>
                 </p>
              </div>
            </div>

          </div>
        </div>
        <!-- leftColumn end -->

        <!-- rightColumn begin -->
        <div class="col-lg-2 col-xlg-2 col-md-2">
          <div class="card" id="userInfo">
            <div class="card-body">
              <div class="text-center m-t-30">
                <img src="../../static/images/1.png" alt="img" class="img-circle">
                <!--width="150">-->
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
            <div>
              <hr>
            </div>
            <div class="card-body">
              <small class="text-muted">邮件地址</small>
              <h6>XXXXXXXX@mail.com</h6>
              <small class="text-muted p-t-10 db">电话</small>
              <h6>+00 0000 0000</h6>
              <small class="text-muted p-t-10 db">地址</small>
              <h6>XXXXXXX XXXX XXXXXX XXXXX, MD 000000</h6>
            </div>
          </div>
        </div>
        <!-- rightColumn end -->
      </div>
    </div>

    <div id="gotop">
      <a class="gotop"></a>
    </div>


    <!-- 首页弹出登录 begin -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
         aria-hidden="true">
      <div style="display:table; width:100%; height:100%;">
        <div style="vertical-align:middle; display:table-cell;">
          <div class="modal-dialog modal-sm" style="width:540px; max-width: 540px;">
            <div class="modal-content" style="border: none;">
              <div class="col-right">
                <div class="modal-header">
                  <h4 class="modal-title">登录</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <section class="box-login v5-input-txt" id="box-login">
                    <div id="login-form-tips" class="tips-error">
                      <!--错误提示：此div不隐藏，清空内容即可,同时给input增加边框，例如：border: 1px solid #fc4b6c;-->
                    </div>
                    <form class="login_form" action="" method="post" autocomplete="off">
                      <ul>
                        <li class="form-group"><input class="form-control"maxlength="50" name="" placeholder="请输入邮箱账号/手机号" type="text"></li>
                        <li class="form-group"><input class="form-control" name="" placeholder="请输入密码" type="password"></li>
                        <li class="form-group verifyCode">
                          <input class="form-control" maxlength="4" name="" placeholder="请输入验证码" type="text">
                          <img src="../../static/images/verifyCode.jpg" alt="">
                        </li>
                      </ul>
                    </form>
                    <p class="good-tips marginB10">
                      <a href="java:;" target="_blank" class="f_r" id="btnForgetpsw">忘记密码？</a>还没有账号？<a href="java:;" target="_blank" id="btnRegister">立即注册</a>
                    </p>
                    <div class="login-box marginB10">
                      <button id="login_btn" type="button" class="btn btn-micv5 btn-block globalLogin">登&nbsp;&nbsp;录</button>
                    </div>
                    <div class="threeLogin">
                      <span>其他方式登录</span><a class="nqq" href="java:;"></a><a class="nwx" href="java:;"></a><a class="nwb"></a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer"><p>© 2018 IT峰汇 如上列表中有遗漏且您知道有相关技术峰会可
      <router-link :to="dcbq" tag="div" class="content" style="display: inline;">    <a href="javascript:void(0)">点此补全</a></router-link>
    <br/><span>以上所有信息皆从网上搜集,如有侵权及即时与我们沟通,我们将立马撤掉相关信息
         <router-link :to="ywgt" tag="div" class="content" style="display: inline;">    <a href="javascript:void(0)">与我沟通</a></router-link>
      </span></p></footer>
  </div>

</template>
<!--< src="http://pv.sohu.com/cityjson?ie=utf-8"></>-->
<script>
  import {} from '../assets/js/custom'
  import {MP} from '../assets/js/importJsResources'
  export default {
    name: 'hello',
    data() {
      return {
        addressApiurl: "http://10.8.30.33:7088/web/area/list",
        categoryApiurl: "http://10.8.30.33:7088/web/category/list",
        meetingApiurl:"http://10.8.30.33:7088/web/share/list",
        address:[],
        categorys:[],
        meetings:[],
        meetingParam:{
          "pageSize": 20,
          "pageNum": 1
        },
        currentAddressApiUrl:"http://pv.sohu.com/cityjson?ie=utf-8",
        dcbq:{
          path:sessionStorage.getItem("currentUser")==null?"register":"clickComplete",
          query:{
           type:sessionStorage.getItem("currentUser")==null?"login":"",
           callbackUrl:sessionStorage.getItem("currentUser")==null?"":"clickComplete"
         }
        },
        ywgt:{
          path:sessionStorage.getItem("currentUser")==null?"register":"Communicate",
          query:{
            type:sessionStorage.getItem("currentUser")==null?"login":"",
            callbackUrl:sessionStorage.getItem("currentUser")==null?"":"Communicate"
          }
        }
      }
    },
    created: function () {
      this.findAddress();
      this.findCategory();
    },
    mounted: function () {
      this.findMeeting();
      this.$nextTick(function () {
        const _this=this;
        MP(_this.currentAddressApiUrl).then(function (data) {
          console.info("当前所在地址城市为:%s",data.cname);
        })
      })
    },
    methods: {
      findAddress: function () {
        let that = this;
        that.$ajax.get(that.addressApiurl, {params: {"pageSize": 10, "pageNum": 1}}).then(function (res) {
               that.address=res.data.data;
        })
      },
      findCategory:function () {
        let that = this;
        that.$ajax.get(that.categoryApiurl, {params: {"pageSize": 10, "pageNum": 1}}).then(function (res) {
          that.categorys=res.data.data;
        })
      },
      findMeeting:function () {
        let that = this;
        that.meetingParam["categoryId"]=$("#category").find(".active").attr("value");
        that.meetingParam["areaId"]=$("#area").find(".active").attr("value");
        that.$ajax.get(that.meetingApiurl, {params: that.meetingParam}).then(function (res) {
          that.meetings=res.data.data;
        })
      },
      cxtjClick:function (obj) {
          let that=this;
          $(obj.target).addClass("active").siblings().removeClass("active");
          that.findMeeting();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/css/style.css"></style>
<style scoped src="../assets/css/login.css"></style>
<!--<style scoped>-->
  <!--h1, h2 {-->
    <!--font-weight: normal;-->
  <!--}-->

  <!--ul {-->
    <!--list-style-type: none;-->
    <!--padding: 0;-->
  <!--}-->

  <!--li {-->
    <!--display: inline-block;-->
    <!--margin: 0 10px;-->
  <!--}-->

  <!--a {-->
    <!--color: #42b983;-->
  <!--}-->
<!--</style>-->
<style scoped>
  #mettings_all .card{
    border: none !important;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }

  #mettings_all img{
    cursor: pointer;
  }

  #mettings_all .card-title{
    color: #2f3d4a;
  }
  #mettings_all .card-title:hover{
    color: #0056b3;
  }

  .fa-xs:focus{
    color: red;
  }

  .meeting_title{
    padding: 16px 12px 0;
    margin-bottom: 10px;
    overflow: hidden;
    height: 55px;
    display: block;
    font-size: 14px
  }
</style>
