import decode from "jwt-decode";

class AuthService {
  login(token, id) {
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", id);
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");

    let tokenExpired = false;

    if (token) {
      let decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        tokenExpired = true;
      }
    }

    return !!token && !tokenExpired;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location = window.location.origin;
  }
}
export default new AuthService();
