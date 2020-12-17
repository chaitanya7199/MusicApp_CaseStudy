package com.project.service;

import java.util.List;

import com.project.exception.SongNotFoundException;
import com.project.model.Song;
import com.project.model.UserWishlist;

public interface UserWishlistService {
	
	public UserWishlist addSongToWishlist(String userId, String songId) throws SongNotFoundException;
	public void deleteSongFromWishlist(String userId, String songId)throws SongNotFoundException;
	public Song findSongByTitleFromWishlist(String userId, String songTitle) throws SongNotFoundException;
	public List<Song> findSongByAlbumFromWishlist(String userId, String albumName) throws SongNotFoundException;
	public List<Song> findAllSongsFromWishlist(String userId) throws SongNotFoundException;
	public void deleteAllSongsByUserId(String userId);
}