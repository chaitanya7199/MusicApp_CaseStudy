package com.project.proxy;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "zuul-api-gateway-server")
@RibbonClient(name = "music-app-user-wishlist")
public interface UserWishlistServiceImplProxy {	
	@DeleteMapping("music-app-user-wishlist/users/{userId}")
    public void deleteAllSongsByUserId(@PathVariable String userId);
}

