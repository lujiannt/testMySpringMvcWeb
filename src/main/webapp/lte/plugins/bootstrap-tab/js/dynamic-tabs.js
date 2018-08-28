//TODO 1.弹出框，警告栏
//TODO 2.左侧菜单树由json生成
//TODO 3.搭建后台框架
//TODO 4.表格分页demo(使用json动态生成，编辑删除等功能也是这样，不是在页面上写的那种)-----DemoController demo.js demo.jsp(写个一整套的demo)
//tab标签及主页其他相关样式功能
$(function () {
    //加载json菜单
    $.getJSON({
        type: "post",
        url: getPath() + "/test.json",
        success: function (data) {
            $.each(data, function (index, field) {
                var parentLi = $("<li />", {
                    "class": "nav-item has-treeview"
                });

                var parentA = $("<a />", {
                    "href": "#",
                    "class": "nav-link"
                });

                var parentI = $("<i />", {
                    "class": "nav-icon fa fa-pie-chart"
                });

                var parentP = $("<p />", {});

                var parentTitle = field.title;

                var parentI2 = $("<i />", {
                    "class": "right fa fa-angle-left"
                });

                var parentUl = $("<ul />", {
                    "class": "nav nav-treeview"
                });


                parentP.append(parentTitle);
                parentP.append(parentI2);
                parentA.append(parentI);
                parentA.append(parentP);
                parentLi.append(parentA);
                parentLi.append(parentUl);

                $.each(field.children, function (childIndex, childField) {
                    var li = $("<li />", {
                        "class": "nav-item"
                    });

                    var a = $("<a />", {
                        "tabId": childField.tabId,
                        "title": childField.title,
                        "url": childField.url,
                        "href": "#",
                        "class": "nav-link nav-link-url",
                        "click": function () {
                            var option = {
                                "id": $(this).attr("tabId"),
                                "title": $(this).attr("title"),
                                "url": $(this).attr("url")
                            }

                            addTabsPills(option);
                        }
                    });

                    var i = $("<i />", {
                        "class": "fa fa-circle-o nav-icon"
                    });

                    var p = $("<p />", {});

                    p.append(childField.title);
                    a.append(i);
                    a.append(p);
                    li.append(a);
                    parentUl.append(li);
                });

                $("#menuNav").append(parentLi);
            });
        }
    });

    //最多标签页
    var maxTabsNum = 3;

    //显示tab
    var showTab = function (option) {
        $(".nav-link-tab").removeClass("active");
        $(".nav-link-tab").removeClass("activeTab");
        $(".tab_row").hide();
        $("#tab_" + option.id).addClass("active");
        $("#tab_" + option.id).addClass("activeTab");
        $("#tab_row_" + option.id).show();
    }

    //新增tab
    var addTabsPills = function (option) {
        var opentabs = $(".nav-link-tab");

        if ($("#tab_" + option.id)[0] == null) {
            if ((opentabs.length + 1) > maxTabsNum) {
                alert("最多" + maxTabsNum + "个标签页");
            } else {
                var a = $("<a />", {
                    "id": "tab_" + option.id,
                    "href": "#",
                    "class": "nav-link nav-item nav-link-tab",
                    "data-toggle": "tab",
                    "text": option.title,
                    "tabUrl": option.url,
                    "optionId": option.id,
                    "click": function () {
                        $(".nav-link-tab").removeClass("active");
                        $(".nav-link-tab").removeClass("activeTab");
                        $(".tab_row").hide();
                        $("#tab_" + option.id).addClass("active");
                        $("#tab_" + option.id).addClass("activeTab");
                        $("#tab_row_" + option.id).show();
                    }
                });

                var icon = $("<i />", {
                    "class": "icon iconfont icon-aui-icon-close",
                    "mouseenter": function () {
                        $(this).attr("class", "icon iconfont icon-close");
                    },
                    "mouseout": function () {
                        $(this).attr("class", "icon iconfont icon-aui-icon-close");
                    },
                    "click": function () {
                        clearTab(option);
                    }
                });

                var div = $("<div />", {
                    "id": "tab_row_" + option.id,
                    "optionId": option.id,
                    "class": "col-sm-12 tab_row",
                    "style": "width:" + $(".tabContent").width + "px;height:560px"
                });

                var iframe = $("<iframe />", {
                    "id": "tab_iframe_" + option.id,
                    "src": option.url,
                    "class": "tab_iframe",
                    "scrolling": "auto",
                    "frameborder": "0",
                    "onload": "this.height=this.contentWindow.document.documentElement.scrollHeight"

                });

                a.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                a.append(icon);
                $("#tabs-caozuo").before(a);

                $(".tab_row").hide();
                div.append(iframe);
                $("#tabContent").append(div);

                showTab(option);
            }
        } else {
            showTab(option);
        }
    }

    //删除tab
    var clearTab = function (option) {
        var tabs = $(".nav-link-tab");
        var activetabs = $(".activeTab");
        var length = tabs.length - 1;
        var flag = true;

        //1.判断当前tab数量,如果为0直接跳到主页不做任何操作，如果为1，删除后也跳到主页
        //2.如果大于1.则判断是否有被选中的tab页
        //3.没有的话将删除掉所要删的tab后的最后一个tab指定为选中状态
        //4.如果有已选中的tab，判断是否是要删除的那个，如果是走3
        //5.如果不是，删除掉要删的tab后，其余不变
        if (length == 0) {
            $(".nav-link-tab").removeClass("active");
            $("#tab_" + option.id).remove();
            $("#tab_row_" + option.id).remove();
            $("#tab_row_home").show();
        } else {
            if (activetabs.length == 1) {
                $.each(activetabs, function (index, value) {
                    if ($(this).attr("id") != ("tab_" + option.id)) {
                        $("#tab_" + option.id).remove();
                        $("#tab_row_" + option.id).remove();
                        flag = false;
                    }
                });
            }

            if (flag) {
                $(".nav-link-tab").removeClass("active");
                $(".tab_row").hide();
                $("#tab_" + option.id).remove();
                $("#tab_row_" + option.id).remove();

                var newtabs = $(".nav-link-tab");
                $.each(newtabs, function (index, value) {
                    if (index == length - 1) {
                        $("#tab_" + $(this).attr('optionId')).addClass("active");
                        $("#tab_row_" + $(this).attr('optionId')).show();
                    }
                });
            }
        }
    }

    //获取项目路径 https://www.cnblogs.com/haimishasha/p/6209413.html
    function getPath() {
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0, pos);
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
//		var realPath=localhostPaht+projectName;
        var realPath = localhostPaht;

        return realPath;
    }

    //----------------------------业务实现-------------------------------
    //点击主页
    $(".homeTab").bind("click", function () {
        $(".nav-link-tab").removeClass("active");
        $(".tab_row").hide();
        $("#tab_row_home").show();
        var target = $("#tab_iframe_home");
        target.attr("src", $(this).attr("home.jsp"));
    });

    //点击菜单链接显示tab和content
    $(".nav-link-url").bind("click", function () {
        var option = {
            "id": $(this).attr("tabId"),
            "title": $(this).attr("title"),
            "url": $(this).attr("url")
        }

        addTabsPills(option);
    });

    //刷新当前页
    $("#refreshTab").bind("click", function () {
        var activetabs = $(".activeTab");
        if (activetabs.length == 1) {
            $.each(activetabs, function (index, value) {
                var optionId = $(this).attr("optionId");
                var target = $("#tab_iframe_" + optionId);
                target.attr("src", $(this).attr("tabUrl"));
            });
        }
    })
});
