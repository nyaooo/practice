<template>
  <div id="findperson">
      <div class="sub-container">
        <mt-cell title="通讯录好友">
          <img slot="icon" src="../assets/image/friends.png" width="24" height="24" style="margin-right: 1em;">
        </mt-cell>
      </div>
      <div class="sub-container">
        <div class="sub-title nears-title">
          <p>附近的人</p>
          <a class="all-friends" href="javascript:;">全部</a>
        </div>
        <div class="sub-content nears-list">
          <ul>
            <li v-for="(item, index) in nearsList" :key="index">
              <a href="javascript:;">
                <img :src="item.pic" alt="">
                <span class="nears-name">{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sub-container">
        <div class="sub-title interes-title">
          <p>你可能感兴趣的人</p>
        </div>
        <div class="interes-list">
          <a href="javascript:;" class="interes-info" v-for="(item, index) in interesList" :key="index">
            <div class="info-pic">
              <img :src="item.pic" alt="">
            </div>
            <div class="info-detail">
              <div class="info-text">
                <p class="info-name">{{ item.name }}</p>
                <p class="info-id">{{ item.id }}</p>
                <p class="info-intro">{{ item.intro }}</p>
              </div>
              <div class="info-fnc">
                <mt-button class="add-follow">
                  <img src="../assets/image/follow.png" alt="" slot="icon" width="32" height="32">
                </mt-button>
              </div>
            </div>
          </a>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nearsList: [],
      interesList: []
    }
  },
  props: ['activeflag'],
  watch: {
    activeflag: function () {
      if(this.activeflag == 'findperson'){
        this.getNears()
        this.getInteres()
      }
    }
  },
  methods: {
    getNears: function () {
      var _this = this;
      this.$http.get('/src/data/findperson/nears.data').then(
        res => {
          //success
          _this.nearsList = res.data
        }, res => {
          //error
          console.log(res)
        }
      )
    },
    getInteres: function () {
      var _this = this
      this.$http.get('/src/data/findperson/interes.data').then(
        res => {
          _this.interesList = res.data
        }, res => {
          console.log(res)
        }
      )
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/findperson.css'
</style>
