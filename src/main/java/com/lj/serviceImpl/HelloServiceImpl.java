package com.lj.serviceImpl;

import com.lj.mapper.HelloMapper;
import com.lj.model.Hello;
import com.lj.service.HelloService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("helloService")
public class HelloServiceImpl implements HelloService {
    @Resource
    private HelloMapper helloMapper;

    @Override
    public Hello getHelloById(int id) {
        return helloMapper.getHelloById(id);
    }

}
