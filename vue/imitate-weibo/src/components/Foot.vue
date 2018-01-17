<template>
    <mt-tabbar v-model="activeTabbar" :fixed="isFixed">
        <mt-tab-item id="tab_home">
            <img v-show="!homeIconActive" slot="icon" src="src/assets/image/home.png">
            <img v-show="homeIconActive" slot="icon" src="src/assets/image/home_active.png">
        </mt-tab-item>
        <mt-tab-item id="tab_hot">
            <img v-show="!hotIconActive" slot="icon" src="src/assets/image/planet.png">
            <img v-show="hotIconActive" slot="icon" src="src/assets/image/planet_active.png">
        </mt-tab-item>
        <mt-tab-item id="tab_msg">
            <img v-show="!msgIconActive" slot="icon" src="src/assets/image/msg.png">
            <img v-show="msgIconActive" slot="icon" src="src/assets/image/msg_active.png">
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
    data() {
        return {
            activeTabbar: "tab_hot",
            isFixed: false,
            homeIconActive: false,
            hotIconActive: true,
            msgIconActive: false
        }
    }
}
</script>
<style scoped>
    @import '../assets/css/foot.css'
</style>

