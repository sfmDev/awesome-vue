<template>
  <div class="ios-page">
  <header-bar></header-bar>
  <ios-view></ios-view>
  </div>
</template>

<script>

import HeaderBar from '../components/HeaderBar'
import iOSView from '../components/iOSView'

export default {
  name: 'ios-page',
  components: { HeaderBar, iOSView },
  data () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.ios-view {
  margin-top: 4.6rem;
  padding-top: 0.2rem;
}
</style>
