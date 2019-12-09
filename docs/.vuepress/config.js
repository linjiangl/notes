module.exports = {
  title: "开发笔记",
  description: "Web development notes",
  ga: "UA-85414008-1",
  base: "/notes/",
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  themeConfig: {
    logo: "/img/logo.png",
    lastUpdated: "Last Updated",
    nav: [
      { text: "首页", link: "/" },
      { text: "GitHub", link: "https://github.com/linjiangl/notes" }
    ],
    sidebar: [
      {
        title: "PHP",
        collapsable: false,
        children: generateChildrenSidebar("/guide/php/", [
          "",
          "general",
          "setting",
          "cs_fixer",
          "design"
        ])
      },
      {
        title: "Nginx",
        collapsable: false,
        children: generateChildrenSidebar("/guide/nginx/", ["", "question"])
      },
      {
        title: "Linux",
        collapsable: false,
        children: generateChildrenSidebar("/guide/linux/", [""])
      },
      {
        title: "数据库",
        sidebarDepth: 2,
        children: [
          {
            title: "MySql",
            collapsable: false,
            children: generateChildrenSidebar("/guide/db/mysql/", ["", "general", "slow"])
          },
          {
            title: "Redis",
            collapsable: false,
            children: generateChildrenSidebar("/guide/db/redis/", ["", "strings", "keys", "lists", "sets", "pubsub", "transaction", "example"])
          },
        ]
      },
      {
        title: "常用工具",
        sidebarDepth: 2,
        children: [
          {
            title: "Git",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/git/", ["", "command", "branch", "gitlab"])
          },
          {
            title: "Docker",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/docker/", [""])
          },
          {
            title: "Tmux",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/tmux/", [""])
          },
          {
            title: "Mac",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/mac/", [""])
          },
        ]
      },

    ]
  }
};

function generateChildrenSidebar(path, children) {
  children.forEach((val, key) => {
    children[key] = path + val;
  });
  return children;
}
