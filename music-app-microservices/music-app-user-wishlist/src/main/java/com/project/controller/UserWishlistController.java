package com.project.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.exception.SongNotFoundException;
import com.project.exception.UserNotFoundException;
import com.project.model.Song;
import com.project.proxy.UserServiceImplProxy;
import com.project.service.impl.UserWishlistServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class UserWishlistController {
	@Autowired
    private UserWishlistServiceImpl userWishlistService;

    @Autowired
    private UserServiceImplProxy userServiceImplProxy;

	@ApiOperation(value = "Add song to wishlist")
	@PostMapping("/users/{userId}/songs/{songId}")
	public String addSongToWishlist(@PathVariable String userId, @PathVariable String songId)
			throws UserNotFoundException, SongNotFoundException {
		try {
			userServiceImplProxy.getUserById(userId);
			userWishlistService.addSongToWishlist(userId, songId);
			return "Song added successfully";
		} catch (UserNotFoundException unfe) {
			throw new UserNotFoundException("User with user id is not found.");
		} catch (SongNotFoundException snfe) {
			throw new SongNotFoundException("Song with song id is not found.");
		}
	}

	@ApiOperation(value = "Delete song from wishlist")
	@DeleteMapping("/users/{userId}/songs/{songId}")
	public String deleteFromWishlist(@PathVariable String userId, @PathVariable String songId) throws SongNotFoundException, UserNotFoundException {
		userServiceImplProxy.getUserById(userId);
			userWishlistService.deleteSongFromWishlist(userId, songId);
			return "Song deleted successfully";
	}
	
	@DeleteMapping("/users/{userId}")
    public void deleteAllSongsByUserId(@PathVariable String userId) {
		userWishlistService.deleteAllSongsByUserId(userId);
    }


    @ApiOperation(value = "Search all songs from wishlist")  
    @GetMapping("/users/{userId}/songs")
    public List<Song> findAllSongsFromWishlist(@PathVariable String userId) throws UserNotFoundException, SongNotFoundException {
    	try {
    		userServiceImplProxy.getUserById(userId);
			List<Song> songs =  userWishlistService.findAllSongsFromWishlist(userId);
			if(songs.size()==0) {
				throw new SongNotFoundException();
			}
			return songs;
		} catch (UserNotFoundException e) {
			throw new UserNotFoundException("User with user id is not found.");
			
		} catch (SongNotFoundException e) {
			throw new SongNotFoundException("No songs are added into wishlist.");
		}
    }

    @ApiOperation(value = "Search song by title")
	@GetMapping("/users/{userId}/songs/title/{songTitle}")
	public Song findSongByTitleFromWishlist(@PathVariable String userId, @PathVariable String songTitle) throws UserNotFoundException, SongNotFoundException {
    	userServiceImplProxy.getUserById(userId);
    	return userWishlistService.findSongByTitleFromWishlist(userId, songTitle);        
	}
	 
	@ApiOperation(value = "Search song by album")
	@GetMapping("/users/{userId}/songs/album/{albumName}")
	public List<Song> findSongByAlbumFromWishlist(@PathVariable String userId, @PathVariable String albumName)
			throws UserNotFoundException, SongNotFoundException {
		userServiceImplProxy.getUserById(userId);
		return userWishlistService.findSongByAlbumFromWishlist(userId, albumName);
	}
}

