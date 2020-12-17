package com.project.service;

import com.project.exception.AdminNotFoundException;
import com.project.model.Admin;

public interface AdminService {
	
	public Boolean checkDetails(String adminId, String adminPassword);
	public Admin updateDetails(Admin admin) throws AdminNotFoundException;
}
