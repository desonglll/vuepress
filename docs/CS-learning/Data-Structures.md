---
title: 数据结构代码
date: 2022/07/10/ 11:29:34
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
cover: 
---

## Currently, we have visualizations for the following data structures and algorithms

[[toc]]

## Basics

### Stack: Array Implementation

### Stack: Linked List Implementation

### Queues: Array Implementation

### Queues: Linked List Implementation

### Lists: Array Implementation (available in java version)

### Lists: Linked List Implementation (available in java version)

## Recursion

### Factorial

### Reversing a String

### N-Queens Problem

## Indexing

### Binary and Linear Search (of sorted list)

### Binary Search Trees

### AVL Trees (Balanced binary search trees)

### Red-Black Trees

### Splay Trees

### Open Hash Tables (Closed Addressing)

### Closed Hash Tables (Open Addressing)

### Closed Hash Tables, using buckets

### Trie (Prefix Tree, 26-ary Tree)

### Radix Tree (Compact Trie)

### Ternary Search Tree (Trie with BST of children)

### B Trees

### B+ Trees

## Sorting

### Comparison Sorting

#### Bubble Sort

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

#### Selection Sort

```java
    /* Selection sort class. */
    public class SelectionSort_Class {
        public static void selection_sort(int[] x, int start) {
            if (start == x.length)
                return;
            int smallIndex = findSmallest(x, start);
            swap(x, start, smallIndex);
            selection_sort(x, start += 1);
        }

        public static int findSmallest(int[] x, int start) {
            int smallIndex = start;
            for (int i = start; i < x.length; i++) {
                if (x[i] < x[smallIndex])
                    smallIndex = i;
            }
            return smallIndex;
        }

        // Swap item a with b.
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

```

#### Insertion Sort

```java
    /* Insertion sort class. */
    public class InsertionSort_Class {
      
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
      
        public static void insertion_sort(int[] x) {
            for (int i = 0; i < x.length; i++) {
                int smallIndex = findSmallest(x, i);
                swap(x, i, smallIndex);
            }
        }

        /* Finds the index of the smallest one. */
        public static int findSmallest(int[] x, int start) {
            int smallIndex = start;
            for (int i = start; i < x.length; i++) {
                if (x[i] < x[smallIndex])
                    smallIndex = i;
            }
            return smallIndex;
        }

        /* Swap item a and b. */
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

```

#### Shell Sort

#### Merge Sort

#### Quick Sort

```java
 /* Quick sort class. */
    public class QuickSort_Class {
        public static void quick_sort(int[] x, int left, int right) {
            int i = left;
            int j = right;
            int pivot = (x[i] + x[j]) / 2;
            while (i <= j) {
                while (x[i] < pivot)
                    i++;
                while (x[j] > pivot)
                    j--;
                if (i <= j) {
                    swap(x, i, j);
                    i++;
                    j--;
                }

            }
            if (left < j)
                quick_sort(x, left, j);
            if (i < right)
                quick_sort(x, i, right);
        }

        /* Swap item a and b. */
        public static void swap(int[] x, int a, int b) {
            int temp = x[a];
            x[a] = x[b];
            x[b] = temp;
        }
    }

```

### Bucket Sort

### Counting Sort

### Radix Sort

### Heap Sort

## Heap-like Data Structures

### Heaps

### Binomial Queues

### Fibonacci Heaps

### Leftist Heaps

### Skew Heaps

## Graph Algorithms

### Breadth-First Search

### Depth-First Search

### Connected Components

### Dijkstra's Shortest Path

### Prim's Minimum Cost Spanning Tree

### Topological Sort (Using Indegree array)

### Topological Sort (Using DFS)

### Floyd-Warshall (all pairs shortest paths)

### Kruskal Minimum Cost Spanning Tree Algorithm

## Dynamic Programming

### Calculating nth Fibonacci number

### Making Change

### Longest Common Subsequence

## Geometric Algorithms

### 2D Rotation and Scale Matrices

### 2D Rotation and Translation Matrices

### 2D Changing Coordinate Systems

### 3D Rotation and Scale Matrices

### 3D Changing Coordinate Systems

## Others

### Disjoint Sets

### Huffman Coding (available in java version)
