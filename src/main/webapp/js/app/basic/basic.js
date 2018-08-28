define(["jquery", "alert"], function () {
    var basicJs = {};

    /**
     * --------------------------------------------------------------------------
     * test hello
     *
     * --------------------------------------------------------------------------
     */
    basicJs.showHello = function () {
        console.log("hello basic!");
    }


    /**
     * --------------------------------------------------------------------------
     * 提示框、alert框、模态框等
     *
     * --------------------------------------------------------------------------
     */
    var M = {};
    //可自动消失提示框
    basicJs.showTip = function (content, timeout) {
        M.dialog1 = jqueryAlert({
            'content': content,
            'closeTime': timeout
        });

        return M.dialog1.show();
    }
    //alert框
    basicJs.showAlert = function (content) {
        M.dialog2 = jqueryAlert({
            'content': content,
            'modal': true,
            'height': '120',
            'buttons': {
                '确定': function () {
                    M.dialog2.close();
                }
            }
        });

        return M.dialog2.show();
    }
    //协议框
    basicJs.showProtocol = function (content, successContent, callback) {
        M.dialog3 = jqueryAlert({
            'content': content,
            'modal': true,
            'contentTextAlign': 'left',
            'width': '450px',
            'animateType': 'linear',
            'buttons': {
                '不同意': function () {
                    M.dialog3.close();
                },
                '同意': function () {
                    basicJs.showTip(successContent, 1000);
                    jQuery.isFunction(callback) ? callback() : console.log("callback fail");
                    M.dialog3.close();
                }
            }
        });

        return M.dialog3.show();
    }
    //iframe框
    basicJs.showIframe = function (title, content) {
        M.dialog4 = jqueryAlert({
            'style': 'pc',
            'title': title,
            'content': content,
            'modal': true,
            'contentTextAlign': 'left',
            'width': '400',
            'height': '300',
            'animateType': 'linear',
            'buttons': {
                '关闭': function () {
                    M.dialog4.close();
                },
            }
        });

        return M.dialog4.show();
    }


    /**
     * --------------------------------------------------------------------------
     * 其他
     *
     * --------------------------------------------------------------------------
     */
    //页面跳转
    basicJs.windowLoaction = function (url) {
        window.location.href = url;
    }
    //控制台打印信息
    basicJs.printf = function (content) {
        console.log(content);
    }


    return {
        "basicJs": basicJs
    }
});