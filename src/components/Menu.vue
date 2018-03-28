<template>
  <div>
    <div>
      <ul class="g-menu">
        <li><router-link :to="{path: '/'}">首页</router-link></li>
        <li><router-link :to="{path: '/category'}">分类</router-link></li>
        <li><router-link :to="{path: '/tag'}">标签</router-link></li>
        <li><router-link :to="{path: '/about'}">关于</router-link></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="stylus">
a,a:link,a:hover,a:visited
  color gray
  text-decoration none

.g-menu
  list-style none
  margin-left: 80px
  display block

.g-menu li
  padding 10px 30px
  display inline-block

.g-menu li:hover
  background-color #668bff
  cursor pointer
.g-menu li:hover > a
  color white
</style>
