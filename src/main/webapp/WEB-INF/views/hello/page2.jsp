<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Page2</title>
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
    <div class="row" style="margin-left:5px;margin-right:5px">
        <div class="col-sm-12 tab_row" id="tab_row_home">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">alert</h3>
                </div>
                <fieldset class="m20 fieldset">
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

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">page2</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table class="table table-bordered">
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>Task</th>
                            <th>Progress</th>
                            <th style="width: 40px">Label</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Update software</td>
                            <td>
                                <div class="progress progress-xs">
                                    <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                                </div>
                            </td>
                            <td><span class="badge bg-danger">55%</span></td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Clean database</td>
                            <td>
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-warning" style="width: 70%"></div>
                                </div>
                            </td>
                            <td><span class="badge bg-warning">70%</span></td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Cron job running</td>
                            <td>
                                <div class="progress progress-xs progress-striped active">
                                    <div class="progress-bar bg-primary" style="width: 30%"></div>
                                </div>
                            </td>
                            <td><span class="badge bg-primary">30%</span></td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Fix and squish bugs</td>
                            <td>
                                <div class="progress progress-xs progress-striped active">
                                    <div class="progress-bar bg-success" style="width: 90%"></div>
                                </div>
                            </td>
                            <td><span class="badge bg-success">90%</span></td>
                        </tr>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <ul class="pagination pagination-sm m-0 float-right">
                        <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>