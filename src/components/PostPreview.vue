<template>
  <article>
    <g-link class="image-link" :to="post.node.path">
      <g-image class="cover-image" :src="post.node.cover_image" />
    </g-link>
    <div>
      <h3>
        <g-link :to="post.node.path">{{post.node.title}}</g-link>
      </h3>
      <p>{{post.node.excerpt}}</p>
      <p>Posted {{post.node.date}} • {{post.node.timeToRead}} minute read</p>
      <g-link
        style="padding-right: .25em"
        v-for="tag in post.node.tags" :key="tag.id"
        :to="tag.path">
        #{{tag.id}}
      </g-link>
      <p><g-link :to="post.node.path">Read this post &rarr;</g-link></p>
    </div>
  </article>
</template>

<script>

export default {
  props: {
    post: Object
  }
}
</script>

<style lang="scss" scoped>
  .image-link {
    margin: 1rem 1rem 0 0;
  }
  .cover-image {
    margin-top: 0;
  }
  article {
    border-bottom: 1px solid #ddd;
    display: flex;
    margin-top: 0;
    padding-bottom: 1rem;
    :first-of-type {
      margin-top: 1rem;
    }
  }
</style>
