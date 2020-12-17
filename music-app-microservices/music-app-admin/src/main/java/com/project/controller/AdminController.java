package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.exception.AdminNotFoundException;
import com.project.model.Admin;
import com.project.service.impl.AdminServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class AdminController {
	@Autowired
    private AdminServiceImpl adminService;

	@ApiOperation(value = "Validate Admin Details")
    @PostMapping("/admins/valid")
    public String checkDetails(@RequestBody Admin admin) {
        if(adminService.checkDetails(admin.getAdminId(), admin.getAdminPassword()) == true) 
        	return ("Access Granted");
        else 
        	return ("Access Denied. Wrong Credentials!!!");
    }

	@ApiOperation(value = "Update Admin Details", response = Admin.class)
    @PutMapping("/admins/{adminId}")
    public Admin updatePassword(@PathVariable String adminId, @RequestBody Admin admin) throws AdminNotFoundException {
        return adminService.updateDetails(admin);     
    }

  
}
