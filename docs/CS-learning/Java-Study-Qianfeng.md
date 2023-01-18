---
title: 千锋Java学习
date: 2022/07/16/ 11:17:25
categories: 后端学习
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
cover: https://pic.3gbizhi.com/2020/0414/thumb_1680_0_20200414032900672.jpg
---

- [Java实用代码](#java实用代码)
  - [Java 整数字符串字符数组互相转化](#java-整数字符串字符数组互相转化)
    - [1.char数组(字符数组)-\>字符串](#1char数组字符数组-字符串)
    - [2. 字符串数组-\>字符串](#2-字符串数组-字符串)
    - [3. 字符串-\>char数组(字符数组)](#3-字符串-char数组字符数组)
    - [4. 逆序](#4-逆序)
    - [5. int -\> String](#5-int---string)
    - [6. String -\> int](#6-string---int)
- [023-035 算法与数组](#023-035-算法与数组)
  - [029 冒泡排序算法](#029-冒泡排序算法)
  - [030 选择排序算法](#030-选择排序算法)
  - [031 插入排序](#031-插入排序)
  - [032 二分查找法](#032-二分查找法)
  - [033 Array工具类](#033-array工具类)
  - [034 - 036 双色球案例](#034---036-双色球案例)
- [037-075 面向对象](#037-075-面向对象)
  - [037 面向对象基本概念](#037-面向对象基本概念)
  - [038 类和对象的定义格式](#038-类和对象的定义格式)
  - [039 类和对象的内存分析](#039-类和对象的内存分析)
  - [040 面向对象封装性](#040-面向对象封装性)
  - [041 成员变量和局部变量](#041-成员变量和局部变量)
  - [042 构造方法](#042-构造方法)
  - [043 this关键字](#043-this关键字)
  - [044 值传递与引用传递](#044-值传递与引用传递)
  - [045 对象的一对一关系](#045-对象的一对一关系)
  - [046 static关键字修饰属性和方法](#046-static关键字修饰属性和方法)
  - [047 完整内存结构图与main方法详解](#047-完整内存结构图与main方法详解)
  - [048 代码块](#048-代码块)
  - [049 单例设计模式](#049-单例设计模式)
    - [1. 饿汉式](#1-饿汉式)
    - [2. 懒汉式](#2-懒汉式)
    - [3. 为什么要使用单例](#3-为什么要使用单例)
    - [4. 能不能使用构造方法私有化+静态方法来替代单例？](#4-能不能使用构造方法私有化静态方法来替代单例)
  - [050 - 051 对象数组案例](#050---051-对象数组案例)
    - [动态数组](#动态数组)
  - [052 继承的基本概念](#052-继承的基本概念)
    - [创建子类对象时，父类的构造方法也会被调用，为什么？](#创建子类对象时父类的构造方法也会被调用为什么)
    - [当父类中没有无参构造方法时，子类必须显示的调用父类的带参构造方法](#当父类中没有无参构造方法时子类必须显示的调用父类的带参构造方法)
  - [053 继承小结](#053-继承小结)
  - [054 方法重写与super关键字](#054-方法重写与super关键字)
    - [Overloading和Overriding的区别](#overloading和overriding的区别)
  - [055 继承的应用示例](#055-继承的应用示例)
  - [056 fianl关键字](#056-fianl关键字)
  - [057 抽象类的基本概念](#057-抽象类的基本概念)
  - [058 接口的基本概念](#058-接口的基本概念)
  - [059 面向对象的多态性](#059-面向对象的多态性)
  - [060 instanceof关键字](#060-instanceof关键字)
  - [061 抽象类应用之模板方法设计模式](#061-抽象类应用之模板方法设计模式)
  - [062 接口应用之策略设计模式](#062-接口应用之策略设计模式)
  - [063 Object类](#063-object类)
  - [064 简单工厂设计模式](#064-简单工厂设计模式)
  - [065 静态代理设计模式](#065-静态代理设计模式)
  - [066 适配器设计模式](#066-适配器设计模式)
  - [067-069 内部类详解](#067-069-内部类详解)
  - [070 递归运算](#070-递归运算)
  - [071-073 数据结构之链表](#071-073-数据结构之链表)
  - [074 基本数据类型包装类](#074-基本数据类型包装类)
  - [075 包与访问修饰符](#075-包与访问修饰符)
- [076-081 Eclipse](#076-081-eclipse)
  - [076 Eclipse开发工具基本使用](#076-eclipse开发工具基本使用)
  - [077 异常概念与简单使用](#077-异常概念与简单使用)
  - [078 try catch finally的使用](#078-try-catch-finally的使用)
  - [079 throw throws与异常规则](#079-throw-throws与异常规则)
  - [080 自定义异常与assert](#080-自定义异常与assert)
  - [081 新特性与debug技术](#081-新特性与debug技术)
- [082-096 API](#082-096-api)
  - [082 String类原理分析](#082-string类原理分析)
  - [083 String常用方法介绍](#083-string常用方法介绍)
  - [084 StringBuffer源码分析与常用方法](#084-stringbuffer源码分析与常用方法)
  - [085 StringBuilder分析](#085-stringbuilder分析)
        - [面试题：StringBuffer与StringBuilder的区别](#面试题stringbuffer与stringbuilder的区别)
  - [086 程序国际化Local与属性文件](#086-程序国际化local与属性文件)
        - [Locale类](#locale类)
        - [使用此类中的构造方法来创建 Locale](#使用此类中的构造方法来创建-locale)
        - [通过静态方法创建Locale](#通过静态方法创建locale)
        - [ResourceBundle类](#resourcebundle类)
  - [087 程序国际化ResourceBundle与动态文本处理](#087-程序国际化resourcebundle与动态文本处理)
  - [088 Math与Random类](#088-math与random类)

<iframe src="//player.bilibili.com/player.html?aid=883829806&bvid=BV1FK4y1x7Ny&cid=405715221&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## Java实用代码

### Java 整数字符串字符数组互相转化

#### 1.char数组([字符数组](https://so.csdn.net/so/search?q=字符数组&spm=1001.2101.3001.7020))->字符串

```java
  //char数组(字符数组)->字符串
        char[] arr={'a','b','c'};
        String string =String.copyValueOf(arr);
        System.out.println(string);          //abc
        String string1 = new String(arr);
        System.out.println(string1);   //abc
        String string2 = new String(arr,1,2);
        System.out.println(string2);   //bc
```

#### 2. 字符串数组->字符串

```java
  //字符串数组->字符串
        String[] arr ={"0123","sb","12f"};
        StringBuffer sb = new StringBuffer();

        for(int i = 0;i<arr.length;i++){
            sb.append(arr[i]);        //append String并不拥有该方法，所以借助StringBuffer
        }
        String sb1 = sb.toString();
        System.out.println(sb1);    //0123sb12f
```

#### 3. 字符串->char数组(字符数组)

```java
   //字符串->char数组(字符数组)
        String str = "123abc";
        char[] ar = str.toCharArray();
        System.out.println(ar.length); //   char数组

        for(int i =0;i<ar.length;i++){
            System.out.println(ar[i]);    //1 2 3 a b c
        }

        String[] arr = str.split("");
        System.out.println(arr.getClass());
        for(int i =0;i<arr.length;i++){//String数组，不过arr[0]为空
            System.out.println(arr[i]);    //1 2 3 a b c
        }
```

#### 4. 逆序

```java
 //逆序
        String s="123abc";
        System.out.println(new StringBuilder(s).reverse().toString()); //cba321
```

#### 5. int -> String

```java
  //int -> 字符串
        int i = 2021;
        String s=String.valueOf(i);
        System.out.println(s); //2021
        System.out.println(Integer.toString(i));
        String s1 = “” + i;
        System.out.println(s1)
```

#### 6. String -> int

```java
  String s = "2022";
        int i = Integer.parseInt(s);
        System.out.println(i);
        int  integer = Integer.valueOf(s); //推荐用parseInt
        System.out.println(integer);
```

## 023-035 算法与数组

### 029 冒泡排序算法

代码实现

```java
 /* Bubble sort class. */
    public class BubbleSort_Class {
        public static void bubble_sort(int[] x) {
            for (int i = 0; i < x.length - 1; i++) {
                for (int j = 0; j < x.length - 1 - i; j++) {
                    if (x[j] > x[j + 1]) {
                        /* Swap x[j] and x[j+1] */
                        // x[j] = x[j] + x[j + 1];
                        // x[j + 1] = x[j] - x[j + 1];
                        // x[j] = x[j] - x[j + 1];

                        /* Or uses swap() function. */
                        swap(x, j, j + 1);
                    }
                }
            }
        }

        /* Swap item a and b. */
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

```

### 030 选择排序算法

代码实现

```java
/* Selection sort class. */
    public class SelectionSort_Class {
        public static void selection_sort(int[] x, int start) {
            if (start == x.length)
                return;
            int smallestIndex = findSmallest(x, start);
            swap(x, start, smallestIndex);
            selection_sort(x, start += 1);
        }

        public static int findSmallest(int[] x, int start) {
            int smallestIndex = start;
            for (int i = start; i < x.length; i++) {
                if (x[i] < x[smallestIndex])
                    smallestIndex = i;

                // This is a method to compare two String item.
                // If a is bigger than b, a.compareTo(b) is postive.
                // int cmp = x[smallestIndex].compareTo(x[i]);
            }
            return smallestIndex;
        }

        // Swap item a with b.
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }
```

### 031 插入排序

代码实现

```java
public static void InsertionSort(int[] x) {
            for (int i = 0; i < x.length - 1; i++) {
                int temp = x[i];
                int j = 0;
                for (j = i - 1; j >= 0; j--) {
                    if (x[j] > temp) {
                        x[j + 1] = x[j];
                    } else
                        break;
                }
                if (x[j + 1] != temp)
                    x[j + 1] = temp;
            }
        }
```

### 032 二分查找法

代码实现

```java
public class BinarySearch {
    public static void main(String[] args) {

        //Array must be sequenced.
        int num[] = {10, 20, 30, 50, 65, 88};
        int key = 65;
        int index = binarySearch(num, key);
        System.out.println("The index of " + key + " is: " + index);
    }

    public static int binarySearch(int[] num, int key) {
        //Begin index.
        int start = 0;
        //Finished index.
        int end = num.length - 1;

        while (start <= end) {
            int middle = (start + end) / 2;
            if (num[middle] > key) {
                end = middle - 1;
            } else if (num[middle] < key) {
                start = middle + 1;
            } else {
                return middle;
            }
        }

        //If not searched, return -1.
        return -1;
    }
}

```

### 033 Array工具类

- Arrays.toString()
- Arrays.sort()
- Arrays.copyOf()
- .equals() 确定的东西放在前面

代码实现

```java
import java.util.Arrays;

public class ArrayClass {
    public static void main(String[] args) {
        int[] num = {45, 65, 76, 87, 98, 901};

        int key = 98;
        //BinarySearch.
        int index = Arrays.binarySearch(num, key);
        System.out.println("The index of " + key + " is: " + index);

        //Output Array using .toString() method.
        //More conveniently!
        System.out.println(Arrays.toString(num));

        //Sorting.
        int num2[] = {1, 3, 5, 7, 9, 2, 4, 6, 8, 10};
        //Using quick sort.
        Arrays.sort(num2);
        System.out.println(Arrays.toString(num2));

        //Copy to Array.
        System.out.println("This is a test of Arrays.copyOf().");
        int[] num3 = Arrays.copyOf(num2, 20);
        System.out.println(Arrays.toString(num3));

        //System.arraycopy();
        //Most effective.
        System.out.println("This is a test of System.arraycopy().");
        int[] newNum = new int[num2.length];
        System.arraycopy(num2, 0, newNum, 0, num2.length);
        System.out.println(Arrays.toString(newNum));


        //Equal.
        System.out.println(Arrays.equals(num, num2));

    
        //Fill array.
        Arrays.fill(newNum, 0);
        System.out.println(Arrays.toString(newNum));
    }
}

```

### 034 - 036 双色球案例

实现代码

```java
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class TwoColorBall {
    public static void main(String[] args) {

        // Define variables.

        // RedBall number user chooses.
        int[] userRedBall = new int[6];

        // RedBall number system creates.
        int[] sysRedBall = new int[6];

        // BlueBall user chooses.
        int userBlueBall = 0;

        // BlueBall system creates.
        int sysBlueBall = 0;

        // Records the correct RedBall numbers of user chooses.
        int redCount = 0;

        // Records the correct BlueBall numbers of user chooses.
        int blueCount = 0;

        // Creates 6 numbers randomly between 1 and 33 which is not repeated.
        int[] redBall = new int[33];
        for (int i = 0; i < redBall.length; i++) {
            redBall[i] = i + 1;
        }
        System.out.println("Double-Color Ball begins, good luck! ");
        System.out.println("Please choose the method that you want: (1: System creates; 2: Manual)");
        Scanner input = new Scanner(System.in);
        Random r = new Random();
        boolean flag = true;
        while (flag) {
            int isAuto = input.nextInt();
            switch (isAuto) {
                case 1:
                    // System
                    computerSelection(redBall, userRedBall);
                    userBlueBall = r.nextInt(16) + 1;
                    flag = false;
                    break;
                case 2:
                    // Manual
                    System.out.println("Please enter 6 numbers for RedBall: (1 - 33)");
                    for (int i = 0; i < userRedBall.length; i++) {
                        userRedBall[i] = input.nextInt();
                    }
                    System.out.println("Please enter 1 number for BlueBall: (1 - 16)");
                    userBlueBall = input.nextInt();
                    flag = false;
                    break;
                default:
                    System.out.println("Please choose the method that you want: (1: System creates; 2: Manual)");
                    break;
            }
        }

        // System creates numbers randomly.
        // RedBall
        computerSelection(redBall, sysRedBall);
        // BlueBall
        sysBlueBall = r.nextInt(16) + 1;

        // Calc result.
        // Calc RedBall.
        for (int i = 0; i < userRedBall.length; i++) {
            for (int j = 0; j < sysRedBall.length; j++) {
                if (userRedBall[i] == sysRedBall[j]) {
                    int temp = sysRedBall[j];
                    sysRedBall[j] = sysRedBall[sysRedBall.length - 1 - redCount];
                    sysRedBall[sysRedBall.length - 1 - redCount] = temp;
                    redCount += 1;
                    break;
                }
            }
        }
        // Calc BlueBall
        if (userBlueBall == sysBlueBall) {
            blueCount = 1;
        }

        // Whether prize.
        if (blueCount == 0 && redCount <= 3) {
            System.out.println("Sorry, you don't have prize, continue to go!");
            System.out.println();
        } else if (blueCount == 1 && redCount < 3) {
            System.out.println("Congratulation! 6 level!");
        } else if ((blueCount == 1 && redCount == 3) || (blueCount == 0 && redCount == 4)) {
            System.out.println("Congratulation! 5 level!");
        } else if ((blueCount == 1 && redCount == 4) || (blueCount == 0 && redCount == 5)) {
            System.out.println("Congratulation! 4 level!");
        } else if ((blueCount == 1 && redCount == 5)) {
            System.out.println("Congratulation! 3 level!");
        } else if ((blueCount == 0 && redCount == 6)) {
            System.out.println("Congratulation! 2 level!");
        } else if ((blueCount == 1 && redCount == 6)) {
            System.out.println("Congratulation! 1 level!");
        } else {
            System.out.println("Sorry, system error!");
        }

        // System numbers.
        System.out.println("Prize numbers of RedBall: ");
        sort(sysRedBall);
        System.out.println(Arrays.toString(sysRedBall));
        System.out.println("Prize numbers of BlueBall: " + sysBlueBall);

        // User numbers.
        System.out.println("The number of RedBall you chose: ");
        sort(userRedBall);
        System.out.println(Arrays.toString(userRedBall));
        System.out.println("The number of BlueBall you chose is " + userBlueBall);

        System.out.println("Buy Double-Color Ball is a contribution to our country! Try again next time! ");
    }

    public static void sort(int[] ball) {
        Arrays.sort(ball);
    }

    // Creates some numbers randomly that are not repeat.
    public static void computerSelection(int[] redBall, int[] userRedBall) {
        Random r = new Random();
        int index = -1;
        for (int i = 0; i < userRedBall.length; i++) {
            index = r.nextInt(redBall.length - i);
            userRedBall[i] = redBall[index];
            int temp = redBall[index];
            redBall[index] = redBall[redBall.length - 1 - i];
            redBall[redBall.length - 1 - i] = temp;
        }
    }
}

```

## 037-075 面向对象

### 037 面向对象基本概念

### 038 类和对象的定义格式

### 039 类和对象的内存分析

### 040 面向对象封装性

### 041 成员变量和局部变量

### 042 构造方法

### 043 this关键字

### 044 值传递与引用传递

### 045 对象的一对一关系

### 046 static关键字修饰属性和方法

### 047 完整内存结构图与main方法详解

- String[] args默认是空的数组，长度为0

### 048 代码块

- 构造代码块比构造函数先调用
- 静态代码块在第一次使用的时候被调用（创建对象），只会执行一次，由于构造块执行
- 通常会使用静态代码块来初始化只调用一次的数据

### 049 单例设计模式

#### 1. 饿汉式

占用内存的时间长，提高效率

```java
//饿汉试
class Singleton1 {
    private Singleton1() {
    }

    private static Singleton1 s = new Singleton1();

    public static Singleton1 getInstance() {
        return s;
    }

    public void print() {
        System.out.println("Testing method...");
    }

}
```

#### 2. 懒汉式

占用内存的时间短，效率低（懒加载，延迟加载）

在多线程访问时会有安全问题

```java
//懒汉式
class Singleton2 {
    private Singleton2() {
    }

    private static Singleton2 s;

    public static Singleton2 getInstance() {
        if (s == null) {
            s = new Singleton2();
        }
        return s;
    }

    public void print() {
        System.out.println("Testing method...");
    }

}
```

#### 3. 为什么要使用单例

- 在设计一些工具类的时候（通常工具类，只有功能方法，没有属性）
- 工具类可能会被频繁调用
- 为了节省重复创建对象所带来的内存消耗，从而提高效率

#### 4. 能不能使用构造方法私有化+静态方法来替代单例？

- 可以，但是在实际开发中推荐使用单例

### 050 - 051 对象数组案例

#### 动态数组

- 数组是一种线性数据结构
- 数组不适合作删除插入等操作，适合添加，查找，遍历

### 052 继承的基本概念

- 继承：继承是从已有的类创建新类的过程
- 继承一个父类，只能继承非私有的数据（属性和方法）
- protected访问权限修饰符，在继承关系中使用，在父类中使用protected修饰的属性或方法可以被子类继承

#### 创建子类对象时，父类的构造方法也会被调用，为什么？

- 因为子类要使用到父类的数据，那么就要通过父类的构造方法来初始化数据
- 如果创建子类对象时使用默认的构造方法，那么父类的默认构造方法也会被调用
- 如果创建子类对象时会调用父类的默认构造方法

#### 当父类中没有无参构造方法时，子类必须显示的调用父类的带参构造方法

- 可以在子类中显示的使用super（），只能出现在第一句

### 053 继承小结

- 调用构造方法不一定是创建对象
- 开发原则：高内聚，低耦合

### 054 方法重写与super关键字

#### Overloading和Overriding的区别

- overloading：方法的重载，发生在同一个类中，方法名相同，参数列表不同，返回值无关

- overriding：方法的重写，发生在子父类中，方法名相同，参数列表相同，返回值相同，子类的访问修饰符要大于或等于父类的访问修饰符，子类的异常声明必须小于或等于父类的异常声明。如果方法被private，static，final修饰，那么不能被重写。

this表示当前对象

使用super来调用父类的属性，方法和构造方法

### 055 继承的应用示例

### 056 fianl关键字

1. 使用final声明一个属性，就是常量，常量的命名规则建议使用全大写，常量必须在定义时或在构造器中初始化
2. 使用final声明的方法，不能被子类重写，只能被继承
3. 使用final声明的类，该类就转变为最终类，没有子类的类，final修饰的类无法被继承

### 057 抽象类的基本概念

抽象类：用abstract关键字声明的类称为抽象类

很多具有相同特征和行为的对象可以抽象为一个类，很多具有相同特征和行为的类可以抽象为一个抽象类

### 058 接口的基本概念

### 059 面向对象的多态性

多态性：对象在运行过程中的多种形态

- 方法的重载与重写
- 对象的多态性

### 060 instanceof关键字

当我们需要把父类的实例强制转换为子类引用时，为了避免类型转换异常 `java.lang.ClassCastException` ，那么我们需要在转换之前作类型检查（判断）

```java
if(homeChicken instanceof Chicken){
/*
  your codes there.
*/
}
```

成立的条件是，对象本身及对象的父类型，都可以通过检查

### 061 抽象类应用之模板方法设计模式

定义一个操作中的算法的骨架，而将一些可变部分的实现延迟到子类中。

### 062 接口应用之策略设计模式

策略模式（Strategy Pattern），定义了一系列的算法，将每一种算法封装起来并可以相互替换使用，策略模式让算法独立于使用它的客户应用而独立变化。

- 多用封装
- 少用继承

### 063 Object类

- Objiect类 是类层次结构的根类
- 每个类都使用 Object作为超类。所有对象（包括数组）都实现这个类的方法
- 所有类都是Object类的子类。

public String toString() 方法

- 返回该对象的字符串表示。
- 通常，tostring 方法会返回一个“以文本方式表示”此对象的字符串。结果应是一个简明且易于读懂的信息表达式。建议所有子类都重写此方法。

public boolean equals(Object obj)

- 指示其他某个对象是否与此对象“相等。equals 方法在非空对象引用上实现相等关系：自反性，对称性，传递性，一致性

### 064 简单工厂设计模式

- 使用者和被使用者两者之间，耦合，产生了依赖，当被使用者改变时，会影响使用者

- 使用工厂模式来降低两者之间的依赖

### 065 静态代理设计模式

- 代理模式（Proxy）：为其他对象提供一种代理以控制对这个对象的访问。
- 代理模式说白了就是“真实对象”的代表，在访问对象时引入一定程度的间接性，因为这种间接性可以附加多种用途。

### 066 适配器设计模式

适配器模式（Adapter）：将一个类的接口转换成客户希望的另外一个接口。

适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

### 067-069 内部类详解

内部类就是在一个类内部定义的类

- 成员内部类：直接在类中定义类
- 方法内部类：在一个类中的方法内定义一个类

1、方法内部类只能在定义该内部类的方法内实例化，不可以在此方法外对其实例化。

2、方法内部类对象不能使用该内部类所在质法的非final局部变量。

3、静态内部类：在一个类内部定义一个静态内部类，静态的含义是该内部类可以像其他静态成员一样，没有外部类对象时，也能够访问它。静态嵌套类仅能访问外部类的静态成员和方法。

4、匿名内部类：匿名内部类就是没有名字的内部类。

匿名内部类的三种情况：

（1）继承式的匿名内部类

（2）接口式的匿名内部类

（3）参数式的匿名内部类

### 070 递归运算

方法本身调用自己

- 递归必须要有出口
- 递归内存消耗大，容易发生内存溢出
- 层次调用越多，越危险

### 071-073 数据结构之链表

链表（递归实现）

一种常见的基础数据结构，是一种线性表，但是并不会技线性的顺序存储数据，而是在每一个节点里存到是下一个节点的指针 (Pointer)

数组适合查找，遍历，固定长度

链表适合插入，删除，不宜过长，否则会导致遍历性能下降

```java
public class Test15 {
    public static void main(String[] args) {
        NodeManager nm = new NodeManager();
        nm.add(5);
        nm.add(4);
        nm.add(3);
        nm.add(2);
        nm.add(1);
        nm.add(0);
        nm.add(5);
        nm.print();
    }
}

class NodeManager {

    private Node root;// 根节点
    private int currentIndex = 0;

    public void add(int data) {
        if (root == null) {
            root = new Node(data);
        } else {
            root.addNode(data);
        }
    }

    public void del(int data) {

        if (root == null)
            return;
        if (root.getData() == data) {
            root = root.next;
        } else {
            root.delNode(data);
        }
    }

    public void print() {

        if (root != null) {
            System.out.print(root.getData() + "->");
            root.printNode();
            System.out.println();
        }
    }

    public boolean find(int data) {
        if (root == null)
            return false;
        if (root.getData() == data) {
            return true;
        } else {
            return root.findNode(data);
        }

    }

    public boolean update(int oldData, int newData) {

        if (root == null) {
            return false;
        }
        if (root.getData() == oldData) {
            root.setData(newData);
            return true;
        } else {
            return root.updateNode(oldData, newData);
        }
    }

    // 前插
    public void insert(int index, int data) {
        if (index < 0)
            return;
        currentIndex = 0;
        if (index == currentIndex) {
            Node newNode = new Node(data);
            newNode.next = root;
            root = newNode;
        } else {
            root.insertNode(index, data);
        }
    }

    private class Node {
        private int data;
        private Node next;

        public Node(int data) {
            this.data = data;
        }

        public void setData(int data) {
            this.data = data;
        }

        public int getData() {
            return data;
        }

        public void addNode(int data) {
            if (this.next == null) {
                this.next = new Node(data);
            } else {
                this.next.addNode(data);
            }
        }

        public void delNode(int data) {
            if (this.next != null) {
                if (this.next.data == data) {
                    this.next = this.next.next;
                } else {
                    this.next.delNode(data);
                }
            }

        }

        public void printNode() {

            if (this.next != null) {
                System.out.print(this.next.data + "->");
                this.next.printNode();
            }
        }

        public boolean findNode(int data) {
            if (this.next != null) {
                if (this.next.data == data) {
                    return true;
                } else {
                    return this.next.findNode(data);
                }
            }
            return false;
        }

        public boolean updateNode(int oldData, int newData) {
            if (this.next != null) {
                if (this.next.data == oldData) {
                    this.next.data = newData;
                    return true;
                } else {
                    return this.next.updateNode(oldData, newData);
                }
            }
            return false;
        }

        public void insertNode(int index, int data) {

            currentIndex++;
            if (index == currentIndex) {
                Node newNode = new Node(data);
                newNode.next = this.next;
                this.next = newNode;
            } else {
                this.next.insertNode(index, data);
            }
        }
    }
}
```

### 074 基本数据类型包装类

把基本数据类型转换为包装类，称为自动装箱

把包装类转换为基本数据类型，称为自动拆箱

### 075 包与访问修饰符

OO原则总结

（1）开闭原则

一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。

（2）合成/聚合复用原则

新对象的某些功能在已创建好的对象里己实现，那么尽量用己有对象提供的功能，使之成为新对象的一部分，而不要再重新创建。

（3）依赖倒置原则

高层模块不应该依赖低层模块，二者都应该依赖其抽象：抽象不应该依赖细节；細节应该依赖抽象。

（4）接口隔离原则

客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。

（5）迪米特法则

一个对象应该对其他对象保持最少的了解

（6）里氏替换原则

所有引用基类的地方必须能透明地使用其子类的对象

（7）单一职责原则

不要存在多于一个导致类变更的原因，即一个类只负责一项职责。

## 076-081 Eclipse

### 076 Eclipse开发工具基本使用

### 077 异常概念与简单使用

异常是阻止当前方法或作用域继续执行的问题，在程序中导致程序中断运行的一些指令。

1、 Throwable是异常的基类，分为Error和Exception，在编程中我们关注Exception

2、 Exception分为编译期异常（受检）和运行期异常（非受检）

3、异常会导致程序中断，无法继续执行

4、在开发中，我们需要把可能出现异常的代码使用try语句块包裏起来

5、处理异常可以让程序保持运行状态

6、catch可以有多个，顺序为从子类到父类，大的放后面，小的放前面

- ArithmeticException

- ArrayIndexOutOfBoundsException

- NullPointerException

- InputMismatchException

- Exception
- RuntimeException
- ClassNotFoundException
- DataFormatException
- ClassCastException

### 078 try catch finally的使用

**ExceptionDemo**

```java
public class ExceptionDemo {
    public static void main(String[] args) {
        // div(10, 2);
        method();
    }

    public static void div(int num1, int num2) {
        int[] arr = { 1, 2, 3, 4, 5 };
        try {
            System.out.println(arr[4]);
            arr = null;
            System.out.println(arr.length);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("数组下标越界");
        } catch (NullPointerException e) {
            System.out.println("数组空指针异常");
        } catch (Exception e) {
            System.out.println("出错啦");
        } finally {
            System.out.println("程序执行完毕");
        }
        System.out.println("程序运行结束");
    }

    public static int method() {
        int a = 10;
        int b = 5;
        try {
            System.out.println("a = " + a);
            System.out.println("b = " + b);
            int c = a / b;
            System.out.println("a / b = " + c);
            return c;
        } catch (Exception e) {
            // 代码测试时使用
            e.printStackTrace();
        } finally {
            System.out.println("finally.");
        }
        return -1;

    }
}

```

### 079 throw throws与异常规则

**throws**关键字主要在方法的声明上使用，表示方法中不处理异常，而交给调用处处理。实际上对于Java程序来讲，如果没有加入任何的异常处理，默认由JVM进行异常的处理操作。

**throw**关键字表示在程序中手动抛出一个异常，因为从异常处理机制来看，所有的异常一旦产生之后，实际上抛出的就是一个异常类的实例化对象，那么此对象也可以由throw直接抛出。

```java
public static int div2(int a, int b) throws ArithmeticException {
        try {
            int c = a / b;
            return c;
        } catch (ArithmeticException e) {
            throw new ArithmeticException("除数不能为零");
        } finally {
            System.out.println("运行结束");
        }
}

public static void input() {
        Scanner input = new Scanner(System.in);
        try {
            int num = input.nextInt();
            System.out.println(num);
        } catch (InputMismatchException e) {
            System.out.println("输入不匹配");
        }
}
```

### 080 自定义异常与assert

在Java中，己经提供了很多的异常类的定义，但是我们在实际项目开发中，可能需要使用一些自己的异常类，那么可以通过继承Exception类或己有的异常类的方式完成一个自定义异常类的操作。

```java
/**
 * MyException
 * 自定义异常通常都是通过继承一个异常类来实现
 * 1、 Throwable
 * 2、 Exception
 * 3、 RuntimeException
 * 自定义异常的实现是，提供构造方法
 * 异常对象本身是没有实际功能，只是一个有意义的标识
 */
public class MyException extends Exception {
    public MyException() {
        super();
    }

    public MyException(String message) {
        super(message);
    }
}
```

**受检异常：Exception**

定义方法时必须南明所有可能会抛出的exception：在调用这个方法时，必须捕获它的checked exception，不然就得把它的exception传递下去：exception是从java.lang.Exception类衍生出来的。例如：IOException,SQ LException就属于 Exception

**非受检异常：RuntimeException**

在定义方法时不需要声明会抛出runtime exception：在调用这个方法时不需要捕获这个runtime exception； runtime exception是 Mjava.lang.RuntimeException或java.lang.Error类衍生出来的。例如：Null PointException, IndexOutOfBoundsException就属于 runtime
exception

Exception与RuntimeException

Exception：受检异常，在编程期检查，在调用抛出这个异常的方法时，必须显示的使用try catch

RuntimException：非受检异常，在运行期检查，在调用抛出这个异常的方法时，可以不显示的使用try catch

在使用自定义异常时，根据实际的业务要求，来决定使用哪个父类

**assert关键字，表示断言**

当程序执行到某个固定位置的时候，程序中的某个变量的取值肯定是预期的结果，那么这种操作可以使用断言完成。

断言的操作语法：

assert 表达式；

```java
public class AssertDemo {
    public static void main(String[] args) {
        int result = add(10, 10);
        assert result == 20 : "结果不正确";
    }

    public static int add(int a, int b) {
        return a + b + 1;
    }
}

```

### 081 新特性与debug技术

## 082-096 API

### 082 String类原理分析

1、 String可以表示一个字符串。

2、 String类实际是使用字符数组存储的。

String类的两种赋值方式：

（1）一种称为直接赋值：

`String name = "小白"`

（2）通过关键字new调用 String的构造方法赋值

`String name = new String("小白")`

### 083 String常用方法介绍

- `public char charAt(int index)` 根据下表找到指定的字符
- `public char[] toCharArray()` 以字符数组的形式返回全部的字符串内容
- `public String(char[] value)` 将全部的字符数组变为字符串
- `public String(char[] value, int offset, int count)` 将指定范围内的字符数组变为字符串

### 084 StringBuffer源码分析与常用方法

StringBuffer目的是来解决字符串相加时带来的性能问题（常量与变量）

StringBuffer的内部实现采用字符数组，默认数组的长度为16，超过数组大小时，动态扩充的算法是原来长度*2+2

所以当我们预支要添加的数据长度时，建议使用带初始化容量的构造方法，来避免动态扩充的次数，从而提高效率

线程安全的，会影响性能

### 085 StringBuilder分析

StringBuffer的兄弟StringBuilder:

一个可变的字符序列。此类提供一不与 StringBuffer 兼容的 APl，但不保证同步。该类被设计用作 StringBuffer 的一个简易替换，用在字符串缓冲区被单个线程使用的时候（这种情况很普遍）。如果可能，建议优先采用该类，因为在大多数实现中，它比String Buffer要快。

###### 面试题：StringBuffer与StringBuilder的区别

StringBuffer是线程安全的，性能低，适合在多线程中使用

StringBuilder是线程不安全的，性能高，适合在单线程中使用，这种情况占大多数，在jdk1.5以后添加

字符串相加操作

1. 多个常量相加，没有性能问题，在编译器优化
2. 变量与常量相加，会产生多个垃圾对象

字符串相加，在编译后，会使用StringBuilder来优化代码，实现拼接

### 086 程序国际化Local与属性文件

###### Locale类

Locale 对象表示了特定的地理、政治和文化地区。需要 Locale 来执行其任务的操作称为语言环境敏感的操作，它使用 Locale 为用户量身定制信息。例如，显示一个数值就是语言环境敏感的操作，应该根据用户的国家、地区或文化的风俗/传统来格式化该数值。

###### 使用此类中的构造方法来创建 Locale

`Locale(String language)`

`Locale(String language, String country)`

###### 通过静态方法创建Locale

`getDefault()`

参数：语言，地区

```java
//创建一个本地语言环境对象，该对象会根据參数设置来自动选择与之相关的语言环境
//参数：语言，地区
Locale locale_CN = new Locale("zh", "CN");
Locale locale_US = new Locale("en", "US");
//获取当前系统默认的语言环境
Locale locale_default = Locale.getDefault();
```

###### ResourceBundle类

国际化的实现核心在于显示的语言上，通常的做法是将其定义成若干个属性文件（文件后缀是*.properties），属性文件中的格式采用“key=value”的格式进行操作。
ResourceBundle类表示的是一个资源文件的读取操作，所有的资源文件需要使用ResourceBundle进行读取，读取的时候不需要加上文件的后缀。
`getBundle(String baseName)`
`getBundle(String baseName,Locale locale)`
`getstring(String key)`

```properties
//info_en_US.properties

system.name=EMS Manager
input.username=Input UserName I
input.password=Input Password
login.success=Login Success!
login.error=Login Error
```

```properties
//info_zh_CN.properties

system.name=\u5458\u5DE5\u7BA1\u7406\u7CFB\u7EDF
input.username=\u8F93\u5165\u7528\u6237\u540D
input.password=\u8F93\u5165\u5BC6\u7801
login.success=\u767B\u5F55\u6210\u529F
login.error=\u767B\u5F55\u9519\u8BEF
```

### 087 程序国际化ResourceBundle与动态文本处理

```java
ResourceBundle r = ResourceBundle.getBundle("com.vince.info", locale_US);
System.out.printIn(r.getString("system.name"));
System.out.printIn(r.getString("input.username"));
String username = input.nextLine();
System.out.println(r.getString("input.password"));
String password = input. nextLine();
```

动态文本处理

```properties
//info_en_US.properties

system.name=EMS Manager
input.username=Input UserName I
input.password=Input Password
login.success=Login Success!
login.error=Login Error
welcome=welcome, {0}
```

```java
if("admin".equals(username) && "123".equals(password)){
 System.out.println(r.getString("login.success"));
 String welcome = r.getString("welcome");
  //动态文本格式化
 String welcome = MessageFormat.format(welcome, username);
 System.out.println(welcome);
}else {
 System.out.println(r.getString("login.error"));
}
```

### 088 Math与Random类
