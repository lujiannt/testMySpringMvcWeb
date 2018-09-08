package com.lj.controller;

import com.lj.model.Hello;
import com.lj.service.HelloService;
import com.lj.utils.ExcelUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;

@RequestMapping("/hello")
@Controller
public class HelloController {
    @Resource
    private HelloService helloService;

    @RequestMapping("/home")
    public String home() {
        return "home";
    }

    @RequestMapping("/page1")
    public String page1() {
        return "hello/page1";
    }

    @RequestMapping("/page2")
    public String page2() {
        return "hello/page2";
    }

    @RequestMapping("/page3")
    public String page3() {
        return "hello/page3";
    }

    @RequestMapping("/hello")
    public String hello() {
        Hello hello = helloService.getHelloById(1);
        System.out.println(hello.toString());
        return "hello/hello";
    }

    /**
     * 导出excel
     *
     * @return
     */
    @RequestMapping("/export")
    public void export(HttpServletRequest request, HttpServletResponse response) {
        //excel标题
        String[] title = {"hello"};

        //excel文件名
        String fileName = "" + System.currentTimeMillis() + ".xls";

        //sheet名
        String sheetName = "测试";

        String content[][] = new String[1][1];

        content[0][0] = "hello1";


        //创建HSSFWorkbook
        HSSFWorkbook wb = ExcelUtil.getHSSFWorkbook(sheetName, title, content, null);

        //响应到客户端
        try {
            response = this.setResponseHeader(response, fileName);
            OutputStream os = response.getOutputStream();
//            FileOutputStream fileOutputStream = new FileOutputStream("F:\\xxxx.xls");
            wb.write(os);
//            wb.write(fileOutputStream);
            os.flush();
            os.close();
//            fileOutputStream.flush();
//            fileOutputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //发送响应流方法
    public HttpServletResponse setResponseHeader(HttpServletResponse response, String fileName) {
        try {
            try {
                fileName = new String(fileName.getBytes(), "ISO-8859-1");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            response.setContentType("application/octet-stream;charset=ISO-8859-1");
            response.setHeader("Content-Disposition", "attachment;filename=" + fileName);
            response.addHeader("Pargam", "no-cache");
            response.addHeader("Cache-Control", "no-cache");

        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            return response;
        }
    }

}
