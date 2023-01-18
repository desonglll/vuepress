---
title: Github相关的命令
date: 2022/09/26/ 15:29:12
description: 
---

- [Github相关](#github相关)
  - [GIT 查看/修改用户名和邮箱地址](#git-查看修改用户名和邮箱地址)
    - [用户名和邮箱地址的作用](#用户名和邮箱地址的作用)
    - [查看用户名和邮箱地址](#查看用户名和邮箱地址)
    - [配置用户名和邮箱地址](#配置用户名和邮箱地址)
  - [配置SSH](#配置ssh)
    - [一、生成SSH Key](#一生成ssh-key)
    - [二、添加公钥到你的远程仓库（github）](#二添加公钥到你的远程仓库github)
      - [1 、查看你生成的公钥](#1-查看你生成的公钥)
      - [2、添加公钥到远程仓库](#2添加公钥到远程仓库)
      - [3、查看 ssh文件是否配置成功](#3查看-ssh文件是否配置成功)
    - [三、修改git的remote url](#三修改git的remote-url)
      - [1、查看当前的 remote url](#1查看当前的-remote-url)
      - [2、复制远程仓库的ssh链接](#2复制远程仓库的ssh链接)
      - [3、修改git的remote url](#3修改git的remote-url)
  - [Github提交命令](#github提交命令)
  - [合并远程分支到本地](#合并远程分支到本地)
  - [切换分支](#切换分支)
  - [查看文件差异](#查看文件差异)
  - [添加文件到暂缓区](#添加文件到暂缓区)
  - [macOS的.gitignore文件](#macos的gitignore文件)
  - [Deploy.sh](#deploysh)

## Github相关

### GIT 查看/修改用户名和邮箱地址

#### 用户名和邮箱地址的作用

用户名和邮箱地址是本地git客户端的一个变量，不随git库而改变。

每次commit都会用用户名和邮箱纪录。

github的contributions统计就是按邮箱来统计的。

#### 查看用户名和邮箱地址

```bash
git config user.name
git config user.password
git config user.email
```

#### 配置用户名和邮箱地址

```bash
git config --global user.name "desonglll" && git config --global user.password "Lindesong7758?" && git config --global user.email "lindesong666@163.com"
```

### 配置SSH

#### 一、生成SSH Key

```bash
ssh-keygen -t rsa -C "lindesong666@163.com"
```

上述操作执行完毕后，在 `~/.ssh/` 目录会生成 `XXX-rsa` (私钥)和 `XXX-rsa.pub` (公钥)

#### 二、添加公钥到你的远程仓库（github）

##### 1 、查看你生成的公钥

```shell
cat ~/.ssh/id_rsa.pub
```

这里会把公钥显示出来，我们把这段内容复制出来。

##### 2、添加公钥到远程仓库

登陆你的github帐户 -> 点击你的头像，然后点击 `Settings` -> 左栏点击 `SSH and GPG keys` -> 点击 `New SSH key`

然后将复制的公钥内容，粘贴进 `Key` 文本域内。 `title` 域，自己随便起个名字，建议与电脑位置或作用相关的名字，以为你今后可能会新增或者删除ssh，取个好理解的名字也知道他是个哪台电脑的。

点击 `Add SSH key` 

##### 3、查看 ssh文件是否配置成功

```shell
ssh -T git@github.com
```

 `输出： Hi danygitgit! You've successfully authenticated, but GitHub does not provide shell access.`

恭喜你，你的设置已经成功了

#### 三、修改git的remote url

如果之前添加的是 `HTTPS` 协议的github仓库地址，那么每次push或者pull仍然需要密码，所以，我们需要将其修改为 `ssh` 协议的，这样，就不需要这么麻烦了。

那么我们应该怎么办呢？

##### 1、查看当前的 remote url

首先进入本地仓库，右键 -> `Git Bash Here`

```shell
 git remote -v
```

```shell
输出： origin https://github.com/danygitgit/document-library.git (fetch)
输出： origin https://github.com/danygitgit/document-library.git (push)
```

如果是以上的结果那么说明此项目是使用 `https` 协议进行访问的（如果地址是git开头则表示是 `git` 协议）

##### 2、复制远程仓库的ssh链接

登陆你的远程仓库，在上面可以看到你的ssh协议相应的url，类似：

`git@github.com:desonglll/codes.git`

复制此ssh链接。

##### 3、修改git的remote url

方法：

修改命令

```shell
git remote origin set-url [url]
```

先删后加

```shell
git remote rm origin
```

```shell
git remote add origin [url]
```

### Github提交命令

```shell
echo "README" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:desonglll/codes.git
git push -u origin main
# git push -u origin main -f
```

### 合并远程分支到本地

```shell
git merge origin
```

### 切换分支

```bash
git checkout -b xxx
git branch -M main
```

> git checkout xxx是指切换到xxx（用local区的xxx替换disk区文件），-b意味着branch，即创建新分支，这条指令合起来意思是创建并切换到xxx

### 查看文件差异

```bash
# 创建暂缓区
git init
# 查看暂存区与disk区文件的差异
git diff
```

### 添加文件到暂缓区

```bash
# 将xxx文件添加到暂存区
git add xxx

# 将暂存区内容添加到local区的当前分支中
git commit -m "update"

# 将local区的LocalBranchName分支推送到RemoteHostName主机的同名分支
# （若加-f表示无视本地与远程分支的差异强行push）
git push <RemoteHostName> <LocalBranchName>

# 同上，不过改成从远程主机下载远程分支并与本地同名分支合并
git pull <RemoteHostName> <RemoteBranchName>
```

```bash
git rebase xxx
```

> 假设当前分支与xxx分支存在共同部分common，该指令用xxx分支包括common在内的整体替换当前分支的common部分（原先xxx分支内容为common->diversityA，当前分支内容为common->diversityB，执行完该指令后当前分支内容为common->diversityA->diversityB）

```bash
# 不加-D表示创建新local分支xxx，加-D表示强制删除local分支xxx
git branch -D xxx
```

### macOS的.gitignore文件

```.gitignore
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk
```

### Deploy.sh

```shell
# Echo time information to Changelog file.
time=$(date "+%Y-%m-%d %H:%M:%S")
# echo -e "\nLast updated by **`whoami`** at: "${time} >> "README.md"

# github deploy

git init
git add .
git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
git branch -M main
# git remote add origin
git push -u origin main -f
```

