require(["app/basic/basic"], function (basic) {
    var basicJs = basic.basicJs;
    //导出excel
    $(".textExportButton").bind("click", function () {
        basicJs.windowLoaction("/hello/export");
    });
})