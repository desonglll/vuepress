---
title: 千锋Python学习
date: 2022/08/16/ 11:28:44
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
cover: https://pic.3gbizhi.com/2020/1106/thumb_1680_0_20201106023719291.jpg

---

## P9 Python基础实战8-类型转换

```python
one = input('输入第一个数：)
two = input('输入第二个数：)
# 进行计算
print (one + two)
# 转换
print (int (one) + int (two)) # 150
print (float (one) + float (two)) # 150.0
# 差
print (int(one) int(two)) # 50
print (float (one) float (two)) # 50.0
```

以变量名：a

str---> int   int(a) 但是如果'9.9'而且是字符串类型转成int的时候报错了

str---> float  float (a)

int--->str   str(a)

float----> str  str(a)

int---> float   float(a)

float---> int   int(a) 只不过float类型中小数点后面的数字被抹掉了

```python
flag = True
# bool----> int
print (int(flag))
print (float (flag))
print (str(flag))   # 'True'
```

能否将a转成bool

```python
a = 2
print (bool(a))
a = 0
print(bool(a))
a = ''
print(bool(a))

# 变量的值是：0, '',转换结果是false
```

## P10 Python基础实战9-算术运算符

```python
a = 1
b = 2

c = a + b

# print (a, b, 1000, 10000, sep='#')
# print (a, b, c, end='\n') # 1 2 3   表示末尾换行
print(a, b, c)
```

`/`表示除法

`//`表示整除

`*`表示乘法

`**`表示幂

`%`表示取模（取余）

## P11 Python基础实战10-赋值运算符

```python
a = 8
b = 4

c = a + 1

a += 1   # a = a + 1
b -= 2   # b = b - 2

d = 3
b //= d   # b = b // d
```

## P12 Python基础实战11-比较（关系）运算符

结果True或False

`> < >= <= == != is`

```python
a = 10
b = 23

print (a > b) # False
print (a < b) # True

print (a == b) # False
print (a != b) # True
```
