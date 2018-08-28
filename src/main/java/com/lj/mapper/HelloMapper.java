package com.lj.mapper;

import com.lj.model.Hello;
import org.springframework.stereotype.Repository;

@Repository
public interface HelloMapper {

    Hello getHelloById(int id);

}
