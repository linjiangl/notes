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
