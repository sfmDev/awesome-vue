<template lang="html">
  <div class="home-page">
  <header-bar></header-bar>
  <home-view></home-view>
</div>
</template>

<script>

import HeaderBar from '../components/HeaderBar'
import HomeView from '../components/HomeView'

export default {
  name: 'pages-view',
  components: { HeaderBar, HomeView },
  data () {
  },
  methods: {
  }
}
</script>

<style scoped>
.home-view {
  margin-top: 4.6rem;
  padding-top: 0.2rem;
}
</style>
