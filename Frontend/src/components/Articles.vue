<template>
  <div>
    <Nav></Nav>
    <div class="main-container-wrapper">
      <div class="main-container">
        <div class="article" v-for="(item,index) in articles" :key="index" >
          <router-link :to="'/Articles/Detail=' + index" active-class="article-link" >
            <h1 class="title" >{{item.article_name}}</h1>
          </router-link>
          <p>
            <span class="icon time-wrapper"><img class="time" src="../../static/images/time.png" alt="time"><span class="text">{{item.add_time}}</span></span>
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from './common/Nav.vue'
import Footer from './common/Footer.vue'
export default {
  props: ['articles'],
  data () {
    return {}
  },
  components: {
    Nav,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .main-container-wrapper {
    display: flex;
    color: #0E2431;
    .main-container {
      flex: 1;
      .article {
        position: relative;
        margin: 20px;
        padding: 40px 40px 80px;
        border: 1px solid #eee;
        box-shadow: 0 0 15px #eee;
        border-radius: 5px;
        line-height: 24px;
        .title {
          margin: 0 0 20px 0;
          font-size: 24px;
          line-height: 30px;
          text-align: left;
          font-weight: normal;
        }

  }
    }
  }
  .icon {
    display: block;
    font-size: 28px;
    color: #fff;
    text-align: center;
  }
  .text {
    padding: 0 0 0 10px;
    font-size: 14px;
    vertical-align: middle;
  }
  .icon {
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    vertical-align: top;
    color: #989999;
  }
  .time-wrapper {
    position: absolute;
    bottom: 30px;
    right: 40px;
    .time {
      display: inline-block;
      width: 16px;
    }
  }
</style>
