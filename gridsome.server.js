// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const configuration = require('./static/configuration.json');

    const collection = actions.addCollection({
      typeName: 'configuration'
    })

    collection.addNode(configuration)

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/user/new/main',
      component: './src/pages/user/new/Main.vue'
    });
    createPage({
      path: '/user/social',
      component: './src/pages/user/social/Main.vue'
    });
    createPage({
      path: '/user/social/main',
      component: './src/pages/user/social/Main.vue'
    });
    createPage({
      path: '/user/social/detail/:name',
      component: './src/pages/user/social/Details.vue'
    });
    createPage({
      path: '/user/blog',
      component: './src/pages/user/blog/Main.vue'
    });
    createPage({
      path: '/user/blog/main',
      component: './src/pages/user/blog/Main.vue'
    });
    createPage({
      path: '/user/blog/add',
      component: './src/pages/user/blog/Add.vue'
    });
    createPage({
      path: '/user/blog/edit/:id',
      component: './src/pages/user/blog/Edit.vue'
    });
    createPage({
      path: '/user/blog/details/:id',
      component: './src/pages/user/blog/Details.vue'
    });
    createPage({
      path: '/user/project',
      component: './src/pages/user/project/Main.vue'
    });
    createPage({
      path: '/user/project/main',
      component: './src/pages/user/project/Main.vue'
    });
    createPage({
      path: '/user/project/details/:name',
      component: './src/pages/user/project/Details.vue'
    });
    createPage({
      path: '/user/helper',
      component: './src/pages/user/helper/Main.vue'
    });
    createPage({
      path: '/user/helper/main',
      component: './src/pages/user/helper/Main.vue'
    });
    createPage({
      path: '/user/readme',
      component: './src/pages/user/readme/Main.vue'
    });
    createPage({
      path: '/user/readme/main',
      component: './src/pages/user/readme/Main.vue'
    });
  })
}
