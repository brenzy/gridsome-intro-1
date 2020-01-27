// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Learning Gridsome',
  siteDescription: 'This is a site built to learn Gridsome with Vue and GraphQL.',
  templates: {
      Post: '/:title',
      Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/**/*.md',
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            route: '/tags/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'brenda_zysman',
        typeName: 'InstagramPhoto'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation',
        baseDir: './content/docs',
        pathPrefix: '/docs',
        template: './src/templates/Documentation.vue'
      }
    }
  ],
};
