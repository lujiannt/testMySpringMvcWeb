<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>

    <jsp:include page="../header.jsp"/>
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
                <h1>hello</h1>
            </div>
        </div>
    </div>
</div>

</body>
</html>