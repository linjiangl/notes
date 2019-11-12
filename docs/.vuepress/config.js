module.exports = {
  title: "逗比笔记",
  description: "Web development notes",
  ga: "UA-85414008-1",
  base: "/",
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      { text: "首页", link: "/" },
      { text: "GitHub", link: "https://github.com/linjiangl/notes" }
    ],
    sidebar: [
      {
        title: "PHP",
        path: "/guide/php/",
        collapsable: false,
        children: generateChildrenSidebar("/guide/php/", [
          "",
          "general",
          "install"
        ])
      },
      {
        title: "Nginx",
        path: "/guide/nginx/",
        collapsable: false,
        children: generateChildrenSidebar("/guide/nginx/", ["", "general"])
      }
    ]
  }
};

function generateChildrenSidebar(path, children) {
  children.forEach((val, key) => {
    children[key] = path + val;
  });
  return children;
}
