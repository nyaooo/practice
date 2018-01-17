<template>
    <div :class="{'nav-fixed': isNavFixed}">
        <mt-navbar v-model="activeNavId" id="nav" :class="{'nav-mt45': isNavMt45}">
            <mt-tab-item></mt-tab-item>
            <mt-tab-item id="nav_trend" class="nav-item">
                <!-- <router-link class="nav-item" tag="a" to="/trend">趋势</router-link> -->趋势
            </mt-tab-item>
            <mt-tab-item id="nav_hot" class="nav-item">
                <!-- <router-link class="nav-item" tag="a" to="/hot">热门</router-link> -->热门
            </mt-tab-item>
            <mt-tab-item id="nav_findperson" class="nav-item">
                <!-- <router-link class="nav-item" tag="a" to="/findperson">找人</router-link> -->找人
            </mt-tab-item>
            <mt-tab-item></mt-tab-item>
        </mt-navbar>
        <div class="divider"></div>
    </div>
</template>
<script>
export default {
    model: {
        prop: 'activeNav',
        event: 'update'
    },
    props: ['activeNav', 'isNavFixed', 'isNavMt45'],
    computed: {
        activeNavId: {
            get: function () {
                // console.log(this.activeNav, "get")
                return "nav_" + this.activeNav
            },
            set: function (newValue) {
                // console.log(newValue, "set")
                var _active = newValue.split("_")[1]
                this.$emit('update', _active)
            }
        }
    }
}
</script>
<style scoped>
    @import '../assets/css/nav.css'
</style>

