module.exports = {
  title: "小白手册",
  description: "new developer notes",
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
        title: "GIT",
        collapsable: false,
        children: generateChildrenSidebar("/guide/git/", ["", "branch", "commit", "command", "question"])
      },
      {
        title: "PHP",
        collapsable: false,
        children: generateChildrenSidebar("/guide/php/", [
          "",
          "general",
          "develop",
          "setting",
          "cs_fixer",
          "design",
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
        children: generateChildrenSidebar("/guide/linux/", ["", "centos", 'alpine', 'tmux', 'nodejs'])
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
        sidebarDepth: 3,
        children: [
          {
            title: "WSL",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/wsl/", [""])
          },
          {
            title: "VSCode",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/vscode/", ["", "extensions"])
          },
          {
            title: "Sublime Text",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/sublime/", [""])
          },
          {
            title: "Mac",
            collapsable: false,
            children: generateChildrenSidebar("/guide/tools/mac/", [""])
          }
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
