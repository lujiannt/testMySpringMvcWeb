<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Page1</title>

    <jsp:include page="../header.jsp"/>

    <script data-main="/js/main" src="/js/lib/require.js"></script>
    <script type="text/javascript">
        requirejs(["app/hello/hello"]);
        requirejs(["app/user/user"]);

        var i = 0;

        function addI() {
            i++;
            console.log("i=" + i);
        }

        function funsad() {
            $("#hee2").html("hello world");
        }
    </script>
</head>
<body>
<div class="content-header">
</div>

<div class="content">
    <div class="row" style="width:100%;margin-left:5px;margin-right:5px">
        <div class="col-sm-12 tab_row">
            <div class="card">
                <h2 id="hee2" onclick="funsad()">click me</h2>
                <h2 onclick="addI()">i++</h2>
                <button class="textExportButton">导出</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>