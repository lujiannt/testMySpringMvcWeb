package com.lj.controller;

import com.lj.model.User;
import com.lj.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("user")
public class UserController {
    @Resource
    private UserService userService;

    @RequestMapping("/login")
    public ModelAndView login(HttpSession session, User user) {
        ModelAndView view = new ModelAndView();
        User loginUser = userService.findUser(user);

        if (user != null) {
            session.setAttribute("user", loginUser);
            view.setViewName("redirect: loginToIndex");
        } else {
            view.addObject("errInfo", "账号或密码错误");
            view.setViewName("login");
        }

        return view;
    }

    @RequestMapping("/loginToIndex")
    public String loginToIndex(HttpSession session, User user) {
        return "index";
    }

}
