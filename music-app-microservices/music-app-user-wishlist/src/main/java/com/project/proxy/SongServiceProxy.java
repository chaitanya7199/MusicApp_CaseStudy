package com.project.proxy;

import java.util.List;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.exception.SongNotFoundException;
import com.project.model.Song;

@FeignClient(name = "zuul-api-gateway-server")
@RibbonClient(name = "music-app-song")
public interface SongServiceProxy {
	
	@GetMapping("music-app-song/songs/id/{songId}")
	public Song findSongById(@PathVariable String songId) throws SongNotFoundException;
	
	@GetMapping("music-app-song/songs/title/{songTitle}")
	public Song findSongByTitle(@PathVariable String songTitle) throws SongNotFoundException;
	
	@GetMapping("music-app-song/songs/album/{albumName}")
	public List<Song> findSongsByAlbum(@PathVariable String albumName) throws SongNotFoundException;
}
