# jsUtils  

常用的js方法，包含数组、elementUI、时间、校验、vue等相关方法  

## 目录  

- [安装](#安装)  
- [使用](#使用)  
- [方法](#方法)  
  - [数组相关方法](#数组相关方法)   
    - [sliceArrByNum](#slicearrbynumarr-num)  
    
## 安装  

```sh
$ npm install --save @fcfc1992/js-utils
```  

## 使用  

```sh
import Main from '@fcfc1992/js-utils';

Main.functionName();
```  

## 方法  

### 数组相关方法  

#### ***sliceArrByNum(arr, num)***  
  
- *方法介绍*  

根据传入的num，将指定数组按照每num为一份进行分割，返回分割好的数组  

- *参数介绍*  

1. arr：要分割的数组  
2. num：几个元素为一份  

- *示例*  

```sh
let arr = [1,2,3,4];
let num = 3;
let returnArr = Main.sliceArrByNum(arr, num);
console.log(returnArr); //[[1,2,3],[4]]
```  

- *注意事项*  

1. 此方法仅适用于简单数组  
