<template>
  <div id="hot">
      <div class="sub-container hot-item" v-for="(item, index) in hotList" :key="index">
        <div class="hI-head">
          <div class="orgin">
            <a href="javascript:;" class="info">
              <img :src="item.head.pic" alt="">
              <div>
                <p class="info-name">{{ item.head.name }}</p>
                <p class="info-other">1小时前<span>{{ item.head.terminal }}</span></p>
              </div>
            </a>
            <div class="options">
              <mt-button class="more-btn" icon="more"></mt-button>
            </div>
          </div>
        </div>
        <div class="hI-body">
          <p class="hI-text" v-html="item.body.text"></p>
          <div class="hI-pic">
            <a href="javascript:;" v-for="(pic, index) in item.body.pics" :key="'pic_' + index">
              <img :src="pic.src" alt="">
            </a>
          </div>
        </div>
        <div class="hI-foot">
          <div class="fn-group">
            <a href="javascript:;">
              <img src="../assets/image/like.png" alt="">
              {{ item.foot.like }}
            </a>
            <a href="javascript:;">
              <img src="../assets/image/comment.png" alt="">
              {{ item.foot.comment }}
            </a>
            <a href="javascript:;">
              <img src="../assets/image/send.png" alt="">
              {{ item.foot.send }}
            </a>
            <a href="javascript:;">
              <img src="../assets/image/share.png" alt="">
            </a>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotList: []
    }
  },
  props: ['activeflag'],
  watch: {
    activeflag: function () {
      if (this.activeflag == 'hot') {
        this.getHotWeibo()
      }
    }
  },
  methods: {
    getHotWeibo: function () {
      var _this = this;
      this.$http.get('src/data/hot/hot.data').then(
        res => {
          _this.hotList = res.data
        }, res => {
          console.log(res)
        }
      )
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/hot.css'
</style>
