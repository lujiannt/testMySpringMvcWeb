package com.lj.mapper;

import com.lj.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {

    User findUser(User user);

}
