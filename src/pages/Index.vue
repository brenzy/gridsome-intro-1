<template>
  <div>
    <Hero></Hero>
    <Layout>
      <template v-for="edge in $page.allPost.edges">
        <PostPreview :post="edge"></PostPreview>
      </template>
      <Pager :info="$page.allPost.pageInfo" linkClass="pager"/>
      <Insta :posts="$page.photos.edges"></Insta>
    </Layout>
  </div>
</template>

// Page Queries can only be done from pages
<page-query>
  query ($page: Int) {
    allPost (perPage: 2, page:$page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date (format: "MMMM Do, YYYY")
          excerpt
          tags {
            id
            path
          }
          timeToRead
          path
          cover_image (width: 75)
        }
      }
    }
    photos: allInstagramPhoto
    {
      edges
      {
        node
        {
          id
          shortcode
          display_url
          edge_media_to_caption
          {
            edges
            {
              node
              {
                text
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>

import PostPreview from '~/components/PostPreview.vue';
import Hero from '~/components/Hero.vue';
import { Pager } from 'gridsome';
import Insta from '~/components/Insta.vue';

export default {
  components: { Hero, PostPreview, Pager, Insta },
  metaInfo: {
    title: 'Home Page'
  }
}
</script>

<style lang="scss">
  .home-links a {
    margin-right: 1rem;
  }
  .pager {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    padding: 40px 20px;
  }
</style>
