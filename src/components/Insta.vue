<template>
  <div>
    <h3>
      Recent Instagram Posts For <a class="page-link" href="https://instagram.com/brenda_zysman">brenda_zysman</a>
    </h3>
    <div class="thumbnails">
      <a v-for="post in posts" :key="post.node.id"
         :href="'https://instagram.com/p/' + post.node.shortcode"
         target="_blank" rel="noopener"
         class="thumbnail">
        <g-image :src="post.node.display_url" :alt="'Instagram Photo: ' + post.node.edge_media_to_caption.edges[0].node.text"
                 class="photo" />
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Insta",
    props: {
      posts: Array
    }
  }
</script>

<style lang="scss" scoped>
  .thumbnails {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .thumbnail {
    box-shadow: none;
    display: block;
    margin: 0.5rem;
    max-width: calc(33% - 1rem);
    width: 120px;
    height: 120px;
    transition: 200ms box-shadow linear;

    :focus,
    :hover {
      box-shadow: 0 2px 14px #22222244;
      z-index: 10;
    }

    .photo {
      display: inline-block;
      width: 100%;
      height: 100%;
      * {
        margin-top: 0;
      }
    }
  }
</style>
