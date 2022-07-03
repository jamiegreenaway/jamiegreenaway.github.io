import axios from "axios";

export async function login(username, password) {
  let result = {};
  await axios
    .post("/api/authentication/login", {
      username: username,
      password: password,
    })
    .then((res) => {
      result = {
        login: true,
        data: res.data.token,
      };
    })
    .catch((err) => {
      result = {
        login: false,
        data: err.response.data,
      };
    });
  return result;
}

export async function verifyJWT(jwt) {
  let result = {};
  await axios
    .get("/api/authentication/verify", {
      headers: {
        "auth-token": jwt,
      },
    })
    .then((res) => {
      result = {
        access: true,
        data: res.data.username,
      };
    })
    .catch((err) => {
      result = {
        access: false,
        data: err.response.data,
      };
    });
  return result;
}
