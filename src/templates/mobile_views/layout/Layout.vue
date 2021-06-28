<template>
    <div>
        <section>
            <transition name="fade">
                <slot />
            </transition>
        </section>
        <bottombar style="position:fixed;bottom:0;"></bottombar>
    </div>
</template>
<static-query>
query {
  allConfiguration {
    edges {
      node {
        githubUsername
        blogTitle
        blogDescribe
        htmlTitle
        fontColor
        useBackgroundImage
        backgroundColorLeft
        backgroundColorRight
        mini
        webSites {
          name
          url
        }
			}
    }
  }
}
</static-query>
<script>
    import { mapGetters } from 'vuex'
    import Bottombar from './components/Bottombar'
    export default {
        name: 'MLayout',
        components: {
            Bottombar
        },
        mounted() {
            this.$store.dispatch(
            "LocalReload",
            this.$static.allConfiguration.edges[0].node
            );
            this.$store.dispatch("GetInfo");
        }
    }
</script>

<style>
.mobile-border{
    border-top:1px solid #E4E7ED;
    border-bottom:1px solid #E4E7ED;
}
.mobile-border-top{
    border-top:1px solid #E4E7ED;
}
.mobile-margin-top{
    margin-top: 10px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>