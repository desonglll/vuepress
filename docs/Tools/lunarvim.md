# Neovim&LunarVim

> https://www.mintimate.cn/2023/01/10/guideForLunarvim/

[Neovim](https://github.com/neovim/neovim)最近几年的热度十分高，甚至我这个Vim用户，都开始转向使用Neovim了。相比之前使用Vim（尤其是Vim7.x之前，还未使用异步任务时），Neovim明显更快。同时Neovim使用[Lua](https://www.lua.org/)脚本化语言进行配置，确实更加方便。

但是手动配置Neovim，总归有点麻烦。尤其是刚转向Neovim，对Lua的语法还不是很熟悉的情况下，怎么才能快速配置，让它先跑起来呢？

答案很简单，就是用别人整合好的配置。网上有非常多别人整合好的GitHub仓库包，这里介绍一个特殊的项目：[LunarVim](https://www.lunarvim.org/)

通过LunarVim的配置，可以让你的Neovim瞬间在Linux服务器上变身成为IDE。

## LunarVim

其实，LunarVim的官网就有总结性的描述：

```
Interstellar Development Experience
The IDE that's too cool for planet Earth.
A stellar Neovim experience.
The universe's most lightweight IDE.
……
Copy
```

[![官网描述](https://imagehost.mintimate.cn/post_guideForLunarvim/lunarvimWebsite.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/lunarvimWebsite.jpg)

[官网描述](https://imagehost.mintimate.cn/post_guideForLunarvim/lunarvimWebsite.jpg)



这个可能是使用Vim/Neovim，在没有安装插件时候的效果：
[![使用vim或neovim未安装插件](https://imagehost.mintimate.cn/post_guideForLunarvim/lunarvimWebsite.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/lunarvimWebsite.jpg)

[使用vim或neovim未安装插件](https://imagehost.mintimate.cn/post_guideForLunarvim/lunarvimWebsite.jpg)



这个就是使用LunarVim的效果：
[![使用lvim进行编辑](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimEditShell.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimEditShell.jpg)

[使用lvim进行编辑](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimEditShell.jpg)



不过，安装起来还是有点麻烦，主要的原因：

- 国内网络环境GitHub无法连接问题

本文就尽可能帮大家解决啦。

# 辅助视频

部分东西，还是视频比较清晰。

这里做个视频，主要内容：

- 如何安装Nvim和
- 如何卸载Nvim和Lvim
- Lvim的部分功能展示
- 使用建议

<iframe class="bilibili" src="https://player.bilibili.com/player.html?aid=350280775&amp;bvid=BV1hR4y1Y7CS&amp;cid=966982090&amp;page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="box-sizing: border-box; position: relative; width: 650.125px; height: 40em; max-width: 50em;"></iframe>

嘿嘿，做教程视频不易（B站根本不会推荐引流），请务必**一键三连**嗷～B站视频地址：https://www.bilibili.com/video/BV1hR4y1Y7CS

# 支持创作

制作教程不易，如果热心的小伙伴，想支持创作，可以加入我们的「爱发电」电圈：

- Mintimate的电圈: https://afdian.net/a/mintimate

当然，也欢迎在B站或YouTube上关注我们：

- Bilibili: https://space.bilibili.com/355567627
- YouTube: https://www.youtube.com/@mintimate708/featured

更多：

- [Mintimate's Blog 关于页面](https://www.mintimate.cn/about)

# 准备工具

其实就是个Shell工具，不管是Linux还是macOS都可以安装。（Windows的话，就没试过了～～）

> Windwos的Neovim，LunarVim也是支持；但是我用Windows很少，就算用…… 我一般也是直接用Vscode作为文本编辑。

[![我使用的镜像](https://imagehost.mintimate.cn/post_vimYouCompleteMe/35b7159441ad659a94cfd9bede0be55c.png)](https://imagehost.mintimate.cn/post_vimYouCompleteMe/35b7159441ad659a94cfd9bede0be55c.png)

[我使用的镜像](https://imagehost.mintimate.cn/post_vimYouCompleteMe/35b7159441ad659a94cfd9bede0be55c.png)



如果你并没有Linux设备，需要一个Linux设备来练手，强烈推荐：

- [腾讯云轻量应用服务器Lighthouse](https://curl.mintimate.cn/1Hs6oSjemjg)
- [腾讯云轻量应用服务器学生优惠](https://curl.mintimate.cn/1Hs6pWtbEZz)

另外，为大家争取到优惠*(੭ˊᵕˋ)੭ଘ：

- [本站专属腾讯云秒杀链接（可低价购买轻量应用服务器）](https://curl.mintimate.cn/1Hs6qNOVjJo)

# 安装用户

Lunarvim是可以给root和非root用户安装的。但是用root用户操作，终归有点不安全。

建议给非root用户安装。比如：玩一般会在服务器上创建我自己的用户：

```
# 当前root用户
useradd -s /bin/zsh -m mintimate
# 设置用户密码
passwd mintimate
Copy
```

之后，根据自己喜好，决定是否添加到sudo权限内。并切换到用户，进行后续neovim和lunarvim的安装操作。

# Neovim安装

首先我们需要安装Neovim，安装的方法很多：

- 软件包管理器安装
- 软件包安装
- 编译安装

没有说那种方法就最好，但是如果说麻烦…… 还是编译安装麻烦点，但是目前arm架构的Linux，目前只能用编译安装。

好在，编译安装的Neovim兼容性最好。

## 软件包管理器

你可以使用软件包管理器进行安装：

```
# Debian(include Ubuntu)
apt install neovim
# CentOS
yum install neovim
# macOS(需要Homebrew支持)
brew install neovim
Copy
```

[![macOS安装Neovim](https://imagehost.mintimate.cn/post_guideForLunarvim/installNvimByHomebrew.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/installNvimByHomebrew.jpg)

[macOS安装Neovim](https://imagehost.mintimate.cn/post_guideForLunarvim/installNvimByHomebrew.jpg)



这样就安装完成了，并且版本是`V0.8.2`：

```
mintimate at MacBookPro in ~
$ nvim --version
NVIM v0.8.2
Build type: Release
LuaJIT 2.1.0-beta3
Compiled by brew@Ventura

Features: +acl +iconv +tui
See ":help feature-compile"

   system vimrc file: "$VIM/sysinit.vim"
  fall-back for $VIM: "/usr/local/Cellar/neovim/0.8.2/share/nvim"

Run :checkhealth for more info
Copy
```

[![Neovim版本](https://imagehost.mintimate.cn/post_guideForLunarvim/showVersion_macOS.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/showVersion_macOS.jpg)

[Neovim版本](https://imagehost.mintimate.cn/post_guideForLunarvim/showVersion_macOS.jpg)



但是，有时候，软件包管理器若安装的Neovim版本过低，就需要下载软件包安装或者手动编译安装了。

## 软件包

当然，有时候软件包管理器安装的Neovim过低，我们可以下载软件包安装。[Neovim发布地址](https://github.com/neovim/neovim/releases)有提供Debian和CentOS的软件包：
[![Neovim发布包](https://imagehost.mintimate.cn/post_guideForLunarvim/softwarePackage.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/softwarePackage.jpg)

[Neovim发布包](https://imagehost.mintimate.cn/post_guideForLunarvim/softwarePackage.jpg)



举个例子，我们在腾讯云的Debian/Ubuntu发行版本上进行安装：

```
# 下载发行版本
wget https://github.com/neovim/neovim/releases/download/stable/nvim-linux64.deb
# 使用dpkg包管理器安装
dpkg -i nvim-linux64.deb
Copy
```

[![Neovim版本](https://imagehost.mintimate.cn/post_guideForLunarvim/showVersion_Linux.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/showVersion_Linux.jpg)

[Neovim版本](https://imagehost.mintimate.cn/post_guideForLunarvim/showVersion_Linux.jpg)



当然，不支持Arm架构，所以在树莓派上安装是不行的：
[![Neovim安装失败](https://imagehost.mintimate.cn/post_guideForLunarvim/installNeovimFailInRaspberry.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/installNeovimFailInRaspberry.jpg)

[Neovim安装失败](https://imagehost.mintimate.cn/post_guideForLunarvim/installNeovimFailInRaspberry.jpg)



那么？如何在树莓派上安装呢？

## 编译安装

上文看到，无法在树莓派上使用软件包管理器或者软件包安装。这里我们就来介绍如何编译安装。

首先，克隆项目，通常我们使用稳定版本：

```
# 克隆项目
git clone https://github.com/neovim/neovim
# 进入项目内
cd neovim
# 切换分支为稳定版本
git checkout stable
Copy
```

[![Neovim项目克隆和切换分支](https://imagehost.mintimate.cn/post_guideForLunarvim/switchBranchToStable.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/switchBranchToStable.jpg)

[Neovim项目克隆和切换分支](https://imagehost.mintimate.cn/post_guideForLunarvim/switchBranchToStable.jpg)



之后，使用cmake进行编译：

```
make CMAKE_BUILD_TYPE=RelWithDebInfo
Copy
```

[![项目cmake编译](https://imagehost.mintimate.cn/post_guideForLunarvim/makeCMAKE_BUILD_TYPE.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/makeCMAKE_BUILD_TYPE.jpg)

[项目cmake编译](https://imagehost.mintimate.cn/post_guideForLunarvim/makeCMAKE_BUILD_TYPE.jpg)



之后，使用命令进行安装：

```
sudo make install
Copy
```

[![make install](https://imagehost.mintimate.cn/post_guideForLunarvim/makeInstallInNeovim.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/makeInstallInNeovim.jpg)

[make install](https://imagehost.mintimate.cn/post_guideForLunarvim/makeInstallInNeovim.jpg)



通常情况下，这样就安装完成了：
[![neovim --version](https://imagehost.mintimate.cn/post_guideForLunarvim/neovimVersionRaspberry.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/neovimVersionRaspberry.jpg)

[neovim --version](https://imagehost.mintimate.cn/post_guideForLunarvim/neovimVersionRaspberry.jpg)



> 如果你想卸载neovim，可以在当前目录下执行：`sudo cmake --build build/ --target uninstall`

# LunarVim卸载

在安装之前，先教教大家如何卸载。以便在无法使用的情况下或者不需要的情况下，知道如何卸载。

LunarVim安装不需要root权限，并且是对原有的neovim进行封装，所以只是会有一些仓库文件。最棒的是，它的安装非常合规：

- `$HOME/.config/lvim`：lvim的个性化配置文件；
- `$HOME/.local/bin/lvim`：lvim的执行文件；
- `$HOME/.cache/lvim`：lvim的缓存目录；
- `$HOME/.config/lvim.old`：可能存在的lvim个性化文件备份

[![Lvim的文件](https://imagehost.mintimate.cn/post_guideForLunarvim/rmLvim.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/rmLvim.jpg)

[Lvim的文件](https://imagehost.mintimate.cn/post_guideForLunarvim/rmLvim.jpg)



所以，卸载LunarVim：

```
rm -rf ~/.config/lvim ~/.local/share/lunarvim ~/.local/bin/lvim ~/.config/lvim.old
Copy
```

这样就卸载好了，大道至简～～～

# LunarVim安装

安装Lunarvim的方法，这里分两种：

- 官方脚本: 官方的脚本，直接安装上最新的Lunarvim。当时需要连接GitHub，如果网络环境不佳，建议看看`手动脚本`。
- 手动脚本: 使用Gitee替换LunarVim的主项目更新地址，但是一些附属的插件和初始化步骤还是会从GitHub进行抓取。如果改方法还是卡在初始化，可以下载我预打包的文件进行配合。

## 官方脚本

我们的网络连接GitHub没有问题的话，用官方的脚本还是很方便的：

```
LV_BRANCH='release-1.2/neovim-0.8' bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
Copy
```

[![官方脚本安装](https://imagehost.mintimate.cn/post_guideForLunarvim/installLunarvimOfficial.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/installLunarvimOfficial.jpg)

[官方脚本安装](https://imagehost.mintimate.cn/post_guideForLunarvim/installLunarvimOfficial.jpg)



如果网络有问题，正常会有一些报错，比如：无法校验插件完整

```
[ERROR]: Unable to verify plugins, make sure to manually run ':PackerSync' when starting lvim for the first time.
Copy
```

[![无法校验插件](https://imagehost.mintimate.cn/post_guideForLunarvim/unableToVerifyPlugins.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/unableToVerifyPlugins.jpg)

[无法校验插件](https://imagehost.mintimate.cn/post_guideForLunarvim/unableToVerifyPlugins.jpg)



这个解决方法很简单，当时能不能有效，取决于网络能不能连接GitHub上插件的各个库。因为造成这样的原因，是Lunarvim基于[packer](https://github.com/wbthomason/packer.nvim)进行插件的管理（安装、更新）。而它就是同步下载GitHub上各个项目的仓库地址。

如果已经解决网络问题，或者想重新尝试。可以在Lunarvim激活时(lvim命令)，使用packer的`:PackerSync`命令进行更新。

首先，使用`lvim`命令进入Lunarvim，如果实现没有配置环境变量，通常找不到命令：
[![找不到命令](https://imagehost.mintimate.cn/post_guideForLunarvim/commandNotFind.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/commandNotFind.jpg)

[找不到命令](https://imagehost.mintimate.cn/post_guideForLunarvim/commandNotFind.jpg)



我们需要把当前用户“家目录”下的`.local/bin`添加到环境变量：

```
# 如果你使用bash
echo "export PATH=\$PATH:\$HOME.local/bin" >> ~/.zshrc
# 如果你使用zsh
echo "export PATH=\$PATH:\$HOME.local/bin" >> ~/.zshrc
Copy
```

之后，重载环境变量，应该就可以使用`lvim`命令：
[![添加到环境变量](https://imagehost.mintimate.cn/post_guideForLunarvim/addLocalPath.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/addLocalPath.jpg)

[添加到环境变量](https://imagehost.mintimate.cn/post_guideForLunarvim/addLocalPath.jpg)



使用命令：

```
lvim
Copy
```

进入Luarnvim，会出现错误：
[![lvim错误](https://imagehost.mintimate.cn/post_guideForLunarvim/initErrorInLvim.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/initErrorInLvim.jpg)

[lvim错误](https://imagehost.mintimate.cn/post_guideForLunarvim/initErrorInLvim.jpg)



这个时候，其实是处于`命令模式`,我们输入：

```
:PackerSync
Copy
```

进行手动初始化（插件拉取载入）：
[![拉去载入](https://imagehost.mintimate.cn/post_guideForLunarvim/restartInit.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/restartInit.jpg)

[拉去载入](https://imagehost.mintimate.cn/post_guideForLunarvim/restartInit.jpg)



嗯…… 如果网络还是无法连接GitHub……。应该还是一堆的报错：
[![拉取错误](https://imagehost.mintimate.cn/post_guideForLunarvim/fullOfError.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/fullOfError.jpg)

[拉取错误](https://imagehost.mintimate.cn/post_guideForLunarvim/fullOfError.jpg)



这个时候，也不用慌。实在无法解决，可以参考`手动脚本`的下载预编译库进行替换初始化。

## 手动脚本

首先介绍一下脚本的原理：

- 替换`lunarvim.git`为Gitee镜像源。
- 汉化一些步骤提示
- 使用基于CloudFare提供的网络CDN进行附属仓库的下载(为了不影响后续服务器上Git，在安装完后，会重置会默认。如果手动终止脚本运行，记得看看下文的恢复Git重定向)

安装脚本：

```
bash <(curl -s https://api.host.mintimate.cn/fileHost/public/download/NMAd)
Copy
```

[![安装开始](https://imagehost.mintimate.cn/post_guideForLunarvim/autoShellStart.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/autoShellStart.jpg)

[安装开始](https://imagehost.mintimate.cn/post_guideForLunarvim/autoShellStart.jpg)



[![安装成功](https://imagehost.mintimate.cn/post_guideForLunarvim/autoShellFinish.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/autoShellFinish.jpg)

[安装成功](https://imagehost.mintimate.cn/post_guideForLunarvim/autoShellFinish.jpg)



如果你卡在`启用CloudFare加速`步骤：
[![卡在加速步骤](https://imagehost.mintimate.cn/post_guideForLunarvim/waitingCloudFare.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/waitingCloudFare.jpg)

[卡在加速步骤](https://imagehost.mintimate.cn/post_guideForLunarvim/waitingCloudFare.jpg)



可以按`Ctril+C`终止进程，并**恢复Git**：

```
git config --global --unset url."https://fast.github.flyinbug.top/mintimate/https://github.com/".insteadOf "https://github.com/"
Copy
```

并使用我提前打包的镜像文件替换自己的文件。

如果觉得有用或者需要帮助，可以联系我哦：

- [支持创作](https://www.mintimate.cn/2023/01/10/guideForLunarvim/#支持创作)

### 镜像文件替换

如果使用`官方脚本`或者`手动脚本`**出现任何问题**。可以使用我预先安装打包的文件进行替换，没什么特别的，就是：

- 提前克隆所有LunarVim所有插件库（共45个）
- 打包并上传

我会不定期更新，下载地址：
https://alist.flyinbug.top/PublicShare/LunarvimStatic/latest

[![获取镜像文件](https://imagehost.mintimate.cn/post_guideForLunarvim/mirrorFile.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/mirrorFile.jpg)

[获取镜像文件](https://imagehost.mintimate.cn/post_guideForLunarvim/mirrorFile.jpg)



之后，在终端依次执行：

```
# 进入仓库文件存放地址
cd ~/.local/share
# 下载镜像文件
wget -O lunarvim.tar-gz [地址存在Token，请自行复制]
# 删除原本未克隆成功的仓库
rm -rf lunarvim
# 解压文件替换
tar -xf lunarvim.tar-gz
# 归属文件为当前用户
chown -R `whoami`:`whoami` lunarvim
Copy
```

[![获取镜像文件](https://imagehost.mintimate.cn/post_guideForLunarvim/getMirror.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/getMirror.jpg)

[获取镜像文件](https://imagehost.mintimate.cn/post_guideForLunarvim/getMirror.jpg)



之后，编辑文件，如果出现[nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)库的**警告**(这个其实是警告，实际上是LSP不工作，但是Lvim还是可以用的)，比如：
[![nvim-treesitter库的警告](https://imagehost.mintimate.cn/post_guideForLunarvim/needReloadTreesitter.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/needReloadTreesitter.jpg)

[nvim-treesitter库的警告](https://imagehost.mintimate.cn/post_guideForLunarvim/needReloadTreesitter.jpg)



解决方法很简单啦: 更新Packer、更新编译器：

```
:PackerSync
:TSUpdate
Copy
```

[![lvim内执行:PackerSync](https://imagehost.mintimate.cn/post_guideForLunarvim/updateByPackerSync.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/updateByPackerSync.jpg)

[lvim内执行:PackerSync](https://imagehost.mintimate.cn/post_guideForLunarvim/updateByPackerSync.jpg)


[![lvim内执行:TSUpdate](https://imagehost.mintimate.cn/post_guideForLunarvim/updateByTSUpdate.jpg)lvim内执行:TSUpdate](https://imagehost.mintimate.cn/post_guideForLunarvim/updateByTSUpdate.jpg)



### Lvim初始化

现在，我们进行初始化更新。

可以在Lunarvim激活时(lvim命令)，`:LvimUpdate`命令进行更新。

首先，使用`lvim`命令进入Lunarvim，如果实现没有配置环境变量，通常找不到命令：
[![找不到命令](https://imagehost.mintimate.cn/post_guideForLunarvim/commandNotFind.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/commandNotFind.jpg)

[找不到命令](https://imagehost.mintimate.cn/post_guideForLunarvim/commandNotFind.jpg)



我们需要把当前用户“家目录”下的`.local/bin`添加到环境变量：

```
# 如果你使用bash
echo "export PATH=\$PATH:\$HOME.local/bin" >> ~/.zshrc
# 如果你使用zsh
echo "export PATH=\$PATH:\$HOME.local/bin" >> ~/.zshrc
Copy
```

之后，重载环境变量，应该就可以使用`lvim`命令：
[![添加到环境变量](https://imagehost.mintimate.cn/post_guideForLunarvim/addLocalPath.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/addLocalPath.jpg)

[添加到环境变量](https://imagehost.mintimate.cn/post_guideForLunarvim/addLocalPath.jpg)



更新操作：
[![更新](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimUpdate.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimUpdate.jpg)

[更新](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimUpdate.jpg)



# Lvim配置文件

现在我们来看看Lvim(LunarVim)的配置文件：
首先，Lvim的配置，官方为了不与Neovim的配置文件冲突。Lvim的配置文件为：

- $HOME/.config/lvim/config.lua

配置在原有neovim的基础上，增加了Lvim的个性化配置。
[![Lvim的配置](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimConfig.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimConfig.jpg)

[Lvim的配置](https://imagehost.mintimate.cn/post_guideForLunarvim/lvimConfig.jpg)



你可以添加一些vim或者neovim的配置,比如：

```
vim.opt.backup = false -- 创建配置文件
vim.opt.clipboard = "unnamedplus" -- 允许属于unnamedplus插件，共享系统剪贴板
vim.opt.cmdheight = 2 -- 更多的空间展示neovim的信息（默认：1）
vim.opt.fileencoding = "utf-8" -- 设置UTF-8编码
vim.opt.number = true -- 设置行表
vim.opt.relativenumber = false -- 设置相对行标
vim.opt.scrolloff = 8 -- 设置光标发生滚动的距离值
vim.opt.sidescrolloff = 8 -- 设置光标和边距发生滚动的距离值
Copy
```

当然，还有一些Lvim的专属配置，比如：https://www.lunarvim.org/docs/configuration/keybindings

# Lvim使用

简单介绍一下Lvim的使用吧。毕竟官方的使用指南是完完整整的一个文档，一篇博客，能简单入门就很不错了。

首先是“文件管理树”：[nvim-tree](https://github.com/nvim-tree/nvim-tree.lua)

Lvim默认安装了nvim-tree插件，并且使用`<leader>`和`e`键进行绑定（`<leader>`键默认为空格）。

在Lvim成功配置的情况下，可以按上述组合键，呼出“文件管理树”，配合鼠标和键盘进一步实现IDE的效果：
[![Lvim的tree](https://imagehost.mintimate.cn/post_guideForLunarvim/tree.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/tree.jpg)

[Lvim的tree](https://imagehost.mintimate.cn/post_guideForLunarvim/tree.jpg)



其次是内置终端：[ToggleTerm](https://github.com/akinsho/toggleterm.nvim)

使用`Ctrl+4`可以快速呼出：
[![Lvim的toggleterm](https://imagehost.mintimate.cn/post_guideForLunarvim/toggleterm.jpg)](https://imagehost.mintimate.cn/post_guideForLunarvim/toggleterm.jpg)

[Lvim的toggleterm](https://imagehost.mintimate.cn/post_guideForLunarvim/toggleterm.jpg)



最后，就是自带的LSP了。Lvim使用[treesitter](https://github.com/nvim-treesitter/nvim-treesitter)进行语法提升并下载支持。

所以在编辑文件，Lvim就会自动下载，如果不需要或者想自定义，可以关闭配置文件内的：

```
-- treesitter自动下载
lvim.builtin.treesitter.auto_install = true
-- LSP自动下载
lvim.lsp.automatic_servers_installation = true
Copy
```

具体可以参考：https://www.lunarvim.org/docs/languages

# Q&A

其实问题基本都是网络问题比较多。目前先留个空白目录吧，到时候看看大家遇到什么问题，做个追加～～

如果小伙伴对Vim的基础命令不熟悉，可以参考教程：

- [终端文本编辑神器–Vim命令详解。如何配置Vim以及Vim插件？](https://www.mintimate.cn/2021/08/25/vim/)
- [12分钟入门文本编辑利器Vim，并学会如何安装Vim插件（Windows/macOS/Linux）](https://www.bilibili.com/video/BV1kq4y197t4)

# END

到此，Lvim和它的“好朋友们”就安装并配置完成了。

你也可以配合ZSH，获得更好的Shell体验：

[![编辑ZSH配置文件](https://imagehost.mintimate.cn/post_vimYouCompleteMe/6c251f8f0728f52c86c5fb46bdb00431.png)](https://imagehost.mintimate.cn/post_vimYouCompleteMe/6c251f8f0728f52c86c5fb46bdb00431.png)

[编辑ZSH配置文件](https://imagehost.mintimate.cn/post_vimYouCompleteMe/6c251f8f0728f52c86c5fb46bdb00431.png)



[![ZSH](https://imagehost.mintimate.cn/post_vimYouCompleteMe/ced47f3ecebc263de383aa19b0c0db42.png)](https://imagehost.mintimate.cn/post_vimYouCompleteMe/ced47f3ecebc263de383aa19b0c0db42.png)

[ZSH](https://imagehost.mintimate.cn/post_vimYouCompleteMe/ced47f3ecebc263de383aa19b0c0db42.png)



参考教程：

- [Linux/Mac通过Oh-my-zsh配置Zsh插件，让你的终端更加强大且智能](https://www.mintimate.cn/2021/02/05/configZsh/)

------

有些人可能会说，用Vscode、IDEA之类的编辑器或者集成开发工具不好么？当然好，而且很方便；但是Neovim安装Lvim，是让你的neovim支持更多功能；**有时候，我们可能需要修改Python脚本内某些数据，直接在Lighthouse服务器上用Neovim就可以直接操作，亦或者直接编辑Nginx文件，还是挺方便的。**

多一个方法，多条路；可不是让你丢弃开发环境，全部使用neovim进行开发哦。

> 这篇文章这么长…… 会不会劝退很多人呢？那就先点赞、收藏，以后再看吧～～～

------