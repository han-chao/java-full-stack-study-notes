module.exports = {
  title: 'Java 全栈学习笔记',
  description: '记录日常技术学习笔记',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/han-chao/java-full-stack-study-notes',
        }
      ],
      copyright: [
        {
          text: 'Copyright © 2020',
          link: ' ',
        }
      ],
    },
  },
  head: [
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?808756ba819214d79ec14961439844d5";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],
}
