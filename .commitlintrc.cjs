/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {},
  prompt: {
    useEmoji: true,
    emojiAlign: true,
    messages: {
      type: "选择你要提交的类型 :",
    },
    types: [
      { value: "feat", name: "feat:新增功能 | A new feature" },
      { value: "fix", name: "fix:修复bug | fix bugs" },
    ],
  },
};
