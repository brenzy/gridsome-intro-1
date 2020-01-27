<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <p class="author">
      Posted by {{$page.post.author}}
    </p>
    <div class="post" v-html="$page.post.content" />
    <g-link class="read-link" to="/">&larr; Back to all posts</g-link>
  </Layout>
</template>

<page-query>
    query Post ($id: ID!) {
      post: post (id: $id) {
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        tags {
          id
          title
          path
        }
        content
        cover_image (width: 860, blur: 10)
      }
    }
  </page-query>

<style lang="scss">
  .post {
    img {
      width: 100%;
      margin-top: 1rem;
    }
    max-width: 800px;
  }
  .author {
    font-size: 0.75rem;
  }
  .read-link   {
    display: inline-block;
    font-size: 0.875rem;
  }

</style>
