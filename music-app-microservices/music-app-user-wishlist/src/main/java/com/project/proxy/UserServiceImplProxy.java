package com.project.proxy;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.exception.UserNotFoundException;
import com.project.model.User;

@FeignClient(name = "zuul-api-gateway-server")
@RibbonClient(name = "music-app-user")
public interface UserServiceImplProxy {
	
	@GetMapping("music-app-user/users/{userId}")
	public User getUserById(@PathVariable String userId) throws UserNotFoundException;
}
