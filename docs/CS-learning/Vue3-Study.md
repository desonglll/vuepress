---
title: Vue3
date: 2022/12/19/ 01:15:13
discription: 
---

- [初始化](#初始化)
  - [创建项目](#创建项目)
  - [安装Element UI](#安装element-ui)
  - [CSS样式和预处理器](#css样式和预处理器)
    - [使用SASS](#使用sass)
    - [使用less](#使用less)
    - [CSS预处理器-ResetCSS](#css预处理器-resetcss)
    - [Font-awesome](#font-awesome)
  - [Axios和路由](#axios和路由)
    - [Axios](#axios)
    - [Router](#router)
    - [路由懒加载](#路由懒加载)
    - [异步组件加载](#异步组件加载)
- [Vue3基础](#vue3基础)
  - [Template](#template)
  - [语法糖](#语法糖)
  - [计算属性](#计算属性)
  - [侦听器](#侦听器)
    - [侦听器案例](#侦听器案例)
    - [深度监听](#深度监听)
  - [class类名的对象使用方式](#class类名的对象使用方式)
  - [class类名的数组使用方式](#class类名的数组使用方式)
  - [style样式的多种操作方式](#style样式的多种操作方式)
  - [条件渲染](#条件渲染)
    - [条件渲染v-if](#条件渲染v-if)
    - [条件渲染v-show](#条件渲染v-show)
  - [列表渲染v-for](#列表渲染v-for)
  - [数组更新检测](#数组更新检测)
  - [事件处理](#事件处理)
  - [事件修饰符](#事件修饰符)
  - [按键修饰符](#按键修饰符)
    - [按键别名](#按键别名)
    - [系统按键修饰符](#系统按键修饰符)
    - [`.exact` 修饰符](#exact-修饰符)
  - [鼠标按键修饰符](#鼠标按键修饰符)
  - [v-model表单控件的基本使用](#v-model表单控件的基本使用)
  - [父组件通过Prop传给子组件值](#父组件通过prop传给子组件值)
  - [子组件通过自定义事件向父组件传值](#子组件通过自定义事件向父组件传值)
  - [父组件访问子组件`$refs`](#父组件访问子组件refs)
  - [子组件访问父组件和根组件`$parent $root`](#子组件访问父组件和根组件parent-root)
    - [`$parent`](#parent)
    - [`$root`](#root)
  - [插槽](#插槽)
  - [组件之间的跨级通信`provide`和`inject`](#组件之间的跨级通信provide和inject)
  - [组合式API在setup()函数中定义以及使用变量](#组合式api在setup函数中定义以及使用变量)
  - [Router](#router-1)
    - [安装](#安装)
      - [npm](#npm)
      - [yarn](#yarn)
    - [使用](#使用)
      - [官方文档](#官方文档)
      - [Vue项目](#vue项目)
    - [带参数的动态路由匹配](#带参数的动态路由匹配)
    - [404NotFound](#404notfound)
    - [路由正则表达式匹配与重复参数](#路由正则表达式匹配与重复参数)
    - [嵌套路由](#嵌套路由)
    - [使用JavaScript实现页面跳转](#使用javascript实现页面跳转)
- [登陆页简单验证](#登陆页简单验证)

## 初始化

```bash
mkdir project
cd project
npm init -y
```

局部安装脚手架

```bash
cnpm i -D @vue/cli
```

### 创建项目

```bash
npx vue -V
npx vue create project-one
```

设置自动打开调试

```js
//vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //自动打开
    open: true,
    host: "localhost",
  },
});
```

### 安装Element UI

初始化**安装**

```bash
cnpm i element-ui -S
```

使用**ElementUI**

```js
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
```

```vue
<el-button type="primary">button</el-button>
<el-button type="info">button</el-button>
<el-button type="danger">button</el-button>
<el-button type="success">button</el-button>
```

### CSS样式和预处理器

#### 使用SASS

安装

```bash
cnpm install sass
cnpm install sass-loader
```

使用

```vue
<style lang="scss">
.hello {
  background: yellow;
  .el-button {
    color: red;
  }
}
</style><style lang="scss">
.hello {
  background: yellow;
  .el-button {
    color: red;
  }
}
</style>
```

#### 使用less

安装

```bash
cnpm i less
cnpm i less-loader
```

使用

```vue
<style lang="less">
.hello {
  background: yellow;
  .el-button {
    color: red;
  }
}
</style> 
```

#### CSS预处理器-ResetCSS

<https://meyerweb.com/eric/tools/css/reset/>

创建

> 在`assets/css`创建`reset.css`

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
```

使用

```vue
<style lang="scss">
@import url("./assets/css/reset.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

#### Font-awesome

<https://fontawesome.com.cn/>

安装

```bash
cnpm i -D font-awesome
```

使用

```js
//main.js
import "font-awesome/css/font-awesome.min.css";
```

```vue
<i class="fa fa-users"></i>
```

### Axios和路由

#### Axios

安装

```bash
cnpm i axios -S
```

使用

```js
//main.js
import axios from "axios";
//挂载到原型，可以在全局使用
Vue.prototype.axios = axios;
```

#### Router

安装

```bash
cnpm i vue-router@3.5.3 -S
```

使用

创建`src/router/index.js`

```js
//index.js
import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/home",
      //给到渲染的组件
      component: Home,
    },
  ],
  mode: "history",
});
```

渲染前挂载`main.js`

```js
//main.js
import router from "./router";
new Vue({
  router, //渲染前挂载一下
  render: (h) => h(App),
}).$mount("#app");
```

配置路由出口`App.vue`

```vue
<template>
  <div id="app">
    home
    <router-view></router-view>
    <!-- <Home /> -->
  </div>
</template>
```

#### 路由懒加载

```js
import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/home",
      //   component: Home,
      component: () => import("@/components/Home"),
    },
  ],
  mode: "history",
});
```

#### 异步组件加载

```js
component: (resolve) => require(["@/components/Home"], resolve),
```

## Vue3基础

### Template

```vue
<!-- App.vue -->
<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>
<template></template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

### 语法糖

```vue
<script lang="ts">
export default {
  data() {
    return {
      num: 0,
      uname: "mike",
      flag: 0,
      head: "<h2>Title</h2>",
      id: "tag1",
      src: "https://www.baidu.com",
      attributeName: "id",
      message: "hello world",
    };
  },
  methods: {
    changeName: function () {
      if (this.flag == 0) {
        this.uname = "mikeshinoda";
        this.flag = 1;
      } else {
        this.uname = "mike";
        this.flag = 0;
      }
    },
    changeColor: function () {
      if (this.flag == 0) {
        this.id = "tag2";
        this.flag = 1;
      } else {
        this.id = "tag1";
        this.flag = 0;
      }
    },
    countNum: function () {
      this.num + 1;
    },
    //每次都会重新计算
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
<template>
  <div>
    <!-- v-html: 让内容以html形式显示-->
    <p v-html="head"></p>
    <p>number: {{ num }}</p>
    <p>username: {{ uname }}</p>
    <!-- v-once: 当数据发生改变时，插值处的内容不会更新 -->
    <p v-once>v-once username: {{ uname }}</p>
    <button @click="changeName">changeName</button>
    <!-- v-bind: 动态的绑定属性的内容 -->
    <p v-bind:id="id">this is id</p>
    <el-button @click="changeColor">changeColor</el-button>
    <p><a v-bind:href="src">This is link</a></p>
    <!-- 使用Java script表达式 -->
    <p>{{ num + 1 }}</p>
    <p>{{ uname.split("").reverse().join("") }}</p>
    <!-- v-bind语法糖: -->
    <p :id="id">this is id</p>
    <!-- v-on: 用于监听DOM事件 -->
    <button v-on:click="changeName">changeName</button>
    <!-- v-on语法糖: -->
    <el-button @click="changeColor">changeColor</el-button>
    <!-- 动态参数 -->
    <!-- 动态属性 -->
    <p v-bind:[attributeName]="id">v-bind绑定</p>
    <button @click="attributeName = 'class'">改变属性</button>
    <!-- 计算属性 -->
    <p>{{ reverseMsg }}</p>
    <button @click="message = 'hello mikeshinoda'">改变Message</button>
  </div>
</template>

<style>
/* @import url("./assets/reste.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tag1 {
  color: blue;
}
#tag2 {
  color: red;
}
.tag1 {
  font-size: 30px;
}
</style>

```

### 计算属性

```js
// 计算属性computed
  //只要依赖值不变，那么不会重新计算(缓存)
  //计算属性将基于它们的响应依赖关系缓存
  //大大提高性能
  computed: {
    // reverseMsg: function () {
    //   return this.message.split("").reverse().join("");
    // },
    //每一个计算属性都包含一个getter和setter
    reverseMsg: {
      get: function () {
        return this.message.split("").reverse().join("");
      },
      //计算属性一般没有set方法
      set: function (newValue: any) {
        //在设置或者更改计算属性的时候调用
        console.log(newValue);
        this.message = newValue;
      },
    },
  },
```

```vue
    <!-- 计算属性 -->
    <p>{{ reverseMsg }}</p>
    <button @click="message = 'hello mikeshinoda'">改变Message</button>
```

### 侦听器

我们可以使用 [`watch` 选项](https://cn.vuejs.org/api/options-state.html#watch)在每次响应式属性发生变化时触发一个函数

```js
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  }
}
```

```vue
<p>
  Ask a yes/no question:
  <input v-model="question" />
</p>
<p>{{ answer }}</p>
```

#### 侦听器案例

```js
  watch: {
    //监听数据的变化
    // message: function (newValue, oldValue) {
    //   console.log(newValue);
    //   console.log(oldValue);
    //   //执行异步操作，或者复杂逻辑代码
    //   if (newValue.length < 5 || newValue.length > 10) {
    //     console.log("输入框的内容不能小于5或者大于10");
    //   }
    // },
    message: {
      //初始化的时候调用函数
      immediate: true,
      handler: function (newValue) {
        if (newValue.length < 5 || newValue.length > 10) {
          console.log("输入框的内容不能小于5或者大于10");
        }
      },
    },
  },
```

```vue
    <!-- watch -->
    <div>
      <p>{{ message }}</p>
      <button @click="message = 'hello mike'">改变Message</button>
      <input type="text" v-model="message" />
    </div>
```

#### 深度监听

watch监听不到对象的属性变化，需要使用深度监听

```js
  data() {
    return {
      num: 0,
      uname: "mike",
      flag: 0,
      head: "<h2>Title</h2>",
      id: "tag1",
      src: "https://www.baidu.com",
      attributeName: "id",
      message: "hello world",
      user: {
        name: "Ran Takahashi",
        gender: "male",
        age: 21,
      },
    };
  },
```

```js
    //深度监听
    //使用字符串的形式进行优化，只会单独监听对象中对应的属性
    "user.name": {
      handler: function (newValue) {
        console.log(newValue);
      },
      //表示是否深度监听，侦听器会一层层向下遍历，给对象每个属性都加上侦听器
      deep: true,
    },
    // user: {
    //   handler: function (newValue) {
    //     console.log(newValue);
    //   },
    //   //表示是否深度监听，侦听器会一层层向下遍历，给对象每个属性都加上侦听器
    //   deep: true,
    // },
```

### class类名的对象使用方式

```vue
<script lang="ts">
import { closeSync } from "fs";

export default {
  data() {
    return {
      message: "hello",
      isActive: true,
      classObj: {
        active: true,
        helloWorld: true,
      },
      error: null,
    };
  },
  methods: {
    change: function () {
      this.isActive = !this.isActive;
      this.classObj.helloWorld = !this.classObj.helloWorld;
      this.classObj.active = !this.classObj.active;
    },
  },
  computed: {
    classObjCom: function () {
      return {
        active: this.isActive && !this.error,
        helloWorld: this.error,
      };
    },
  },
};
</script>
<template>
  <div>
    <!-- 第一种，放置字符串 -->
    <p class="active">hello</p>
    <!-- 第二种，放置对象 -->
    <p :class="{ active: isActive }">hello1</p>
    <!-- 动态切换多个class -->
    <button @click="change">
      {{ isActive ? "active" : "not active" }}
    </button>
    <!-- 和普通的类同时存在，不会起冲突 -->
    <p>{{ classObj.active ? "active" : "not active" }}</p>
    <p>{{ classObj.helloWorld ? "hello" : "not hello" }}</p>
    <p :class="classObj">hello2</p>
    <!-- 使用computed -->
    <p :class="classObjCom">hello computed</p>
  </div>
</template>

<style>
.active {
  color: blue;
}
.helloWorld {
  background: pink;
}
</style>

```

### class类名的数组使用方式

```js
  data() {
    return {
      message: "hello",
      activeClass:"active,"
      isActive: true,
      classObj: {
        active: true,
        helloWorld: true,
      },
      error: null,
    };
  },
```

```vue
    <!-- 数组语法 -->
    <p class="[message,activeClass]"></p>
```

### style样式的多种操作方式

```vue
<script lang="ts">
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: 30,
      bgcColor: "pink",
      styleObj: {
        color: "red",
        fontSize: 30,
        "background-color": "pink",
      },
    };
  },
};
</script>
<template>
  <div>
    <!-- 第一种，放置字符串 -->
    <p style="color: red">hello</p>
    <!-- 第二种，放置对象 -->
    <p :style="styleObj">hello1</p>
    <!-- 数组语法 -->
    <p :style="[styleObj, { border: '15px solid' }]">hello1</p>
  </div>
</template>

<style></style>
```

### 条件渲染

#### 条件渲染v-if

```vue
<script lang="ts">
export default {
  data() {
    return {
      age: 18,
    };
  },
};
</script>
<template>
  <div>
    <p v-if="age < 18">I am Mike</p>
    <p v-else-if="age == 18">no</p>
    <p v-else>I am Ran</p>
  </div>
</template>

<style>
/* @import url("./assets/reste.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

#### 条件渲染v-show

```js
  data() {
    return {
      age: 18,
      gender: "male",
      isShow: true,
    };
  },
```

```vue
  <!-- v-show -->
  <p v-show="gender == 'male'">man</p>
  <p v-show="gender == 'female'">woman</p>
  <!--v-show 只是简单地切换元素的 display CSS property-->
  <h2 v-if="isShow">v-if</h2>
  <h2 v-show="!isShow">v-show</h2>
  <button @click="isShow = !isShow">change show</button>
```

### 列表渲染v-for

```vue
<script lang="ts">
export default {
  data() {
    return {
      person: ["mike", "ran", "sam"],
      personObj: {
        name: "name",
        gender: "gender",
      },
    };
  },
  methods: {
    addPerson: function () {
      this.person.unshift("first");
    },
  },
};
</script>
<template>
  <div>
    <!-- v-for使用数组 item代表数组中每一个元素，index表示数组元素的下标 -->
    <ul>
      <li v-for="item in person" :key="item">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in person" :key="index">
        {{ item }}-->{{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) of person" :key="index">
        {{ item }}-->{{ index }}
      </li>
    </ul>
    <!-- 循环对象 -->
    <ul>
      <li v-for="(item, key, index) in personObj" :key="key">
        {{ key }}-->{{ item }}-->>{{ index }}
      </li>
    </ul>
    <!-- 为了给 Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素 -->
    <!-- key给列表唯一的表示 -->
    <!-- 快速找到节点，提高渲染速度，减少渲染次数 -->
    <ul>
      <li v-for="item in person" :key="item">
        <input type="checkbox" name="" id="" />{{ item }}
      </li>
    </ul>
    <button @click="addPerson">addPerson</button>
  </div>
</template>

<style>
/* @import url("./assets/reste.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

### 数组更新检测

```vue
<script lang="ts">
export default {
  data() {
    return {
      list: [1, 3, 6, 4, 5],
    };
  },
  methods: {
    changeList: function () {
      //末尾添加元素
      // this.list.push(7, 8, 9);
      //删除掉数组末尾元素
      // this.list.pop();
      //数组第一位进行删除
      // this.list.shift();
      //数组第一位添加元素
      // this.list.unshift(1);
      //删除元素、插入元素、替代元素
      //删除元素
      //第一个参数：表示开始插入或者开始删除的元素的位置下标
      //第二个参数：表示传入要删除几个元素（如果没有传，就删除后面所有的元素）
      //插入元素
      //第二个参数：传入0，并且后面接上要插入的元素
      // 替换元素
      // 第二个参数，表示我们替换几个元素，后面的参数表示用于替换前面的元素的
      // this.list.splice(1, 3, 7, 8, 9);
      //排序
      // this.list.sort();
      //翻转
      // this.list.reverse();
    },
  },
};
</script>
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="changeList">ChangeList</button>
  </div>
</template>

<style>
/* @import url("./assets/reste.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

### 事件处理

```vue
<script lang="ts">
export default {
  data() {
    return {
      counter: 0,
      age: 18,
    };
  },
  methods: {
    // addCounter(number: number) {
    //   this.counter += number;
    // },
    //没有传入参数才可以
    addCounter(number, e) {
      this.counter += number;
      console.log(e);
    },
    addCounter1() {
      this.counter++;
    },
    addAge() {
      this.age++;
    },
  },
};
</script>
<template>
  <div>
    <!-- 绑定事件，直接通过js代码处理 -->
    <h2 @click="counter++">{{ counter }}</h2>
    <!-- 绑定事件,没有传递参数 -->
    <button @click="addCounter1">Add{{ counter }}</button>
    <!-- 绑定事件,传递参数 -->
    <!-- <button @click="addCounter(5)">Add {{ counter }}</button> -->
    <!-- <button @click="addCounter">Add {{ counter }}</button> -->
    <!-- 绑定事件，既传递参数又要有事件对象 -->
    <button @click="addCounter(5, $event)">Add {{ counter }}</button>
    <!-- 一个事件，绑定多个处理函数 -->
    <h2 @click="addCounter(5, $event), addAge()">{{ counter }} {{ age }}</h2>
  </div>
</template>

<style>
/* @import url("./assets/reste.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

### 事件修饰符

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。

为解决这一问题，Vue 为 `v-on` 提供了**事件修饰符**。修饰符是用 `.` 表示的指令后缀，包含以下这些：

`.stop`

`.prevent`

`.self`

`.capture`

`.once`

`.passive`

```vue
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>

<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
```

`.capture`、`.once` 和 `.passive` 修饰符与[原生 `addEventListener` 事件](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#options)相对应：

```vue
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>

<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>

<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>
```

`.passive` 修饰符一般用于触摸事件的监听器，可以用来[改善移动端设备的滚屏性能](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善的滚屏性能)。

### 按键修饰符

在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 `v-on` 或 `@` 监听按键事件时添加按键修饰符。

```vue
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />
```

你可以直接使用 [`KeyboardEvent.key`](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。

```vue
<input @keyup.page-down="onPageDown" />
```

在上面的例子中，仅会在 `$event.key` 为 `'PageDown'` 时调用事件处理。

#### 按键别名

Vue 为一些常用的按键提供了别名：

`.enter`

`.tab`

`.delete` (捕获“Delete”和“Backspace”两个按键)

`.esc`

`.space`

`.up`

`.down`

`.left`

`.right`

#### 系统按键修饰符

你可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。

`.ctrl`

`.alt`

`.shift`

`.meta`

注意

在 Mac 键盘上，meta 是 `Command 键 (⌘)`。在 Windows 键盘上，meta 键是 `Windows 键 (⊞)`。在 Sun 微机系统键盘上，meta 是钻石键 (◆)。在某些键盘上，特别是 MIT 和 Lisp 机器的键盘及其后代版本的键盘，如 Knight 键盘，space-cadet 键盘，meta 都被标记为“META”。在 Symbolics 键盘上，meta 也被标识为“META”或“Meta”。

举例来说：

```vue
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
```

> 请注意，系统按键修饰符和常规按键不同。与 `keyup` 事件一起使用时，该按键必须在事件发出时处于按下状态。换句话说，`keyup.ctrl` 只会在你仍然按住 `ctrl` 但松开了另一个键时被触发。若你单独松开 `ctrl` 键将不会触发。

#### `.exact` 修饰符

`.exact` 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。

```vue
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

### 鼠标按键修饰符

`.left`

`.right`

`.middle`

这些修饰符将处理程序限定为由特定鼠标按键触发的事件。

### v-model表单控件的基本使用

```vue
<script lang="ts">
export default {
  data() {
    return {
      gender: "male",
      city: "Rizhao",
      cities: [],
      fruits: [],
    };
  },
};
</script>
<template>
  <!-- 复选框 -->
  <h2>Selected: {{ fruits }}</h2>
  <input type="checkbox" v-model="fruits" value="Apple" />Apple
  <input type="checkbox" v-model="fruits" value="Bananas" />Bananas
  <input type="checkbox" v-model="fruits" value="Pear" />Pear

  <!-- 单选框 -->
  <h2>Gender: {{ gender }}</h2>
  <input type="radio" v-model="gender" value="male" />male
  <input type="radio" v-model="gender" value="female" />female

  <!-- 选项框 -->
  <h2>City: {{ city }}</h2>
  <select name="" id="" v-model="city">
    <option value="Rizhao">Rizhao</option>
    <option value="Jinan">Jinan</option>
    <option value="Qingdao">Qingdao</option>
  </select>

  <!-- 多选框 -->
  <h2>Cities: {{ cities }}</h2>
  <select name="" id="" multiple v-model="cities">
    <option value="Rizhao">Rizhao</option>
    <option value="Jinan">Jinan</option>
    <option value="Qingdao">Qingdao</option>
  </select>
</template>

<style>
/* @import url("./assets/reste.css"); */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

### 父组件通过Prop传给子组件值

在**父组件Content.vue**

```vue
<script lang="ts">
import Hello from "./Hello.vue";

export default {
  data() {
    return {
      msg: "This is Data from Content.",
    };
  },
  methods: {},
};
</script>
<template>
  <div>
    <Hello :msgFromContent="msg"></Hello>
  </div>
</template>

<style>
</style>
```

在**子组件Hello.vue**

```vue
<script lang="ts">
export default {
  data() {
    return {
      msg: "This is Data from Hello.",
    };
  },
  props: ["msgFromContent"],
};
</script>
<template>
  <div>
    <h2>There is Hello.vue</h2>
    <p>{{ msgFromContent }}</p>
  </div>
</template>

<style>
</style>
```

### 子组件通过自定义事件向父组件传值

在**父组件App.vue**

```vue
<script lang="ts">
import Content from "./components/Content.vue";

export default {
  data() {
    return {
      childMsg: "",
    };
  },
  methods: {
    getChildData(value: any) {
      this.childMsg = value;
    },
  },
  components: {
    Content,
  },
};
</script>
<template>
  <h2>There is App.vue</h2>
  <Content @submit="getChildData"></Content>
  <div>
    <p>childMsg: {{ childMsg }}</p>
  </div>
</template>

<style>
</style>

```

在**子组件Content.vue**

```vue
<script lang="ts">
export default {
  data() {
    return {
      msg: "This is Data from Content.",
    };
  },
  methods: {
    sendParent() {
      this.$emit("submit", this.msg);
    },
  },
};
</script>
<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="sendParent">Submit to App.vue</button>
  </div>
</template>

<style>
</style>

```

### 父组件访问子组件`$refs`

在**App.vue**

```vue
<script>
import RefsParentRoot from "./components/RefsParentRoot.vue";
export default {
  data() {
    return {
      message: "hello App.vue",
    };
  },
  mounted() {
    console.log(this.$refs.hello.childMsg);
  },
  components: {
    RefsParentRoot,
  },
};
</script>
<template>
  <div>
    <RefsParentRoot :propMsg="message" ref="hello"></RefsParentRoot>
    <p>{{ this.$refs.hello.propMsg }}</p>
  </div>
</template>
<style></style>
```

在**RefsParentRoot.vue**

```vue
<script>
export default {
  data() {
    return {
      childMsg: "child message",
    };
  },
  props: ["propMsg"],
};
</script>
<template>
  <div>
    <h2>H2</h2>
    <p>{{ propMsg }}</p>
  </div>
</template>
<style></style>
```

### 子组件访问父组件和根组件`$parent $root`

#### `$parent`

子组件可直接通过`$parent`来访问父组件的内容

> ⚠️不建议使用，因为影响复用性

```vue
<template>
  <div>
    <h2>H2</h2>
    <p>{{ propMsg }}</p>
    <h2>------------</h2>
    <p>{{ this.$parent }}</p>
    <p>{{ this.$parent.message }}</p>
  </div>
</template>
```

#### `$root`

```vue
<h2>------------</h2>
<p>{{ this.$root }}</p>
```

### 插槽

在**App.vue**

```vue
<script>
import Slot from "./components/Slot.vue";

export default {
  data() {
    return {
      message: "Hello App.vue",
    };
  },

  components: {
    Slot,
  },
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <!-- 测试默认slot -->
    <h2>Test default slot</h2>
    <Slot></Slot>
    <!-- 测试覆盖slot -->
    <h2>Test overwrite slot</h2>
    <Slot><input type="text" name="" id="" /></Slot>
    <!-- 测试具名插槽 -->
    <h2>Test</h2>
    <Slot>
      <template v-slot:s1>
        <button>Replace s1</button>
      </template>
      <template v-slot:s2>
        <button>Replace s2</button>
      </template>
      <template v-slot:s3>
        <button>Replace s3</button>
      </template>
    </Slot>
    <!-- 测试作用域插槽 -->
    <div>
      <Slot>
        <template v-slot:default="SlotProps">
          <ul>
            <li v-for="item in SlotProps.list" :key="item">{{ item }}</li>
          </ul>
        </template>
      </Slot>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

```

在**Slot.vue**

```vue
<script>
export default {
  data() {
    return {
      msg: "message from Slot.vue",
      defMsg: "default solt message.",
      list: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>
<template>
  {{ msg }}
  <slot>
    <p>{{ defMsg }}</p>
  </slot>
  <!-- 测试具名插槽 -->
  <slot name="s1"></slot>
  <slot name="s2"></slot>
  <slot name="s3"></slot>
  <!-- 测试插槽作用域 -->
  <slot :list="list"></slot>
</template>
<style></style>
```

### 组件之间的跨级通信`provide`和`inject`

在**App.vue**

```vue
<script>
import Home from "./components/Home.vue";
export default {
  data() {
    return {
      message: "hello App.vue",
      // 响应式传obj
      obj: {
        message: "hello obj",
      },
    };
  },
  provide() {
    return {
      Appmessage: this.message,
      obj: this.obj,
      tips: "this is tips.",
    };
  },
  components: {
    Home,
  },
};
</script>
<template>
  <div>
    <p>{{ obj }}</p>
    <button @click="obj.message = 'hi obj'">Change obj</button>
    <h2>---</h2>
    <Home></Home>
  </div>
</template>
<style></style>
```

在**Home.vue**

```vue
<script>
import Content from "./Content.vue";
export default {
  data() {
    return {};
  },
  components: {
    Content,
  },
};
</script>
<template>
  <div>
    <Content></Content>
  </div>
</template>
<style></style>
```

在**Content.vue**

```vue
<script>
export default {
  data() {
    return {
      message: "hello content",
    };
  },
  inject: ["Appmessage", "tips", "obj"],
};
</script>
<template>
  <div>{{ message }}</div>
  <div>{{ tips }}</div>
  <div>{{ obj }}</div>
</template>
<style></style>
```

### 组合式API在setup()函数中定义以及使用变量

```vue
<script>
import { toRefs, reactive } from "@vue/reactivity";
export default {
  data() {
    return {
      message: "hello App.vue",
    };
  },
  setup() {
    const message = "hello vue";
    const obj = reactive({
      name: "mike",
      age: 18,
      gender: "man",
    });
    function changeObjName() {
      this.obj.name = "sam";
    }
    function changeAll() {
      this.obj.name = "sam";
      this.obj.age = 28;
      this.obj.gender = "woman";
    }
    //...obj可以将obj进行解构
    //...obj解构后将失去响应式，需要用toRefs()来恢复响应式
    return { message, obj, changeObjName, changeAll, ...toRefs(obj) };
  },
};
</script>
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ obj.name }}</p>
    <h2>---</h2>
    <button @click="changeObjName">Change obj.name</button>
    <h2>---</h2>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>gender: {{ gender }}</p>
    <button @click="changeAll">change all</button>
  </div>
</template>
<style></style>
```

### Router

#### 安装

##### npm

```bash
npm install vue-router@4
```

##### yarn

```bash
yarn add vue-router@4
```

#### 使用

##### 官方文档

```vue
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>

<!-- JavaScript -->
<script>
  // 1. 定义路由组件.
  // 也可以从其他文件导入
  const Home = { template: '<div>Home</div>' }
  const About = { template: '<div>About</div>' }

  // 2. 定义一些路由
  // 每个路由都需要映射到一个组件。
  // 我们后面再讨论嵌套路由。
  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]

  // 3. 创建路由实例并传递 `routes` 配置
  // 你可以在这里输入更多的配置，但我们在这里
  // 暂时保持简单
  const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

  // 5. 创建并挂载根实例
  const app = Vue.createApp({})
  //确保 _use_ 路由实例使
  //整个应用支持路由。
  app.use(router)

  app.mount('#app')

  // 现在，应用已经启动了！
</script>
```

##### Vue项目

文件目录

```txt
.src
├── App-provide-inject.vue
├── App-refs-parent-root.vue
├── App-setup.vue
├── App-slot.vue
├── App.vue
├── assets
│   ├── base.css
│   ├── logo.svg
│   └── main.css
├── components
│   ├── Content.vue
│   ├── Home.vue
│   ├── RefsParentRoot.vue
│   └── Slot.vue
├── main.js
├── router
│   └── index.js
├── template.vue
└── views
    ├── About.vue
    └── Home.vue
```

App.vue

```vue
<script>
export default {
  data() {
    return {
      message: "hello App.vue",
    };
  },
};
</script>
<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<style></style>
```

Home.vue

```vue
<template>
  <div>There is Home</div>
</template>
```

About.vue

```vue
<template>
  <div>There is About</div>
</template>
```

Index.js

```js
import { createRouter, createWebHashHistory } from "vue-router";
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
```

Main.js

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
```

#### 带参数的动态路由匹配

在`index.js`

```js
import User from "../views/User.vue";
{
	path: "/user/:id",
	component: User,
},
```

在`User.vue`

```vue
<template>
  <div>User Page</div>
</template>
<script setup>
import { useRoute } from "vue-router";
console.log(useRoute().params.id);
</script>
```

#### 404NotFound

在`index.js`

```js
import NotFound from "../views/NotFound.vue";
{
  // 正则表达式
  // 404NotFound
  path: "/:path(.*)",
    component: NotFound,
},
```

在`NotFound.vue`

```vue
<template>
  <h2>找不到页面</h2>
</template>
```

#### 路由正则表达式匹配与重复参数

`index.js`

```js
import News from "../views/News.vue";
{
	//匹配数字（正则表达式）
	path: "/news/:id(\\d+)",
	component: News,
},
```

`News.vue`

```vue
<template>
  <div>News Page.</div>
</template>
```

`App.vue`

```vue
<router-link to="/news/456">Go to News</router-link>
```

#### 嵌套路由

`Home.vue`

```vue
<div>
  <p>There is Home</p>
  <p><router-link to="/styleone">Go style one</router-link></p>
  <p><router-link to="/styletwo">Go style two</router-link></p>
  <router-view></router-view>
</div>
```

`StyleOne.vue` and `StyleTwo.vue`

```vue
<div>
  <p>There is style one/two</p>
</div>
```

`router/index.js`

```js
import StyleOne from "../views/StyleOne.vue";
import StyleTwo from "../views/StyleTwo.vue";
	{
    path: "/",
    component: Home,
    children: [
      {
        path: "styleone",
        component: StyleOne,
      },
      {
        path: "styletwo",
        component: StyleTwo,
      },
    ],
  },
```

#### 使用JavaScript实现页面跳转

`App.vue`

```vue
<div>
	<h2>There is App.vue</h2>
	<router-link to="/detail">Click to go detail page.</router-link>
	<router-view></router-view>
</div>
```

`router/index.js`

```js
import Index from "../views/Index.vue";
import Deatil from "../views/Detail.vue";
const routes = [
  {
    path: "/",
    component: Index,
  },
    {
    path: "/detail",
    component: Deatil,
  },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
export default router;
```

`Detail.vue`

```vue
<template>
  <div>
    <h2>Detail Pages</h2>
    <button @click="goIndex">Go Index</button>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex: function () {
      this.$router.push("/");
    },
  },
};
</script>
```



## 登陆页简单验证
