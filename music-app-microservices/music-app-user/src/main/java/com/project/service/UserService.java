package com.project.service;

import com.project.exception.UserNotFoundException;
import com.project.model.User;

public interface UserService {
	
	public User addDetails(User user) throws UserNotFoundException;
	public User checkDetails(String userId, String password);
	public User updateDetails(User user) throws UserNotFoundException;
	public void deleteAccount(String userId);
	public User getUserById(String userId) throws UserNotFoundException;
	public Boolean validateUserId(String userId);
}
