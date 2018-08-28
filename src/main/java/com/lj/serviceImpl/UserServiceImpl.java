package com.lj.serviceImpl;

import com.lj.mapper.UserMapper;
import com.lj.model.User;
import com.lj.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public User findUser(User user) {
        return userMapper.findUser(user);
    }

}
