<template>
  <div id="blog">
    <router-view :articles="articles"/>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.$nextTick(() => {
      axios.get('http://127.0.0.1:8000/articles').then((response) => {
        this.articles = response.data.results
      })
    })
  }

}
</script>

<style lang="scss">
@import './sass/_common.scss';
#blog {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  text-align: center;
  color: #2d3649;
  height: 100%;
}

</style>
