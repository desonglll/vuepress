---
title: 环境配置等笔记
date: 2022/06/16/ 10:27:46
categories: CS学习
tags: 
updated: 
type:
comments:
description: 
keywords:
top_img:
mathjax: true
katex:
aside:
aplayer:
highlight_shrink:
sticky: 
cover: 
---

- [用alias在.bash\_profile中创建别名](#用alias在bash_profile中创建别名)
  - [1. 使用touch创建.bash\_profile文件](#1-使用touch创建bash_profile文件)
  - [2. 使用alias命令给python3起别名](#2-使用alias命令给python3起别名)
  - [3. .bash\_profile source](#3-bash_profile-source)
- [修改.zshrc文件](#修改zshrc文件)
- [配置环境变量PATH](#配置环境变量path)
  - [macOS 12 要在.zprofile文件设置](#macos-12-要在zprofile文件设置)
  - [要配置的bin目录的地址](#要配置的bin目录的地址)
  - [添加以下代码](#添加以下代码)
  - [使生效](#使生效)
- [安装 homebrew 2022.07.13](#安装-homebrew-20220713)
  - [1. 设置USTC的镜像](#1-设置ustc的镜像)
  - [2. 安装homebrew](#2-安装homebrew)
  - [3. 添加Homebrew到环境变量](#3-添加homebrew到环境变量)
  - [有关报错](#有关报错)
    - [brew update的错误](#brew-update的错误)
  - [替换国内镜像源](#替换国内镜像源)
- [npm换源](#npm换源)
- [安装fishshell](#安装fishshell)
  - [使用Homebrew安装](#使用homebrew安装)
  - [讲fishshell设为默认Terminal](#讲fishshell设为默认terminal)
- [修改host文件提高Github访问速度](#修改host文件提高github访问速度)
- [安装Tree](#安装tree)
  - [在macOS里安装Tree](#在macos里安装tree)
    - [1. 写入"~/.bash\_profile"](#1-写入bash_profile)
    - [2. 通过Homebrew安装Tree](#2-通过homebrew安装tree)
- [Tree命令行参数](#tree命令行参数)
  - [1. tree命令行参数](#1-tree命令行参数)
  - [2. 常用的命令](#2-常用的命令)
    - [查看不同级别子目录和文件](#查看不同级别子目录和文件)
    - [目录结构信息输入保存到txt文件中](#目录结构信息输入保存到txt文件中)
- [Tools](#tools)
  - [Material UI](#material-ui)
- [在macOS使用npm安装yarn](#在macos使用npm安装yarn)
- [安装live-server](#安装live-server)
  - [1. 使用npm命令安装](#1-使用npm命令安装)
- [安装Android Studio](#安装android-studio)
  - [配置代理Proxy](#配置代理proxy)
- [yarn更换源](#yarn更换源)
- [npm更换源](#npm更换源)



```shell
# git clone加速
    git clone https://github.com/...
==> git clone https://gitclone.com/github.com/...
```



## 用alias在.bash_profile中创建别名

> 以Python3为例子

### 1. 使用touch创建.bash_profile文件

```shell
touch ~/.bash_profile
```

### 2. 使用alias命令给python3起别名

找到python3安装的路径`usr/local/bin/python3`

添加以下命令到`.bash_profile`

```shell
alias python='/usr/local/bin/python3'
```

### 3. .bash_profile source

```shell
source ~/.bash_profile
```

## 修改.zshrc文件

有的时候需要每次在启动Terminal之后手动source `.bash_profile`文件，所以可以修改.zshrc文件，让Terminal每次启动时都自动source

> 打开.zshrc文件并添加以下命令

```shell
vim ~/.zshrc
```

```shell
source ~/.bash_profile
```

## 配置环境变量PATH

### macOS 12 要在.zprofile文件设置

``````bash
nvim ~/.zprofile
``````

### 要配置的bin目录的地址

```shell
/Users/mikeshinoda/.config/nvim/sources/jdtls/jdt-language-server-latest/bin
```

### 添加以下代码

```shell
export PATH="$HOME/.config/nvim/sources/jdtls/jdt-language-server-latest/bin:$PATH"
```

### 使生效

```bash
source ~/.zprofile
```

## 安装 homebrew 2022.07.13

Homebrew的官方网站 [https://brew.sh/](https://brew.sh/)

### 1. 设置USTC的镜像

```shell
HOMEBREW_CORE_GIT_REMOTE=https://mirrors.ustc.edu.cn/homebrew-core.git
```

### 2. 安装homebrew

执行以下命令

```shell
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"
```

### 3. 添加Homebrew到环境变量

```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$whoiam/.zprofile
```

```shell
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 有关报错

#### brew update的错误

fatal: Could not resolve HEAD to a revision

```shell
rm -rf $(brew --repo homebrew/core)
brew tap homebrew/core
```

### 替换国内镜像源

https://blog.csdn.net/m0_50324291/article/details/108564732

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

### fatal: not in a git directory Error: Command failed with exit 128: git

[fatal: not in a git directory Error: Command failed with exit 128: git](https://blog.csdn.net/king14bhhb/article/details/126799622)

## npm换源

```shell
//换源
npm config set registry https://registry.npm.taobao.org
//配置后通过以下方法验证是否成功
npm config get registry
```



## 安装fishshell

Fishshell的官方网站 [https://fishshell.com/](https://fishshell.com/)

### 使用Homebrew安装

```shell
brew install fish
```

### 讲fishshell设为默认Terminal

打开`~/.bash_profile`并且添加`fish`

## 修改host文件提高Github访问速度

> Improve the speed of loading GitHub.

```shell
sed -i "/# GitHub520 Host Start/Q" /etc/hosts && curl

https://raw.hellogithub.com/hosts >> /etc/hosts
```

## 安装Tree

> tree命令可以以树形结构显示文件目录结构
> 它非常适合于我们给别人介绍我们的文件目录的组成框架
> 同时该命令使用适当的参数也可以将命令结果输出到文本文件中

### 在macOS里安装Tree

#### 1. 写入"~/.bash_profile"

mac下默认是没有 tree命令的，我们将命令写到~/.bash_profile里，以后直接运行tree命令就更方便了

Open "~/.bash_profile" file.

```shell
vim  ~/.bash_profile
```

Copy these codes to "~/.bash_profile" file.

```shell
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"
```

#### 2. 通过Homebrew安装Tree

```shell
brew install tree
```

## Tree命令行参数

### 1. tree命令行参数

- -a 显示所有文件和目录。
- -A 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
- -C 在文件和目录清单加上色彩，便于区分各种类型。
- -d 显示目录名称而非内容。
- -D 列出文件或目录的更改时间。
- -f 在每个文件或目录之前，显示完整的相对路径名称。
- -F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上`*` `/` `=` `@` `|`号。
- -g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
- -i 不以阶梯状列出文件或目录名称。
- -I 不显示符合范本样式的文件或目录名称。
- -l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
- -n 不在文件和目录清单加上色彩。
- -N 直接列出文件和目录名称，包括控制字符。
- -p 列出权限标示。
- -P 只显示符合范本样式的文件或目录名称。
- -q 用`?`号取代控制字符，列出文件和目录名称。
- -s 列出文件或目录大小。
- -t 用文件和目录的更改时间排序。
- -u 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。
- -x 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外。

当然你也可以直接通过`tree --help`查询

### 2. 常用的命令

#### 查看不同级别子目录和文件

使用`tree -L N`这个命令，只查看当前第N级的目录和文件
使用`tree -L 1`这个命令，只查看当前第一级的目录
使用`tree -L 2`这个命令，只查看当前第二级的目录和文件

#### 目录结构信息输入保存到txt文件中

```shell
tree > /home/index.text
```

会在指定目录下创建index.txt文件

## Tools

### Material UI

<https://mui.com>

## 在macOS使用npm安装yarn

```shell
sudo npm install --global yarn
```

## 安装live-server

### 1. 使用npm命令安装

```shell
sudo npm install -g live-server
```

## 安装Android Studio

### 配置代理Proxy

Select `Auto-detect proxy settings` and use this address:

`mirrors.opencas.org:80`

## yarn更换源

```bash
//查看当前源
yarn config get registry
//设置淘宝源或内网源
yarn config set registry https://registry.npm.taobao.org --global
//恢复源
yarn config set registry https://registry.yarnpkg.com --global

```

## npm更换源

```bash
查看当前源地址：
npm config get registry

切换源地址命令如下：

切换至淘宝源：
npm config set registry=http://registry.npm.taobao.org/

切换至npm源：
npm config set registry=http://registry.npmjs.org

临时使用：
npm --registry https://registry.npm.taobao.org install express
```

