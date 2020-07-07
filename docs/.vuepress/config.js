module.exports = {
    title: 'DDLC 中文 Mod 分部',
    description: '简单好用的 Mod 模板，助你快速制作属于自己的 Mod',
    plugins: {
      "vuepress-plugin-auto-sidebar": {},
    },

    head: [
      ['meta', { name: 'theme-color', content: '#fa4694' }],
    ],

    themeConfig: {
        docsRepo: 'imgradeone/DDMTCN-Docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        smoothScroll: true,
        editLinkText: '前往 GitHub 编辑此页面',
        lastUpdated: '上次更新于',
        nav: [
          { text: '主页', link: '/' },
          { text: '玩家指引', link: '/player/' },
          { text: '开发者', link: '/moddev/' },
          { text: '下载',
            items: [
              { text: '中文 Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplete-Chinese' },
              { text: 'DDLC Mod', link: '/mods/' }
            ]
          },
          {
            text: 'GitHub',
            items: [
              { text: 'Mod 模板', link: 'https://github.com/imgradeone/DDLCModTemplete-Chinese' },
              { text: '文档', link: 'https://github.com/imgradeone/DDMTCN-Docs' }
            ]
          }
        ],
      }
    
  }