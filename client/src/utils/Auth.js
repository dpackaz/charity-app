import decode from "jwt-decode";

class AuthService {
  login(token) {
    localStorage.setItem("token", token);
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
    window.location = window.location.origin;
  }
}
export default new AuthService();
