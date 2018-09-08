package com.lj.mapper;

import com.lj.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UserMapper {

    User findUser(User user);

    List<User> selectUserByCondition(Map<String, Object> params, int pageNo, int pageSize);
}
