package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.model.Song;
import com.project.model.UserWishlist;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;

@Repository
public interface UserWishlistRepo extends JpaRepository<UserWishlist, String> {

	@Query("SELECT song FROM Song song  WHERE song.songId IN (SELECT u.songId FROM UserWishlist u WHERE u.userId = ?1)")
	public List<Song> findAllSongsFromsWishlist(String userId);
	//public List<Song> findAllSongsFromsWishlist(@Param("userId") String userId);

	@Query("SELECT song FROM Song song where song.songId IN (SELECT u.songId FROM UserWishlist u  WHERE u.songId = ?2 AND u.userId = ?1)")
	public Song findSongsByTitleFromWishlist(String userId, String songId);

	@Query(value = "SELECT song FROM Song song WHERE song.songId IN (SELECT u.songId FROM UserWishlist u WHERE u.songId = ?2 AND u.userId = ?1)")
	public Song findSongsByAlbumFromWishlist(String userId, String songId);

	@Transactional
	@Modifying
	@Query(value = "DELETE FROM User_Wishlist  WHERE user_id  = (:userId)", nativeQuery = true)
	public void deleteAllSongsByUserId(@Param("userId") String userId);

	@Query(value = "SELECT song_id FROM User_Wishlist  WHERE song_id = (:songId)", nativeQuery = true)
	public String findSongBySongIdFromWishlist(@Param("songId") String songId);

	@Transactional
	@Modifying
	@Query(value = "DELETE FROM User_Wishlist  WHERE user_id  = (:userId) AND song_id = (:songId)", nativeQuery = true)
	public void deleteSong(@Param("userId") String userId, @Param("songId") String songId);
}
