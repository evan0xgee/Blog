<template>
  <div>
    <Nav></Nav>
    <p class="article-title" >{{articles[id].article_name}}</p>
    <div class="main-container" v-html='complieMarkdown' v-highlight></div>
    <Footer></Footer>
  </div>
</template>
<script>
import marked from 'marked'

import Nav from '../common/Nav.vue'
import Footer from '../common/Footer.vue'

export default {
  props: ['articles'],
  data () {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route' (to, from) {
    }
  },
  computed: {
    complieMarkdown: function () {
      return marked(this.articles[this.id].article_content, {sanitize: true})
    }
  },
  components: {
    Nav,
    Footer
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
.main-container {
  width: 90%;
  margin: 0 auto 0;
  padding: 0 20px;
  text-align: left;
  img {
    width: 100%;
  }
}
.article-title {
  margin: 0 0 40px 0;
  font-size: 24px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
  text-align: center;
}
</style>
