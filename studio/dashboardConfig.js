export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbfefd09ad37bc6b4258910',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-55kd99gm',
                  apiId: 'cd1fb6f1-45a4-44d7-8969-a68e05cf4e77'
                },
                {
                  buildHookId: '5fbfefd1c2e608e58d4d35b2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7nvfvyj3',
                  apiId: '58c4ccf2-e178-4c15-8e75-c1c9a999b1df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bazerg/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7nvfvyj3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
