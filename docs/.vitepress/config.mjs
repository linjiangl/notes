import { defineConfig } from 'vitepress'

function page(base, slug, text) {
  return {
    text,
    link: slug ? `${base}${slug}` : base,
  }
}

function section(text, base, items) {
  return {
    text,
    collapsed: false,
    items: items.map(([slug, label]) => page(base, slug, label)),
  }
}

export default defineConfig({
  lang: 'zh-CN',
  title: '小白手册',
  description: 'new developer notes',
  base: '/notes/',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/linjiangl/notes' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      section('GIT', '/guide/git/', [
        ['', '安装配置'],
        ['branch', '分支管理'],
        ['commit', '提交规范'],
        ['command', '常用命令'],
        ['question', '常见问题'],
      ]),
      section('PHP', '/guide/php/', [
        ['', '安装配置'],
        ['general', '常用轮子'],
        ['develop', '开发环境搭建'],
        ['setting', '相关配置'],
        ['cs_fixer', 'PHP-CS-FIXER 配置'],
        ['design', '设计模式'],
      ]),
      section('Nginx', '/guide/nginx/', [
        ['', '安装配置'],
        ['question', '常见问题'],
      ]),
      section('Linux', '/guide/linux/', [
        ['', 'Linux'],
        ['centos', 'CentOS'],
        ['alpine', 'Alpine'],
        ['tmux', 'Tmux'],
        ['nodejs', 'NodeJS'],
      ]),
      {
        text: '数据库',
        collapsed: false,
        items: [
          section('MySql', '/guide/db/mysql/', [
            ['', '安装配置'],
            ['general', '常用命令'],
            ['slow', '慢查询'],
          ]),
          section('Redis', '/guide/db/redis/', [
            ['', '安装配置'],
            ['strings', 'Strings'],
            ['keys', 'Keys'],
            ['lists', 'Lists'],
            ['sets', 'Sets'],
            ['pubsub', 'Pubsub'],
            ['transaction', 'Transaction'],
            ['example', 'Example'],
          ]),
        ],
      },
      {
        text: '常用工具',
        collapsed: false,
        items: [
          section('WSL', '/guide/tools/wsl/', [['', 'WSL2 说明']]),
          section('Office', '/guide/tools/office/', [['', 'Office KMS激活']]),
          section('VSCode', '/guide/tools/vscode/', [
            ['', '常用插件'],
            ['format', '代码格式化'],
          ]),
          section('Sublime Text', '/guide/tools/sublime/', [['', '常用配置']]),
          section('Mac', '/guide/tools/mac/', [['', '常见问题']]),
        ],
      },
    ],
    lastUpdated: {
      text: 'Last Updated',
    },
  },
})
