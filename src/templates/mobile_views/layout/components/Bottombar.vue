<template>
    <div>
        <van-tabbar v-model="active" @before-change="beforeChange">
            <van-tabbar-item v-for="(item, index) in constantRouterMap" v-if="item.meta&&item.meta.type=='mobile'&&(token||!item.meta.LoginRequired)&&(!mini||!item.meta.mini)"
                :key="item.path" :to="item.path" :icon="item.meta.icon" @click="tabClick(index)">
                {{item.meta.title}}
            </van-tabbar-item>
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
                active: 0
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini',
                'activeIndex'
            ])
        },
        watch: {
            'active': function () {
                // this.$router.push(this.active)
            }
        },
        methods: {
            tabClick(index) {
                this.$store.commit('SET_ACTIVE', Number(index)-10)
            },
            onSelect() {
                // this.$router.push(this.active)
            }
        },
        mounted() {
            console.log(this.activeIndex)
            this.active = this.activeIndex
        }
    }
</script>