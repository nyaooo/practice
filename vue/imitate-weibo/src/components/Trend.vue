<template>
  <div id="trend">
      <div class="sub-container">
        <ul class="trend-nav-menu">
          <li class="trend-nav-item">
            <a href="javascript:;">
              <img src="../assets/image/star.png" alt="">
              附近
            </a>
          </li>
          <li class="trend-nav-item">
            <a href="javascript:;">
              <img src="../assets/image/star.png" alt="">
              头条
            </a>
          </li>
          <li class="trend-nav-item">
            <a href="javascript:;">
              <img src="../assets/image/star.png" alt="">
              榜单
            </a>
          </li>
          <li class="trend-nav-item">
            <a href="javascript:;">
              <img src="../assets/image/star.png" alt="">
              明星
            </a>
          </li>
        </ul>
      </div>
      <div class="sub-container">
        <div class="sub-title">
          <p>大家都在搜</p>
        </div>
        <div class="trend-sub-content">
          <ul>
            <li v-for="(item, index) in hotSearchList" :key="index">
              <a href="javascript:;">
                <span>{{ item.title }}</span>
                <img class="hot-search" :src="item.pic" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-title">
          <p>热门话题</p>
        </div>
        <div class="trend-sub-content">
          <ul>
            <li v-for="(item, index) in hotTopicList" :key="index">
              <a href="javascript:;">
                <img class="hot-topic" :src="item.pic" alt="">
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sub-container">
        <div class="hot-videos">
          <div class="videos-title">
            <p>热门视频</p>
          </div>
          <div class="video-item" v-for="(item, index) in hotVideoList" :key="index">
            <div class="fake-video">假装我是视频</div>
            <p>{{ item.title }}</p>
            <div class="video-info">
              <a href="javascript:;" class="video-orgin">
                <img :src="item.info.pic" alt="">
                {{ item.info.name }}
              </a>
              <div class="video-fnc">
                <a href="javascript:;">
                  <img src="../assets/image/like.png" alt="">
                  {{ item.info.like }}
                </a>
                <a href="javascript:;">
                  <img src="../assets/image/send.png" alt="">
                  {{ item.info.send }}
                </a>
                <a href="javascript:;">
                  <img src="../assets/image/share.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotSearchList: [],
      hotTopicList: [],
      hotVideoList: []
    }
  },
  props: ['activeflag'],
  watch: {
    activeflag: function () {
      if (this.activeflag == "trend") {
        /* 点击顶部nav切换时，加载新数据 */
        this.getHotSearch()
        this.getHotTopic()
        this.getHotVideo()
      }
    }
  },
  methods: {
    getHotSearch: function () {
      var _this = this;
      this.$http.get('/src/data/trend/search.data').then(
        res => {
          _this.hotSearchList = res.data
        }, res => {
          console.log(res)
        }
      )
    },
    getHotTopic: function () {
      var _this = this;
      this.$http.get('/src/data/trend/topic.data').then(
        res => {
          _this.hotTopicList = res.data
        }, res => {
          console.log(res)
        }
      )
    },
    getHotVideo: function () {
      var _this = this;
      this.$http.get('/src/data/trend/hotvideo.data').then(
        res => {
          _this.hotVideoList = res.data
        }, res => {
          console.log(res)
        }
      )
    }
  },
  mounted() {
    /* 默认首次加载 */
    this.getHotSearch()
    this.getHotTopic()
    this.getHotVideo()
  }
}
</script>
<style scoped>
  @import '../assets/css/trend.css'
</style>
