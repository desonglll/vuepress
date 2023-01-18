---
title: Vim命令
date: 2022/09/26/ 15:29:36
description: 
---

https://blog.csdn.net/m0_47696151/article/details/117792656

- [Study videos](#study-videos)
- [Let's get start](#lets-get-start)
- [Save and quit](#save-and-quit)
- [Visual Mode](#visual-mode)
- [Navigation and cursor](#navigation-and-cursor)
- [Editing and delete in line](#editing-and-delete-in-line)
- [Movements (Macros)](#movements-macros)
- [Copying and pasting](#copying-and-pasting)
- [Making changes while in command mode(*Normal Mode*)](#making-changes-while-in-command-modenormal-mode)
- [Finding](#finding)
- [Replacing](#replacing)
- [Screen slip](#screen-slip)

## Study videos

[Vim Tutorial](https://youtu.be/IiwGbcd8S7I)

[Vim in 100 Seconds](https://youtu.be/-txKSRn0qeA)

## Let's get start

Typing `vim hello.md` or `vi hello.md` for open an existed file.

(If there is no such file, *Vim* will creates a new file.)

## Save and quit

Back to *Normal Mode* and press `:`, then type these commans.

`:w` for written, means **save**.

`:q` for quit.

`:wq` for save and quit.

`:q!` for force quit.

`:wq!` for force save and quit.

## Visual Mode

`v` for enter *Visual Mode*.

`V` for enter *Visual Line Mode*.

## Navigation and cursor

`h` for moving **left**.

`j` for moving **down**. You can remember "Jumping Down" for this.

`k` for moving **up**. You can remember "Kick the ball" for this.

`l` for moving **right**.

`20j` for go down 20 lines.

`20k` for go up 20 lines.

`10h` for go left 10 characters.

`10l` for go right 10 characters.

`zz` for brings current line to the center of the screen.

`0` for moving cursor to the begin of current **line**.

`$` for moving cursor to the end of current **line**.

`^` for moving cursor to the begin of the first word of current line. (Equals `0w`)

`%` for takes you to the other curly brace over here.

`*` for takes the cursor exploring between the same characters the cursor in file.

`;` for takes you to the next character you want to find used `t` or `f`.

`gg` for moving cursor to the begin of the **file**.

`G` for moving cursor to the end of the **file**.

`{` for go up a block.

`}` for go down a block.

`10{` for go up 10 blocks.

`10}` for go down 10 blocks.

`w` for takes you to the begin of next word.

`W` for moving cursor and ignore everything until the next space.

`b` for takes you to the begin of previous word.

`B` for takes you back from `W`.

`t` + `w` for go-to left of character "w" at the line basically.

`f` + `w` for go-to right of character "w" at the line basically.

## Editing and delete in line

`i` for enter *Insert Mode* to start editing. (At the front of the cursor.)

`I` for enter *Insert Mode* to start editing. (At the begin of the line.)

`a` for enter *Insert Mode* to start editing. (At the back of the cursor.)

`A` for enter *Insert Mode* to start editing. (At the end of the line.)

`c` for change.

`ct` + `a` for delete rest of the line until character "a".

`C` for delete rest of the line and enter *Insert Mode*.

`cw` for change word. (Delete this word and enter *Insert Mode*.)

`o` for enter *Insert Mode* to start editing in a new line **above**.

`O` for enter *Insert Mode* to start editing in a new line **below**.

`d` for delete the selected parts.

`D` for delete rest of the line. (Everything to the right of your cursor.)

`dd` for delete the current line.

`10dd` for delete 10 lines.

`d}` for delete entire block.

`u` for undo it.

`Ctrl^` + `r` for redo it.

`.` (period) for reran the last performance again.

`>>` for add a tab.

`3` + `>>` for add a tab for the next 3 lines.

## Movements (Macros)

`q` for record movements you done.

`qw` to enter record using `w` key to store.

(While `qq` is using `q` key to store.)

Then you can do a lot of movements.

Eg. There has a piece of code.

```markdown
abc
wdf
jjs
```

So now, move cursor to character "a" in *Normal Mode*, and press `qw` to enter record.

I can do `i` + `"` + `Escape` + `A` + `"` + `Escape` + `j`, then press `Escape` and type `q` to quit recording.

Now you can press `@w` to repeat the movements that you have done.

(`10@q` means do 10 times macros which stored in `q` key.)

## Copying and pasting

`yy` for copy current line to my clipboard.

`p` for paste **below** the line from my clipboard.

`P` for paste **above** the line from my clipboard.

## Making changes while in command mode(*Normal Mode*)

`x` for **delete** current character.

`10` + `x` for delete 10 characters.

`r` for **replace** current character.

`R` for eating the words there.

`Ctrl^` + `v` can select a block. (*Visual Block Mode*)

## Finding

`/setState` typed in *Normal Mode* means find all "setState" in file.

And press `n` to the next.

## Replacing

`~` for changes the characters from Upper case to Lower case or Lower case to Upper case.

`5` + `~` for changes 5 character's Upper or Lower case where the cursor is over.

If there has a text:

```markdown
1 This is a test.
2 This is a test.
3 This is a Peach Peach.
4 This is a Peach.
5 This is a Peach.
6 This is a Peach.
7 This is a Peach.
8 This is a Peach.
9 This is a Peach.
10 This is a Peach.
11 This is a Peach.
```

For example, if you want to replace the word "Peach" to "Apple" through line 3 to line 10, you can press Escape and enter:

```vim
:3,10s/Peach/Apple
```

If you want change it globally:

```vim
:3,10s/Peach/Apple g
```

## Screen slip

"abd"
"abs"
"asca"
"cacaw"
"cawcaw"
"cawc"
