# js-utils-common  
常用的js方法，包含数组、elementUI、时间、校验、vue等相关方法  
## 目录  
- [安装](#安装)  
- [使用](#使用)  
- [方法](#方法)  
  - [数组相关方法](#数组相关方法)   
    - [sliceArrByNum分割数组](#slicearrbynumarr-num)  
    - [arrGroupBy根据指定key对数组分组](#arrgroupbyarr-key) 
    - [objArrayDuplicateByKey根据指定的key对数组去重](#objarrayduplicatebykeyarr-key)
    - [getCountOccurrences获取数组中某一项出现的次数](#getcountoccurrencesarr-item-index)
    - [arrItemUpGo将数组中指定位置元素前移一位](#arritemupgoarr-index)  
    - [arrItemDownGo将数组中指定位置元素后移一位](#arritemdowngoarr-index)
    - [arrAverageNum求给定数组的平均值](#arraveragenumarr)  
    - [getStandardDeviation求给定数组的标准差（离散程度）](#getstandarddeviationarr)   
    - [getArrDifference两个数组对比取出不同的值](#getarrdifferencearra-arrb)    
    - [getDifFromToArrByKey获取与数组1中指定key的值不一样的数组2的项目集合](#getdiffromtoarrbykeyarr1-arr2-keyname)
    - [getConcatFromTwoArrByKey根据指定的key获取两个数组的并集](#getconcatfromtwoarrbykeyarr1-arr2-keyname)            
- [写在最后](#写在最后)  
## 安装  
```sh
$ npm install --save js-utils-common
```  
## 使用  
#### 在Vue项目中使用
```sh
import Main from 'js-utils-common';
Main.functionName();
```  
#### 以JS文件方式引用
```sh
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="unpkg.com/js-utils-common/lib/index.js"></script>
window.myJsUtils.functionName()
```  
## 方法  
### 数组相关方法  
#### ***sliceArrByNum(arr, num)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4];
let num = 3;
let returnArr = Main.sliceArrByNum(arr, num);
console.log(returnArr); //[[1, 2, 3], [4]]
```  
- *方法介绍*  
根据传入的num，将指定数组按照每num为一份进行分割，返回分割好的数组  
- *参数介绍*  
1. arr：要分割的数组  
2. num：几个元素为一份  
- *返回值*  
分割好的数组[Array]
- *注意事项*  
无
#### ***arrGroupBy(arr, key)***  
- *示例*  
```sh
let arr = [
    {
        name: 1,
        value: 2
    },
    {
        name: 1,
        value: 3
    },
    {
        name: 2,
        value: 4
    }
];

/**
[
     [
         {
             name: 1,
             value: 2
         },
         {
             name: 1,
             value: 3
         },
     ],
     [
         {
            name: 2,
            value: 4
         }
     ]
]
*/
console.log(Main.arrGroupBy(arr, 'name')); 
```  
- *方法介绍*  
根据指定key对数组分组
- *参数介绍*  
1. arr：数组  
2. key: 数组中项目的key
- *返回值*  
分好组的数组[Array]
- *注意事项*  
1. 只适用于由Object构成的复杂数组
#### ***objArrayDuplicateByKey(arr, key)***  
- *示例*  
```sh
let arr = [
    {
        name: 1,
        value: 2
    },
    {
        name: 1,
        value: 2
    },
    {
        name: 1,
        value: 3
    },
    {
        name: 2,
        value: 3
    }
];

/**
[
    {
        name: 1,
        value: 2
    },
    {
        name: 2,
        value: 3
    }
]
*/
console.log(Main.objArrayDuplicateByKey(arr, 'name'));
```  
- *方法介绍*  
根据指定的key，对数组去重
- *参数介绍*  
1. arr：数组  
2. key：数组中项目的key  
- *返回值*  
去重后的数组[Number]
- *注意事项*  
1. 只适用于由Object构成的复杂数组
2. 只要key对应的值相同，就当该项目重复
3. 相同的保留最靠前的一个
#### ***getCountOccurrences(arr, item, index)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 3, 3, 2, 2, 4, 3];
console.log(Main.getCountOccurrences(arr, 2, 1)); //1
console.log(Main.getCountOccurrences(arr, 2, 3)); //0
console.log(Main.getCountOccurrences(arr, 2, 5)); //2
```  
- *方法介绍*  
根据传入的数组下标和数组中某项，获得该项出现的次数，只记从下标处开始，前后中相邻的该项目的次数，包括下标  
- *参数介绍*  
1. arr：数组  
2. item：数组中的项目  
3. index：数组的下标  
- *返回值*  
出现次数[Number]
- *注意事项*  
1. 此方法仅适用于简单数组  
#### ***arrItemUpGo(arr, index)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 5, 6];
Main.arrItemUpGo(arr, 2);
console.log(arr); //[1, 3, 2, 4, 5, 6]
```  
- *方法介绍*  
将数组中指定位置元素前移一位，直接修改数组   
- *参数介绍*  
1. arr：数组  
2. index：数组的下标  
- *返回值*  
无
- *注意事项*  
无
#### ***arrItemDownGo(arr, index)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 5, 6];
Main.arrItemDownGo(arr, 2);
console.log(arr); //[1, 2, 4, 3, 5, 6]
```  
- *方法介绍*  
将数组中指定位置元素后移一位，直接修改数组
- *参数介绍*  
1. arr：数组  
2. index：数组的下标  
- *返回值*  
无
- *注意事项*  
无
#### ***arrAverageNum(arr)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 5, 6];
console.log(Main.arrAverageNum(arr)); //3.5
```  
- *方法介绍*  
求给定数组的平均值
- *参数介绍*  
1. arr：数组  
- *返回值*  
平均值[Number]
- *注意事项*  
1. 只适用于由Number构成的简单数组
#### ***getStandardDeviation(arr)***  
- *示例*  
```sh
let arr = [3, 3, 3, 3, 3, 3];
console.log(Main.getStandardDeviation(arr)); //0
```  
- *方法介绍*  
求给定数组的标准差（离散程度）
- *参数介绍*  
1. arr：数组  
- *返回值*  
数组的标准差[Number]
- *注意事项*  
1. 只适用于由Number构成的简单数组
#### ***getArrDifference(arrA, arrB)***  
- *示例*  
```sh
let arr1 = [3, 4, 2, 3, 3, 3];
let arr2 = [3, 4, 2, 3, 5, 6];
console.log(Main.getArrDifference(arr1, arr2)); //0
```  
- *方法介绍*  
两个数组对比，取出不同的值
- *参数介绍*  
1. arrA：数组1  
2. arrB：数组2  
- *返回值*  
不同值的数组[Array]
- *注意事项*  
1. 只适用于简单数组
#### ***getDifFromToArrByKey(arr1, arr2, keyName)***  
- *示例*  
```sh
let arr1 = [
    {
        name: 1,
        value: 2
    },
    {
        name: 2,
        value: 3
    }
];
let arr2 = [
    {
        name: 2,
        value: 2
    },
    {
        value: 3
    }
];
console.log(Main.getDifFromToArrByKey(arr1, arr2, 'name')); //[{value: 3}]
```  
- *方法介绍*  
根据指定key，获取与数组1中指定key的值不一样的数组2的项目集合
- *参数介绍*  
1. arr1：数组1  
2. arr2：数组2  
3. keyName：数组中项目的key  
- *返回值*  
不同项目的数组[Array]
- *注意事项*  
1. 只适用于Object组成的复杂数组
2. 数组1是参照数组，处理的是数组2
3. 只要key对应的值相同，就当该项目相同
#### ***getConcatFromTwoArrByKey(arr1, arr2, keyName)***  
- *示例*  
```sh
let arr1 = [
    {
        name: 1,
        value: 2
    },
    {
        name: 2,
        value: 4
    }
];
let arr2 = [
    {
        name: 1,
        value: 3
    },
    {
        name: 3
        value: 5
    }
];
console.log(Main.getConcatFromTwoArrByKey(arr1, arr2, 'name'));
```  
- *方法介绍*  
根据指定的key，获取两个数组的并集
- *参数介绍*  
1. arr1：数组1  
2. arr2：数组2  
3. keyName：数组中项目的key  
- *返回值*  
两个数组的并集[Array]
- *注意事项*  
1. 只适用于由Object构成的复杂数组
2. 只要key对应的值相同，就当该项目重复
3. 相同的子项，只保留arr1中最靠前的
## 写在最后  
个人开发和维护，有需求或者bug请联系我的邮箱，看到后会第一时间回复   
Email：323247568@qq.com   
<img alt="支持一下！" src="https://raw.githubusercontent.com/fcfcfc/myImg/master/wx.jpg" width="150px"/>
<img alt="支持一下！" src="https://raw.githubusercontent.com/fcfcfc/myImg/master/zfb.jpg" width="150px"/>
