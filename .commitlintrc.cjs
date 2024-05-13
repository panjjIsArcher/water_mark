/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {},
  prompt: {
    useEmoji: true,
    emojiAlign: true,
    allowCustomScopes: false,
    messages: {
      type: "选择你要提交的类型 :",
    },
    types: [
      { value: "feat", name: "feat:新增功能 | A new feature" },
      { value: "fix", name: "fix:修复bug | fix bugs" },
      { value: "style", name: "style:修改样式 | change styles" },
      { value: "docs", name: "docs: 文档更新 | Documentation only changes" },
      {
        value: "refactor",
        name: "refactor: 代码重构 | neither fixes nor adds a feature",
      },

      { value: "perf", name: "perf: 性能提升 | improve performance" },
      { value: "test", name: "test: 测试相关 | Adding tests" },
      {
        value: "build",
        name: "build:构建相关 | build system or external dependencies",
      },
      {
        value: "ci",
        name: "ci: 持续集成 | Changes to our CI configuration files and scripts",
      },
      { value: "revert", name: "revert: 回退代码 | Revert to a commit" },
      {
        value: "chore",
        name: "chore:其他修改 | Other changes that do not modify src or test files",
      },
    ],
  },
};
