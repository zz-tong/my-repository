//这里面就是封装常用的代码的js代码
var kits = {}
//封装一个获取指定区间的随机整数的方法
kits.randonInt = function (n, m) {
    // 返回向下取整的随机数公式
    return Math.floor(Math.random()*(m-n+1)+n);
}
