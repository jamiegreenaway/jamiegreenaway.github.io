import axios from "axios";

export async function getEntryCount(jwt) {
  let result = {};
  await axios
    .get("/api/admin/entryCount", {
      headers: {
        "auth-token": jwt,
      },
    })
    .then((res) => {
      result = {
        data: res.data,
      };
    })
    .catch((err) => {
      result = {
        data: err.response.data,
      };
    });
  return result;
}

export async function getNewsArticles(jwt) {
  let result = {};
  await axios
    .get("/api/news", {
      headers: {
        "auth-token": jwt,
      },
    })
    .then((res) => {
      result = {
        data: res.data,
      };
    })
    .catch((err) => {
      result = {
        data: err.response.data,
      };
    });
  return result;
}
