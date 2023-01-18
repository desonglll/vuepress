---
title: neovim based on lua
date: 2022/12/08/ 00:22:51
discription: 
---

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [**Github** repository link](#github-repository-link)
- [Necessary to install](#necessary-to-install)
  - [Install Homebrew 2022.07.13](#install-homebrew-20220713)
    - [1. Set mirror by using USTC](#1-set-mirror-by-using-ustc)
    - [2. Install Homebrew](#2-install-homebrew)
    - [3. Add Homebrew to $PATH](#3-add-homebrew-to-path)
  - [Install yarn](#install-yarn)
  - [Install Neovim](#install-neovim)
- [Steps to go](#steps-to-go)
  - [:star:Clone this repository](#starclone-this-repository)
  - [:star:Install Packer](#starinstall-packer)
  - [:star:Install lazygit](#starinstall-lazygit)
  - [:star:Install LSP configuration](#starinstall-lsp-configuration)
    - [Python](#python)
    - [Clangd](#clangd)
    - [Jdtls](#jdtls)
  - [:star:Config](#starconfig)
- [Plugins](#plugins)
  - [p-vsnip](#p-vsnip)
  - [:star:Markdown Preview Enhanced](#starmarkdown-preview-enhanced)
  - [nvim-surround(YSW)](#nvim-surroundysw)
  - [:star:Preitter](#starpreitter)
  - [:star:Autoformat](#starautoformat)
  - [Install jedi](#install-jedi)
- [Others](#others)
  - [keymaps repeat](#keymaps-repeat)
  - [Setting workplace of neovim](#setting-workplace-of-neovim)

## **Github** repository link

:star:This is link: [`https://github.com/desonglll/neovim-lua`](https://github.com/desonglll/neovim-lua)

> Every :star: marked is necessary for installations.
>
> Make sure everything be installed!!!

## Necessary to install

### Install Homebrew 2022.07.13

Official wesite of Homebrew [https://brew.sh/](https://brew.sh/)

#### 1. Set mirror by using USTC

```shell
HOMEBREW_CORE_GIT_REMOTE=https://mirrors.ustc.edu.cn/homebrew-core.git
```

#### 2. Install Homebrew

```shell
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"
```

#### 3. Add Homebrew to $PATH

```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$your username$/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Install yarn

```shell
brew install yarn
```

### Install Neovim

```shell
brew install neovim
```

## Steps to go

### :star:Clone this repository

`git clone git@github.com:desonglll/neovim-lua.git ~/.config/nvim`

### :star:Install Packer

`git clone --depth 1 git@github.com:wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim`

### :star:Install lazygit

`brew install lazygit`

### :star:Install LSP configuration

#### Python

Install Python language server

`npm i -g pyright`

In `./lua/lsp-config.lua`

```lua
require'lspconfig'.pyright.setup{}
```

#### Clangd

[Installation for Clangd](https://clangd.llvm.org/installation.html)

In `./lua/lsp-config.lua`

```lua
require'lspconfig'.clangd.setup{}
```

#### Jdtls

```lua
-- Official download page: http://download.eclipse.org/jdtls/snapshots/?d
require('lspconfig')['jdtls'].setup{
    on_attach = on_attach,
    cmd = {
      "jdtls",
      -- path to jdt-language-server-latest bin directory.
      '$HOME/.config/nvim/sources/jdtls/jdt-language-server-latest/bin',
      "~/.config/nvim/sources/jdtls/jdt-language-server-latest/bin",
    },
    single_file_support = true,
}
```

```.zprofile
# .zprofile

export PATH=$(npm prefix -g)/bin:$PATH

export PATH="/Users/mikeshinoda/.local/lib/node_modules/typescript-language-server/lib:$PATH"
export PATH="/opt/homebrew/bin/pylsp$PATH"

export PATH="/Users/mikeshinoda/.config/nvim/sources/jdtls/jdt-language-server-latest/bin:$PATH"
export PATH="$HOME/.config/nvim/sources/lsp-server/sumneko_lua/extension/server/bin:$PATH"
```

### :star:Config

press `nvim` and `:PackerSync` to sync.

## Plugins

### p-vsnip

This command means setting vsnip's default directory.

```lua
vim.g['vsnip_snippet_dir'] = '~/.config/nvim/.vsnip'
```

### :star:Markdown Preview Enhanced

```shell
cd ~/.local/share/nvim/site/pack/packer/start/
git clone https://github.com/iamcco/markdown-preview.nvim.git
cd markdown-preview.nvim
yarn install
yarn build
```

Using yarn to install.

### nvim-surround(YSW)

```txt
2.1. The Basics                                         *nvim-surround.basics*

The primary way of adding a new pair to the buffer is via the normal-mode *ys*
operator, which stands for "you surround". It can be used via
`ys{motion}{char}`, which surrounds a given {motion} with a delimiter pair
associated with {char}. For example, `ysa")` means "you surround around quotes
with parentheses".

In all of the following examples, the `*` denotes the cursor position:

    Old text                    Command         New text ~
    local str = H*ello          ysiw"           local str = "Hello"
    require"nvim-surroun*d"     ysa")           require("nvim-surround")
    char c = *x;                ysl'            char c = 'x';
    int a[] = *32;              yst;}           int a[] = {32};

Furthermore, there are insert-mode *<C-g>s* and visual-mode *S* mappings, that
add the delimiter pair around the cursor and visual selection, respectively.
In all of the following examples, we will use `|` to demarcate the start and
end of a visual selection:

    Old text                    Command         New text ~
    local str = *               <C-g>s"         local str = "*"
    local tab = *               <C-g>s}         local str = {*}
    local str = |some text|     S'              local str = 'some text'
    |div id="test"|</div>       S>              <div id="test"></div>

To delete a delimiter pair, use the *ds* operator, which stands for "delete
surround". It is used via `ds[char]`, deleting the surrounding pair associated
with {char}. For example, `ds)` means "delete surrounding parentheses".

    Old text                    Command         New text ~
    local x = ({ *32 })         ds)             local x = { 32 }
    See ':h h*elp'              ds'             See :h help
    local str = [[Hell*o]]      ds]             local str = [Hello]

To change a delimiter pair, use the *cs* operator, which stands for "change
surround". It is used via `cs{target}{replacement}`, changing the surrounding
pair associated with {target} to a pair associated with {replacement}. For
example, `cs'"` means "change the surrounding single quotes to double quotes".

    Old text                    Command         New text ~
    '*some string'              cs'"            "some string"
    use<*"hello">               cs>)            use("hello")
    `some text*`                cs`}            {some text}

--------------------------------------------------------------------------------
```

### :star:Preitter

```shell
cd /Users/mikeshinoda/.local/share/nvim/site/pack/packer/start/vim-prettier.git && yarn install
```

### :star:Autoformat

First, install `pynvim`.

```shell
python3 -m pip install pynvim
```

### Install jedi

```bash
pip3 install jedi
```

## Others

### keymaps repeat

In command line: `verbose map <key>` can see mapping of `<key>`.

### Setting workplace of neovim

```lua
vim.opt.runtimepath:append("$HOME/.config/nvim/sources/treesitter")
```
