---
title: MarkDown学习
date: 2022/09/26/ 15:29:24
description: 
---

- [Cheat Sheet](#cheat-sheet)
  - [Basic Syntax](#basic-syntax)
  - [Extended Syntax](#extended-syntax)
- [Basic Syntax](#basic-syntax-1)
  - [Headings](#headings)
    - [Alternate Syntax](#alternate-syntax)
  - [Paragraphs](#paragraphs)
  - [Line Breaks](#line-breaks)
  - [Emphasis](#emphasis)
    - [Bold](#bold)
    - [italic](#italic)
    - [Bold and Italic](#bold-and-italic)
  - [Backquotes](#backquotes)
    - [Backquotes with Multiple Paragraphs](#backquotes-with-multiple-paragraphs)
    - [Nested Blockquotes](#nested-blockquotes)
    - [Blockquotes with Other Elements](#blockquotes-with-other-elements)
  - [Lists](#lists)
    - [Ordered Lists](#ordered-lists)
      - [Nesting List Items](#nesting-list-items)
    - [Unorded Lists](#unorded-lists)
    - [Adding Elements in Lists](#adding-elements-in-lists)
      - [Paragraphs](#paragraphs-1)
      - [Blockquotes](#blockquotes)
      - [Code Blocks](#code-blocks)
      - [Images](#images)
  - [Code](#code)
    - [Escaping Tick Marks](#escaping-tick-marks)
    - [Code Blocks](#code-blocks-1)
  - [Horizontal Rule](#horizontal-rule)
  - [Links](#links)
    - [Adding Titles](#adding-titles)
    - [URLs and Email Addresses](#urls-and-email-addresses)
    - [Formatting Links](#formatting-links)
  - [Tables](#tables)
    - [Alignment](#alignment)
  - [Footnotes](#footnotes)
  - [Escaping Characters](#escaping-characters)
  - [Strikethrough](#strikethrough)
  - [Definition Lists](#definition-lists)
  - [Task Lists](#task-lists)

## Cheat Sheet

### Basic Syntax

hello

```markdown
| Element         | Markdown Syntax                  |
| --------------- | -------------------------------- |
| Heading         | # H1 ## H2 ### H3                |
| Bold            | **bold text**                    |
| Italic          | *italicized text*                |
| Blockquote      | > blockquote                     |
| Ordered List    | 1. First item                    |
| Unordered List  | - First item                     |
| Code            | `code`                           |
| Horizontal Rule | ---                              |
| Link            | [title](https://www.example.com) |
| Image           | ![alt text](image.jpg)           |
```

### Extended Syntax

```markdown
| Element           | Markdown Syntax                       |
| ----------------- | ------------------------------------- |
| Table             | [Tables](#tables)                     |
| Fenced Code Block | ```{hello world}```                   |
| Footnote          | [Footnotes](#footnotes)               |
| Heading ID        | ### My Great Heading {#custom-id}     |
| Definition List   | [Definition Lists](#definition-lists) |
| Strikethrough     | ~~the~~                               |
| Task List         | [Task Lists](#task-lists)             |
```

## Basic Syntax

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., ### My Header).

```markdown
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
```

#### Alternate Syntax

Alternatively, on the line below the text, add any number of == characters for heading level 1 or -- characters for heading level 2.

```markdown
Heading level 1
===============

Heading level 2
---------------
```

### Paragraphs

```markdown
I really like using Markdown.

I really like using Markdown.
```

### Line Breaks

To create a line break (`<br>`), end a line with two or more spaces, and then type return.

```markdown
This is the first line.
And this is the second line.
```

### Emphasis

#### Bold

```Markdown

I love **bold text**.

I love __bold text__.

Love**is**bold.
```

I love **bold text**.

I love **bold text**.

Love**is**bold.

#### italic

```markdown
The *cat's meow*.

The _cat's meow_.

A*cat*meow
```

The *cat's meow*.

The *cat's meow*.

A*cat*meow

#### Bold and Italic

```markdown

***Important*** text.

___Important___ text.

__*Important*__ text.

**_Important_** text.
```

### Backquotes

```Markdown

> Dorothy followed her through many rooms.
```

#### Backquotes with Multiple Paragraphs

```markdown
> This the first paragraph.
> 
> And this is the second paragraph.
```

> This the first paragraph.
>
> And this is the second paragraph.

#### Nested Blockquotes

```markdown
> This the first pragraphs.
>
>> And this is the nested paragraph.
```

> This the first pragraphs.
>
>> And this is the nested paragraph.

#### Blockquotes with Other Elements

```markdown
> ###### The quarterly results look greak!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going **well**.
```

> The quarterly results look greak
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> *Everything* is going **well**.

### Lists

#### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

```markdown
1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item
```

1. First item
2. Second item
3. Third item
4. Fourth item

1. First item
1. Second item
1. Third item
1. Fourth item

1. First item
8. Second item
3. Third item
5. Fourth item

##### Nesting List Items

To nest line items in an ordered list, indent the items four spaces or one tab.

```markdown
1. First item
2. Second item
3. Third item
1. Indented item
2. Indented item
4. Fourth item
```

#### Unorded Lists

To create an unordered list, add dashes (-), asterisks  (*),  or  plus  signs  (+)  in  front  of line items.

```markdown

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
* Second item
- Third item
+ Fourth item

```

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
* Second item
- Third item
+ Fourth item

#### Adding Elements in Lists

##### Paragraphs

```markdown

* This is the first list item.
* Here's the second list item.

I need to add another paragraph below the second list item.

* And here's the third list item.
```

* This is the first list item.
* Here's the second list item.

I need to add another paragraph below the second list item.

* And here's the third list item.

##### Blockquotes

```markdown

* This is the first list item.
* Here's the second list item.

> I need to add another paragraph below the second list item.

* And here's the third list item.
```

* This is the first list item.
* Here's the second list item.

> I need to add another paragraph below the second list item.

* And here's the third list item.

##### Code Blocks

Code  blocks  are  normally  indented  four  spaces  or  one  tab.  When  they’re  in  a  list, indent them eight spaces  or two tabs.

1. Open the file.
2. Find the following code block on line 21:

        <html>
            <head>
                <title>Test</title>
            </head>

3. Update the title to match the name of your website.

```markdown
1. Open the file.
2. Find the following code block on line 21:

        <html>
            <head>
                <title>Test</title>
            </head>

3. Update the title to match the name of your website.
```

##### Images

```markdown
1. Open the file containing Tux, the Linux mascot.
2. Marvel at its beauty.
   
   ![Tux](images/tux.png)

3. Close the file.
```

### Code

to denote a word or phrase as code, enclose it in tick marks (`).

```markdown
At the command prompt, type `nano`.
```

At the command prompt, type `nano`.

#### Escaping Tick Marks

If the word or phrase you want to denote as code includes one or more tick marks, you can escape it by enclosing the word or phrase in double tick marks(“).

```markdown
``Use `code` in your Markdown file.``
```

``Use `code` in your Markdown file.``

#### Code Blocks

To create code blocks, indent every line of the block by at least four space or one tab.

```markdown
    <html>
        <head>
        </head>
    </html>
```

### Horizontal Rule

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

```markdown
***

---

___
```

***

---

___

### Links

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

```markdown
Use [Duck Duck Go](https://duckduckgo.com).
```

#### Adding Titles

You  can  optionally  add  a  title  for  a  link.  This  will  appear  as  a  tooltip  when  the  user hovers  over the  link. To add  a title, enclose it  in parentheses after the URL.

```markdown
Use [Duck Duck Go](https://duckduckgo.com "My search engine!").
```

#### URLs and Email Addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.

```markdown
<https://eff.org>
<fake@example.com>
```

#### Formatting Links

To emphasize links, add  asterisks before and after the  brackets and parentheses.

```markdown
I love supporting **[EFF](https://eff.org)**
This is the *[EFF](https://eff.org)*.
```

I love supporting **[EFF](https://eff.org)**
This is the *[EFF](https://eff.org)*.

### Tables

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table.

```markdown
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

#### Alignment

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

```markdown
| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
```

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

### Footnotes

Footnotes allow you to add notes and references without cluttering the body of the document. When you create a footnote, a superscript number with a link appears where  you  added  the  footnote  reference.  Readers  can  click  the  link  to  jump  to  the content of the  footnote  at  the bottom of the page.
To create a footnote reference, add a caret and an identifier inside brackets (`[^1]`). Identifiers can be numbers or words, but they can’t contain spaces or tabs. Identifiers only correlate the footnote reference with the footnote itself — in the output, footnotes are numbered sequentially.
Add the footnote using another caret and number inside brackets with a colon and text (`[^1]: My footnote.`). You don’t have to put footnotes at the end of the document. You can put them anywhere except inside other elements like lists, block quotes, and tables.

```markdown
Here's a simple footnote, [^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote, [^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

### Escaping Characters

To   display   a   literal   character   that   would   otherwise   be   used   to   format   text   in   a Markdown document, add a backslash (\) in  front of the  character.

```markdown
\* Without the backslash, this would be a bullet in an unordered list.
```

\* Without the backslash, this would be a bullet in an unordered list.

### Strikethrough

You can “strikethrough” words by putting a horizontal line through the center of them. This feature allows you to indicate that certain words are a mistake not meant for inclusion in the document. To strikethrough words, use two tilde symbols (∼∼) before and after the words.

```markdown
The world is ~~flat~~ round.
```

The world is ~~flat~~ round.

### Definition Lists

Some Markdown processors allow you to create definition lists of terms and their corresponding definitions. To create a definition list, type the term on the first line. On the next line, type a colon followed by a space and the definition.

```markdown
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the first term.
: This is another definition of the second term.

```

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the first term.
: This is another definition of the second term.

### Task Lists

Task lists allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items. To select a checkbox, add an x in between the brackets ([x]).

```markdown
- [x] Write the press release
- [ ] Update the website.
- [ ] Contact the media.
```
