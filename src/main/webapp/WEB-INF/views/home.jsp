<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <jsp:include page="header.jsp"/>

    <script data-main="/js/main" src="/js/lib/require.js"></script>
    <script>
        requirejs(["app/hello/hello"]);
    </script>
</head>
<body>
<div class="content-header">
</div>

<div class="content">
    <div class="row" style="width:100%;margin-left:5px;margin-right:5px">
        <div class="col-sm-12 tab_row">
            <div class="card">
                <h1>home</h1>


                <fieldset class="m20 fieldset">
                    <legend>实例演示</legend>
                    <button class="alert-api-button alert-btn1">提示</button>
                    <button class="alert-api-button alert-btn2">按钮1</button>
                    <button class="alert-api-button alert-btn3">按钮2</button>
                    <button class="alert-api-button alert-btn4">不使用动画</button>
                    <button class="alert-api-button alert-btn5">动画2</button>
                    <button class="alert-api-button alert-btn6">捕获页</button>
                    <button class="alert-api-button alert-btn7">iframe层</button>
                    <button class="alert-api-button alert-btn9">pc弹层</button>
                </fieldset>

            </div>
        </div>
    </div>
</div>

</body>
</html>