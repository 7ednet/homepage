export default {
  lang: 'en-US',
  title: '7ED',
  description: '7ED.NET 为您提供一系列的服务，包含静态资源 CDN 加速服务、Github RAW 加速服务、海外图片内地加速服务、Bing 每日图片 API等。',

  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    nav: nav(),

    sidebar: [
      {
      text: '开始使用',
      collapsible: true,
      items: [
        { text: '静态资源加速', link: '/start/public-cdn' },
        { text: '图片处理服务', link: '/start/images-services' },
        { text: 'RSS 一站式服务', link: '/start/rss' }
      ]
      },
      {
      text: 'GitMirror 资源加速',
      collapsible: true,
      items: [
        { text: 'Github 文件加速', link: '/gitmirror/hub' },
        { text: 'Github Raw 加速', link: '/gitmirror/raw' },
        { text: 'Github Gist 加速', link: '/gitmirror/gist' },
        { text: 'Gitlab/Bitbucket 加速', link: '/gitmirror/others' }
      ]
      },
      {
        text: 'APIs',
        collapsible: true,
        items: [
          {
            text: 'Bing 每日图片',
            link: '/get-api/bing'
          },
          {
            text: 'Soup 毒鸡汤',
            link: '/get-api/soup'
          },
          {
            text: '弱智吧言论',
            link: '/get-api/ruozi'
          }
        ]
      },
      {
        text: '其他',
        collapsible: true,
        items: [
          { text: '更多服务', link: '/more-services' }
        ]
      },
      {
        text: '赠人玫瑰',
        collapsible: true,
        items: [
          { text: '手有余香', link: '/donate' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/7ednet/yard/discussions' }
    ],

    footer: {
      message: 'This website is released under the MIT License.',
      copyright: 'Copyright © 2024 7ed.net contributors'
    }
  }
}

function nav() {
  return [
    { text: '开始使用', link: '/start/public-cdn', activeMatch: '/start/' },
    { text: 'Git 加速', link: '/gitmirror/hub', activeMatch: '/gitmirror/' },
    { text: 'APIs', link: '/get-api/bing', activeMatch: '/get-api/' }
  ]
}
