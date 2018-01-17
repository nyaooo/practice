<template>
  <div id="app">
    <HeadView v-show="headBarShow"></HeadView>
    <NavView v-model="activeNav" :isNavFixed="navFixed" :isNavMt45="navMt45"></NavView>
    <MainView :activeTab="activeNav"></MainView>
    <FootView v-show="footBarShow"></FootView>
  </div>
</template>

<script>
import HeadView from "./components/Head";
import NavView from "./components/Nav";
import MainView from "./components/Main";
import FootView from "./components/Foot";

import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      activeNav: "trend",
      scrolly: 0,
      navFixed: false,
      navMt45: true
    };
  },
  computed: mapGetters([
    'headBarShow',
    'footBarShow'
  ]),
  /* 监听滑动来控制head和底部nav显示 */
  watch: {
    scrolly: function(newVal, oldVal) {
      /* 通过距顶部距离比较，来判断滚动方向 */
      if (newVal > 0) {
        if (newVal > oldVal) {
          /* 向下滚 */
          this.$store.dispatch("hideHeadBar");
          this.$store.dispatch("hideFootBar");
          this.navFixed = true
          this.navMt45 = false
        } else {
          /* 向上滚 */
          this.$store.dispatch("showHeadBar");
          this.$store.dispatch("showFootBar");
          this.navFixed = true
          this.navMt45 = true
        }
      } else if (newVal == 0) {
        this.$store.dispatch("showHeadBar");
        this.$store.dispatch("showFootBar");
        this.navFixed = false
        this.navMt45 = true
      }
    }
  },
  methods: {
    handleScroll: function() {
      this.scrolly = document.documentElement.scrollTop;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  /*********/
  components: {
    HeadView,
    NavView,
    MainView,
    FootView
  }
};
</script>
<style>
@import "./assets/css/index.css";
</style>
