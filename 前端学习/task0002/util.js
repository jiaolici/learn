// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    if(arr.constructor === Array)
    {
        return true;
    }
    else{
        return false
    }
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    if(typeof fn==="function")
    {
        return true;
    }
    else
    {
        return false;
    }
}
a=["a","b"]
console.log(isArray(a));