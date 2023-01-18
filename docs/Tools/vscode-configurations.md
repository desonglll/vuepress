---
title: VScode配置
date: 2022/09/26/ 15:29:58
description: 
---

- [User Snippets配置](#user-snippets配置)
  - [Variables](#variables)
  - [.md file](#md-file)
- [Google Fonts API](#google-fonts-api)
  - [Noto Sans](#noto-sans)
- [Personal access tokens (classic)](#personal-access-tokens-classic)

## User Snippets配置

[[VS Code]跟我一起在Visual Studio Code 添加自定义snippet（代码段），附详细配置](https://blog.csdn.net/maokelong95/article/details/54379046)

### Variables

Variables：变量

使用$name或${name:default}可以插入变量的值。当变量未赋值时（如），将插入其缺省值或空字符串。 当varibale未知（即，其名称未定义）时，将插入变量的名称，并将其转换为「Placeholder」。可以使用的「Variable」如下：

- TM_SELECTED_TEXT：当前选定的文本或空字符串；

> 注：v1.49 起，直接输入代码片段前缀并补全，即可对选中文本适用代码片段，见 RP105440。

- TM_CURRENT_LINE：当前行的内容；
- TM_CURRENT_WORD：光标所处单词或空字符串

> 注：所谓光标一般为文本输入处那条闪来闪去的竖线，该项可定制。单词使用 VSCode 选词（Word Wrap）器选择。你最好只用它选择英文单词，因为这个选择器明显没有针对宽字符优化过，它甚至无法识别宽字符的标点符号。

- TM_LINE_INDEX：行号（从零开始）；
- TM_LINE_NUMBER：行号（从一开始）；
- TM_FILENAME：当前文档的文件名；
- TM_FILENAME_BASE：当前文档的文件名（不含后缀名）；
- TM_DIRECTORY：当前文档所在目录；
- TM_FILEPATH：当前文档的完整文件路径；
- RELATIVE_FILEPATH：当前文档的相对路径（相对于当前工作目录）；
- CLIPBOARD：当前剪贴板中内容；
- WORKSPACE_NAME：当前工作目录的名称（而非完整路径）；
- WORKSPACE_FOLDER：当前工作目录的路径。
还有一些用于插入当前时间的变量，这里单独列出：
- CURRENT_YEAR: 当前年份；
- CURRENT_YEAR_SHORT: 当前年份的后两位；
- CURRENT_MONTH: 格式化为两位数字的当前月份，如 02；
- CURRENT_MONTH_NAME: 当前月份的全称，如 July；
- CURRENT_MONTH_NAME_SHORT: 当前月份的简称，如 Jul；
- CURRENT_DATE: 当天月份第几天；
- CURRENT_DAY_NAME: 当天周几，如 Monday；
- CURRENT_DAY_NAME_SHORT: 当天周几的简称，如 Mon；
- CURRENT_HOUR: 当前小时（24 小时制）；
- CURRENT_MINUTE: 当前分钟；
- CURRENT_SECOND: 当前秒数；
- CURRENT_SECONDS_UNIX：Unix 时间戳。

还有一些用于插入随机值的变量：

- RANDOM 6个随机十进制数

- RANDOM_HEX 6个随机十六进制数（小写）

> 注：希望生成大写可用 \${RANDOM_HEX/(.*)/${1:/upcase}/}。具体原理见后续「变量转换」章节。

- UUID 生成 UUIDv4

还有一些用于插入行/块注释的变量，其将根据当前文件的语言模式自动调整：

- BLOCK_COMMENT_START 块注释上半段，输出示例:
  - PHP: `/*`
  - HTML: `<!--`

- BLOCK_COMMENT_END 块注释下半段，输出示例:
  - PHP: `*/`
  - HTML: `-->`

- LINE_COMMENT 行注释，输出示例:
  - PHP: `//`
  - HTML: `<!-- -->`

> 注：这些都是变量名，不是宏，在实际使用的时要加上 $ 符。

### .md file

```json
{
 // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
 // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
 // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
 // used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
 // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
 // Placeholders with the same ids are connected.
 // Example:
 // "Print to console": {
 //  "scope": "javascript,typescript",
 //  "prefix": "log",
 //  "body": [
 //   "console.log('$1');",
 //   "$2"
 //  ],
 //  "description": "Log output to console"
 // }
 "insertDate": {
  "prefix": "date",
  "body": "$CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE/ $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"
 },
 "insertTitle": {
  "prefix": "title",
  "body": [
   "---",
   "title: $TM_FILENAME_BASE",
   "date: $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE/ $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
   "categories: $1",
   "tags: $2",
   "updated: ",
   "type:",
   "comments:",
   "description: ",
   "keywords:",
   "top_img:",
   "mathjax: true",
   "katex:",
   "aside:",
   "aplayer:",
   "highlight_shrink:",
   "sticky: ",
   "cover: ",
   "---",
  ]
 },
 "InsertFileName_BASE": {
  "prefix": "filename",
  "body": [
   "$TM_FILENAME_BASE"
  ]
 },
}
```

## Google Fonts API

### Noto Sans

Noto Sans Traditional Chinese & Simplified Chinese

@import

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
</style>
```

CSS rules to specify families

```css
font-family: 'Noto Sans SC', sans-serif;
font-family: 'Noto Sans TC', sans-serif;
```

## Personal access tokens (classic)

vcode_sync: `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`
