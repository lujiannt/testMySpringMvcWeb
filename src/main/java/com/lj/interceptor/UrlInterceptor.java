package com.lj.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UrlInterceptor implements HandlerInterceptor {

    /**
     * 进入方法前校验 （用于校验权限等等）
     *
     * @param arg0
     * @param arg1
     * @param arg2
     * @param arg3
     * @throws Exception
     * @author lujian
     * @create 2018年7月17日
     */
    @Override
    public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object obj) throws Exception {
        String uri = req.getRequestURI();

        if (uri.indexOf("login") >= 0) {
            return true;
        }

        req.getRequestDispatcher("/WEB-INF/index.jsp").forward(req, res);
        return false;
    }

    /**
     * 进入方法后结束方法前
     *
     * @param arg0
     * @param arg1
     * @param arg2
     * @param arg3
     * @throws Exception
     * @author lujian
     * @create 2018年7月17日
     */
    @Override
    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
            throws Exception {
        // TODO Auto-generated method stub

    }

    /**
     * 进入方法后（用于添加日志等等）
     *
     * @param arg0
     * @param arg1
     * @param arg2
     * @param arg3
     * @throws Exception
     * @author lujian
     * @create 2018年7月17日
     */
    @Override
    public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
            throws Exception {
        // TODO Auto-generated method stub

    }

}
