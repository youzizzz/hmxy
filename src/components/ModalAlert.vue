<template id="hmxy_dialog">

  <transition name="modal">
    <div class="hmxy-dialog" :hidden="!show">
      <div class="hmxy-dialog-content">
        <div class="hmxy-dialog-title">
          <div><span style="margin-right: 75%;" v-text="title"></span>
            <font-awesome-icon icon="times" style="text-align: right;cursor: pointer;" @click="hideDialog"/>
          </div>
          <hr/>
        </div>
        <div class="hmxy-dialog-container">
          <div class="hmxy-dialog-trip" v-text="content">
          </div>
          <div class="hmxy-dialog-btn">
            <div>
              <button class="btn" v-bind:class="btnIcon" @click="hideDialog">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "modalAlert",
    data() {
      return {
        show: false,
        btnIcon: "",
        title: "",
        content: ""
      }
    },
    methods: {
      hideDialog: function () {
        let that = this;
        that.show = false;
      },
      alert: function (data) {
        let that = this;
        that.btnIcon = data.btnIcon;
        that.title = data.title;
        that.content = data.content;
        that.show = true;
      }
    }

  }
</script>

<style scoped>
  .hmxy-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55, 55, 55, .6);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hmxy-dialog-content {
    width: 400px;
    box-sizing: border-box;
    padding: 30px 40px;
    background-color: #fff;
    border-radius: 6px;
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }

  .modal-transition {
    transition: all .3s ease;
  }

  .modal-enter .modal-confirm,
  .modal-leave .modal-confirm {
    transform: scale(1.1);
  }

  .modal-transition {
    transition: all .3s ease;
  }

  .hmxy-dialog-trip {
    margin: 20px 10px;
  }
</style>
