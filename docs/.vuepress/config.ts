import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hi there!",
  description: "这是我的第一个 VuePress 站点",
  base: "/",
  theme: defaultTheme({
    // 在这里进行配置
    colorModeSwitch: true,
    home: "/index.md",
    navbar: [
      // NavbarGroup
      {
        text: "工具",
        children: [
          {
            text: "neovim based on lua",
            link: "/CS-learning/Neovim-based-on-lua.md",
          },
        ],
      },
      {
        text: "考研",
        children: [
          {
            text: "展开式",
            link: "/math-expansions.md",
          },
          {
            text: "记录",
            link: "/postgraduate/index.md",
          },
        ],
      },
      // NavbarItem
      {
        text: "Bilibili",
        link: "https://space.bilibili.com/79569766?spm_id_from=333.1007.0.0",
      },
      // 字符串 - 页面文件路径
      "/index.md",
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    // 可折叠的侧边栏
    sidebar: {
      "/": [
        {
          text: "主页",
          collapsible: true,
          children: ["/index.md"],
        },
        {
          text: "进度",
          children: ["/postgraduate/index.md"],
        },
        {
          text: "计算机科学",
          collapsible: false,
          children: [
            {
              text: "Neovim based on lua",
              link: "/CS-learning/neovim-based-on-lua.md",
            },
            {
              text: "Regular-Expressions",
              link: "/CS-learning/regular-expressions.md",
            },
            {
              text: "Vue3",
              link: "/CS-learning/vue3-study.md",
            },
            {
              text: "Docker",
              link: "/Tools/docker-commands.md",
            },
            {
              text: "Crontab",
              link: "/Tools/crontab-commands.md",
            },
          ],
        },
      ],
    },
  }),
});
