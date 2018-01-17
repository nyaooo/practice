<template>
    <div class="main-container">
        <mt-tab-container id="main" v-model="activeTabId" :swipeable="tabSwip">
            <mt-tab-container-item id="tab_trend">
                <TrendView></TrendView>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab_hot">
                <HotView :activeflag="activeTab"></HotView>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab_findperson">
                <FindpersonView :activeflag="activeTab"></FindpersonView>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import TrendView from './Trend'
import HotView from './Hot'
import FindpersonView from './Findperson'

export default {
    data() {
        return {
            tabSwip: false
        }
    },
    props: ['activeTab'],
    computed: {
        activeTabId: {
            get: function () {
                return "tab_" + this.activeTab
            },
            set: function (newValue) {
            }
        }
    },
    components: {
        TrendView,
        HotView,
        FindpersonView
    }
}
</script>
<style scoped>
    .main-container {
        min-height: 534px;
        background-color: #efefef;
    }
</style>
