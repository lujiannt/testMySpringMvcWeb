requirejs.config({
    "baseUrl": "/js/lib",
    "paths": {
        "app": "../app"
    },
    //处理没有遵循AMD规范的js
    "shim": {
        "map": ["jquery"],
        "alert": ["jquery"],
        "helloEX": {
            //设置依赖
            deps: ["jquery"],
            //定义返回对象，这里funTest一定要和funs.js中要返回的变量名相同
            exports: "helloEX"
        }
    }
});
