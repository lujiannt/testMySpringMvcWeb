package com.lj.serviceImpl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lj.mapper.UserMapper;
import com.lj.model.User;
import com.lj.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public User findUser(User user) {
        return userMapper.findUser(user);
    }

    @Override
    public PageInfo<User> queryUserByCondition(Map<String, Object> params, int pageNo, int pageSize) {
        PageHelper.startPage(pageNo, pageSize);
        List<User> list = userMapper.selectUserByCondition(params, pageNo, pageSize);
        PageInfo<User> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }
}
