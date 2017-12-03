<template>
  <div class="home-view">
    <div class="container">
      <!-- 标题 -->
      <div class="row">
        <h1 class="title">
          11.30:今日力推,全部干货!
        </h1>
        <hr>
      </div>

      <!-- 内容 -->
      <div class="content">
        <p>
          <img alt=""
          src="http://7xi8d6.com1.z0.glb.clouddn.com/20171126223118_jeCYtY_chayexiaoguo_apple_26_11_2017_22_30_59_409.jpeg">
        </p>

        <h3>iOS</h3>
        <ul>
          <li>
            <a href="https://github.com/caiyue1993/IceCream" target="_blank">
              同步 Realm Database 和 CloudKit，轻松时间数据同步。
            </a>
            &nbsp;(代码家)
          </li>
          <li>
            <a href="https://github.com/caiyue1993/IceCream" target="_blank">
              同步 Realm Database 和 CloudKit，轻松时间数据同步。
            </a>
            &nbsp;(代码家)
          </li>
        </ul>

        <h3>Andriod</h3>
        <ul>
          <li>
            <a href="https://github.com/florent37/MyLittleCanvas" target="_blank">
                florent37 开源了一个很有意思的项目，MyLittleCanvas，用来替代“难用”的 canvas
            </a>
            &nbsp;(destter)
          </li>
          <li>
            <a href="https://github.com/florent37/MyLittleCanvas" target="_blank">
                florent37 开源了一个很有意思的项目，MyLittleCanvas，用来替代“难用”的 canvas
            </a>
            &nbsp;(destter)
          </li>
        </ul>

        <h3>前端</h3>
        <ul>
          <li>
            <a href="https://github.com/kpman/newsroom" target="_blank">
              💻 A modern CLI to get your favorite news. 📰&nbsp;
            </a>
            (Daniel Tseng)
          </li>
          <li>
            <a href="https://github.com/kpman/newsroom" target="_blank">
              💻 A modern CLI to get your favorite news. 📰&nbsp;
            </a>
            (Daniel Tseng)
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'home-view',
  data () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.home-view {
  .container {
    .row {
      .title {
        flex: 1;
        font-family: Verdana, 'Helvetica Neue', 'Microsoft Yahei', 'Hiragino Sans GB', 'Microsoft Sans Serif', 'WenQuanYi Micro Hei', sans-serif;
        margin-right: 1.8rem;
        line-height: 3.2rem;
        text-align: center;
        color: #000;
        word-break: break-all;
        background-size: cover;
        font-size: 2.6rem;
        font-weight: 400;
        letter-spacing: -.1rem;
      }
    }

    .content {
      img {
        width: 90.0%;
        margin-left: 1.5rem;
        height: auto !important;
        border: 4px solid #FFFFFF;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      }

      ul {
        width: auto !important;
        margin-left: 1.3em;
        // list-style: disc;
        margin-bottom: 1.2em;
        display: block;
      }

      li {
        list-style-type: disc;
      }

      h3 {
        font-size: 1.8rem;
        margin-left: 1.5rem;
        margin-top: 1.0rem;
        margin-bottom: 0.6rem;
        line-height: 1.35rem;
      }

      a {
        font-size: 1.6rem;
        text-decoration: none;
        word-break: break-all;
        color: #4183c4;
        text-decoration: none;
        font-weight: 400;

        line-height: 1.5;
        text-align: justify;
        overflow: hidden;
      }
    }
  }
}

</style>
