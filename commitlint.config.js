// 提交规范配置，<type>: <subject>，type为必填项，subject为选填项
module.exports = {
    extends: [
        '@commitlint/config-conventional'
    ],
    rules: {
        'type-enum': [2, 'always', [
            "upd", // 更新某功能（不是 feat, 不是 fix）
            "feat", // 新功能（feature）
            "fix", // 修补bug
            "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
            "docs", // 文档（documentation）
            "chore", // 构建过程或辅助工具的变动
            "style", // 格式（不影响代码运行的变动）
            "revert", // 回滚
        ]],
        'type-case': [0], // type 大小写不做校验
        'type-empty': [2, 'never'], // type 不能为空
        'scope-case': [0], // scope 大小写不做校验
        'scope-empty': [0], // scope 可以为空
        'subject-full-stop': [1, 'never', '.'], // subject 结尾不加句号
        'subject-empty': [2, 'never'], // subject 可以为空
        'header-max-length': [0, 'always', 72], // header 最大长度不做校验
    }
};