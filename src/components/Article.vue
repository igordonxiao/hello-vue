<template>
  <div>
    <h2>{{article.title}}</h2>
    <hr>
    <p>发布时间：{{article.created_time}}</p>
    <blockquote>{{article.digest}}</blockquote>
    <div v-html="article.content"></div>
    <hr>
    <p>资讯来源：{{article.source}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    const articleId = this.$route.query.id
    axios.get('http://120.79.19.40:8009/api/v1.0/cms/articles/' + articleId + '/')
      .then((res) => {
        this.article = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  name: 'Article',
  data () {
    return {
      article: {}
    }
  }
}
</script>
