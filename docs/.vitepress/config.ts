import MarkdownIt from "markdown-it";
import deflist_plugin from "markdown-it-deflist";

export default {
  base: "/notes/",
  title: "索引",
  description: "只是学习笔记",
  markdown: {
    config: (md: MarkdownIt) => {
      md.use(deflist_plugin);
    },
  },
};
