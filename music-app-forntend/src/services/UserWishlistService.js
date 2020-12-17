import axios from "axios";

const USER_WHISHLIST_API_BASE_URL = "http://localhost:8000/users";

class UserWishlistService {
  addSongToWishlist(userWishlist) {
    return axios.post(
      USER_WHISHLIST_API_BASE_URL +
        "/" +
        userWishlist.userId +
        "/songs/" +
        userWishlist.songId
    );
  }

  removeSongFromWishlist(userWishlist) {
    return axios.delete(
      USER_WHISHLIST_API_BASE_URL +
        "/" +
        userWishlist.userId +
        "/songs/" +
        userWishlist.songId
    );
  }

  displayAllSongsFromWishlist(userId) {
    return axios.get(USER_WHISHLIST_API_BASE_URL + "/" + userId + "/songs");
  }
}

export default new UserWishlistService();
