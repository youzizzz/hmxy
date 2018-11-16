<template>
  <mu-container>
    <mu-tabs :value.sync="active2" color="green" indicator-color="red" full-width @change="tabChange">
      <mu-tab>首页</mu-tab>
      <mu-tab>第二页</mu-tab>
      <mu-tab>第三页</mu-tab>
    </mu-tabs>
    <div class="inloading" v-if="inloading">
      loading...
    </div>
    <mu-list>
      <div v-for="(item,index) in items">
       <router-link :to="{path:'content',query:{id:item.id}}" tag="div" class="content">
         <div class="list">
           <div class="list-title">
             <span v-if="item.istop==0">置顶</span>
             <span v-if="item.istop==1" :style="styleObj">普通帖</span>
              <span style="display: none">{{item.titleCss=item.titleCss.replace("style=","").replace("\"","").replace("\"","")}}</span>
             <strong :style='item.titleCss'>{{item.title}}</strong>
           </div>
           <div class="timer">
             <span >{{item.createTime}}</span>
           </div>
         </div>
       </router-link>
      </div>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    <p class="nomore" v-if="nomore">
      内容到底啦
    </p>
  </mu-container>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        active2: 0,
        inloading: false,
        items: [],
        scroller: null,
        loading: false,
        page: 1,
        url: "http://localhost:8080/bxld-web/news/list",
        nomore: false,
        styleObj: {
          backgroundColor: '#C5C5C7'
        }
      }
    },
    created: function () {
      this.getData();
    },
    mounted: function () {
      this.scroller = this.$el
    },
    methods: {
      tabChange: function () {
        this.getData()
      },
      loadMore: function () {
        let that = this;
        let arr = []
        if (!that.loading && !that.nomore) {
          that.loading = true;
          that.page += 1;
          that.url = "http://localhost:8080/bxld-web/news/list?pageNum=" + that.page;
          setTimeout(() => {
            this.$ajax.get(that.url).then(function (response) {
              arr = response.data;
              if (arr.length == 0) {
                that.loading = false;
                that.nomore = true
                return;
              }
              that.items = [...that.items, ...arr];
              arr = [];
            })
            this.loading = false;
          }, 1000);
        }
      },
      getData: function () {
        let that = this
        this.$ajax.get(that.url).then(function (response) {
          that.items = response.data;
        }).catch(function (e) {
          console.info(e);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .list {
    border: 0.6rem solid #EFF2F7;
    .list-title {
      text-align: left;
      > span {
        background-color: #369219;
        color: #fff;
        padding: 0.2rem;
        border-radius: 0.2rem;
        font-size: 1rem;
        margin-right: 0.5rem;
      }
    }
  }
</style>
