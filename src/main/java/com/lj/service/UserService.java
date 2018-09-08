package com.lj.service;

import com.github.pagehelper.PageInfo;
import com.lj.model.User;

import java.util.Map;

public interface UserService {
    /**
     * 查找user
     *
     * @param user
     * @return
     */
    User findUser(User user);

    /**
     * user列表
     *
     * @param params
     * @param pageNo
     * @param pageSize
     * @return
     */
    PageInfo<User> queryUserByCondition(Map<String, Object> params, int pageNo, int pageSize);
}
