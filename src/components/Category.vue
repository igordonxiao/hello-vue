<template>
  <div>
    <h2 class="g-category">Category</h2>
    <ul class="g-category-list">
      <li v-for="category in categories" :key="category.id" @click="loadArticles(category.id)"> {{category.name}} </li>
    </ul>
    <ul class="g-article-list">
      <li v-for="article in articles" :key="article.id" @click="pushToArticle(article.id)">{{article.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('http://120.79.19.40:8009/api/v1.0/cms/categories/')
      .then((res) => {
        this.categories = res.data.results.filter((item) => {
          return item.visibility === true
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  name: 'Category',
  data () {
    return {
      categories: [],
      articles: []
    }
  },
  methods: {
    loadArticles (categoryId) {
      axios.get('http://120.79.19.40:8009/api/v1.0/cms/articles/?page=1&stat=1&size=20&categories__id=' + categoryId)
        .then((res) => {
          this.articles = res.data.results
        })
        .catch((err) => {
          console.log(err)
        })
    },
    pushToArticle (articleId) {
      this.$router.push({
        path: '/article',
        query: {
          id: articleId
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.g-category
  color #668bff
.g-category-list,.g-article-list
  list-style none
.g-category-list > li
  display inline-block
  margin 20px
.g-article-list > li
  margin 20px
</style>
