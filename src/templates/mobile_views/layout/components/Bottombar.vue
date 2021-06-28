<template>
    <div>
        <van-tabbar>
            <!-- <van-tabbar-item
                :key="item.path" :icon="item.meta.icon">
                <g-link :to="item.path">{{item.meta.title}}</g-link>
            </van-tabbar-item> -->
            <div class="van-tabbar-item"  
            v-for="(item, index) in constantRouterMap" v-if="item.meta&&item.meta.type=='mobile'&&(token||!item.meta.LoginRequired)&&(!mini||!item.meta.mini)"
            :key="item.path"  
            :class="{'van-tabbar-item--active': active == index}"
            @click="activeTab(item, index)">
                <!-- <g-link :to="item.path"> -->
                    <div class="van-tabbar-item__icon">
                        <i class="van-icon " :class="'van-icon-'+item.meta.icon"></i>
                    </div>
                    <div class="van-tabbar-item__text">
                        {{item.meta.title}}
                    </div>
                <!-- </g-link> -->
            </div> 
        </van-tabbar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { constantRouterMap } from '@/router'
    export default {
        data() {
            return {
                constantRouterMap,
                active: sessionStorage.getItem('bottomBarActiveIndex') || '10',
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini'
            ])
        },
        watch: {
            'active': function () {
                // this.$router.push(this.active).catch(err => {})
            }
        },
        methods: {
            activeTab(item, index) {
                this.active = index
                sessionStorage.setItem('bottomBarActiveIndex', index)
                this.$router.push(item.path)
            },
            onSelect() {
                // this.$router.push(this.active).catch(err => {})
            }
        }
    }
</script>
<style>
.van-tabbar-item a{
    color: unset;
    display: inline-block;
    width: 100%;
    text-align: center;
}
</style>