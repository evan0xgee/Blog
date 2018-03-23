<template>
  <div>
    <div class="nav-wrapper">
      <ul class="nav-items">
        <li class="nav-item">
          <router-link to="/">
            <span class="icon "><img src="../../../static/images/home_1.png" alt="index"></span></router-link></li>
        <li class="nav-item">
          <router-link :to="{name: 'Articles'}">
            <span class="icon "><img src="../../../static/images/article_1.png" alt="article"></span></router-link></li>
        <li class="nav-item">
          <router-link :to="{name: 'Projects'}">
            <span class="icon "><img src="../../../static/images/project_1.png" alt="project"></span></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
}
</script>
<style lang='scss' scoped>
  .nav-items {
    display: block;
    margin: 0 auto 20px;
    padding: 20px 0 20px 5.4%;
    text-align: left;
    background: #36D1C4;
    .nav-item {
      display: inline-block;
      text-align: center;
      line-height: 30px;
      margin: 0 20px 0 0;
      a {
        color: #fff;
      }
      .icon {
        display: block;
        font-size: 28px;
        color: #fff;
        text-align: center;
      }
    }
  }
</style>
