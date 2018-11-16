<template>
  <div class="wapper">
    <mu-appbar color="primary">
      <mu-button color="primary" @click="goback"  slot="left">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <mu-button flat slot="right">LOGIN</mu-button>
      <span  :style="doc.titleCss">{{doc.title}}</span>
    </mu-appbar>
    <div class="content-about">
        <span>作者:{{doc.author}}</span>
        <span>发表时间:{{!doc.publishTime?"某得感情":doc.publishTime}}</span>
    </div>
    <div class="content-text"  v-html="doc.content"></div>
  </div>
</template>
<script>
  export default {
    name: "Content",
   data(){
      return {
        doc:{}
      }
   },
    created(){
      this.getData();
    },
    mounted(){
      console.info($("#mdzz").html());
    },
    methods:{
      getData(){
        let id=this.$route.query.id;
        let that=this;
        //POST提交参数形式
        var params=new URLSearchParams();
        params.append("id",id);
       this.$ajax.post('http://localhost:8080/bxld-web/news/findById',params).then(function(response){
         that.doc=response.data;
         that.doc.titleCss=that.doc.titleCss.replace("style=","").replace("\"","").replace("\"","");
        })
      },
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
