<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link style="color: #2384E8" :to="{ name: 'HomeView'}">
        Gank.IO
      </router-link>
    </h1>

    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'iOSView'}">
          iOS
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'AndriodView'}">
          Andriod
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'AndriodView'}">
          前端
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'MeiziView'}">
          妹子
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  .title {
    flex: 1;
    max-width: 6.6rem;
    max-height: 2.2rem;
    margin-right: 1.8rem;
    font-size: 1.6rem;
    line-height: 3.2rem;
    color: #00b600;
    word-break: break-all;
    background-size: cover;
  }

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  li {
    display: inline-block;
    font-size: 1.6rem;
    margin-right: 1.0rem;
  }
}
</style>
