<template>
  <div class="projects">
    <Nav></Nav>
    <ul class="project-items">
      <li class="project-item">
        <a href="https://github.com/Eval0day7/Blog">
        <div class="img-detail-wrapper">
          <div class="img-detail-line">
            <h1 class="title">博客开源项目</h1>
          </div>
        </div>
        </a>
      </li>
    </ul>
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
  a {
    display: inline-block;
  }
  .projects {
    height: 100%;
  }
  .project-items {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 0 0 20px 0;;
    text-align: left;
    font-size: 0;
  }
  .project-item:nth-child(odd) {
    margin: 0 1vw .4vh 0;
  }
  .project-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 48.5%;
    height: 35vh;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 0 0 15px #ddd;
    text-align: center;
    background: url('http://www.istorms.net/static/images/demo.png') no-repeat;
    background-size: cover;
  }
  .img-detail-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    border-radius: 5px;
    background: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    .img-detail-line {
      height: 28.5vh;
      margin: 20px;
      overflow: hidden;
      border: 1px solid #fff;
    }
    .title {
      font-size: 2.5vw;
      line-height: 27.5vh;
    }
  }
@media screen and (min-width: 375px) and (max-width: 500px) {
  .img-detail-wrapper{
    .title {
      font-size: 16px;
    }
  }
}

</style>
