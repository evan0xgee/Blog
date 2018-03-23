<template>
  <div class="index">
    <div class="main-container-wrapper">
      <ul class="nav-items">
        <li class="nav-item"><router-link to="Articles"><span class="icon"><img src="../../static/images/article_2.png" alt=""></span>文章</router-link></li>
        <li class="nav-item"><router-link to="Projects"><span class="icon"><img src="../../static/images/project_2.png" alt=""></span>项目</router-link></li>
      </ul>
      <span class="main-container">
        <h2 class="title">About me</h2>
        <p class="container">Name：iStorms</p>
        <p class="container">Job： Front-end Engineer</p>
        <p class="container">Website：www.istorms.net</p>
        <p class="container">Github：github.com/Eval0day7</p>
      </span>
    </div>
    <div class="aside">
    <span class="avatar-wrapper">
      <img src="http://www.istorms.net/static/images/logo.93e054b.png" class="avatar" alt="avatar">
      <h1 class="title">iStorms</h1>
      <p class="share-icons">
        <ul class="icon-items">
          <li class="icon-item"><a href="https://github.com/Eval0day7"><img class="icon" src="../../static/images/github.png" alt="github"></a></li>
          <li class="icon-item"><a href="https://twitter.com/MFstoryKing"><img class="icon" src="../../static/images/twitter.png" alt="twitter"></a></li>
          <li class="icon-item"><a href="https://weibo.com/u/2708104411?is_all=1"><img class="icon" src="../../static/images/weibo.png" alt="weibo"></a></li>
        </ul>
      </p>
    </span>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  div {
    height: 100%;
    font-size: 0;
  }
  .main-container-wrapper {
    display: inline-block;
    vertical-align: top;
    width: 49.95%;
    height: 100%;
    .nav-items {
      padding: 40px 0 0 40px;
      font-size: 16px;
      text-align: left;
      .nav-item {
        display: inline-block;
        line-height: 30px;
        margin: 0 20px 0 0;
        .icon {
          display: block;
          width: 32px;
          font-size: 28px;
          color: #475762;
          text-align: center;
        }
      }
    }
    .main-container {
      position: absolute;
      top: 50%;
      left: 25%;
      margin: -97px 0 0 -107px;
      line-height: 40px;
      font-size: 16px;
      color: #333;
      text-align: left;
      .title {
        margin: 0 0 20px 0 ;
        border-bottom: 2px solid #36D1C4;
      }
    }
  }
  .aside {
    position: relative;
    display: inline-block;
    width: 49.95%;
    height: 100%;
    background: #36D1C4;
    .avatar{border-radius: 50%;}
    .title {
      position: relative;
      margin: 20px 0 0 0;
      color: #fff;
      font-size: 32px;
    &::before {
       content:'';
       position: absolute;
       top: 0;
       left: 50%;
       width: 100px;
       height: 2px;
       margin: 0 0 0 -50px;
       background: #fff;
     }
    }
  }
  .avatar-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%,-45%);
    line-height: 50px;
    text-align: center;
    .title {
      margin: 20px 0 0 0;
    }
  }
  .share-icons {
    .icon-items {
      .icon-item {
        display: inline-block;
        .icon {
          width: 32px;
          margin: 0 15px 0 0;
          color: #fff;
          font-size: 24px;
        }
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 500px) {
    .main-container-wrapper {
      width: 100%;
      height: 49.99vh;
      .nav-items{
        padding: 3vh 0 2vh 3vh;
      }
      .main-container {
        position: relative;
        left: 0;
        display: inline-block;
        margin: 0;
      }
    }
    .aside {
      width: 100%;
      height: 49.99vh;
    }
    .avatar-wrapper {
      transform: translate(-45%, -45%);
    }
  }
</style>
