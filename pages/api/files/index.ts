import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";


const SERVER_URL =
  `${process.env.BACKEND_URL}/api/files` || "http://localhost:8080/api/files";

type Tokens = {
  accessToken: any;
  refreshToken: any;
} | null;

export function logout() {
  Cookies.remove("currentUser");
  Cookies.remove("refreshToken");
}

const getTokensFromCookies = () => {
  let accessToken;
  let refreshToken;

  try {
    const currentUserCookie = Cookies.get("currentUser");
    const refreshTokenCookie = Cookies.get("refreshToken");
    console.log(currentUserCookie, refreshTokenCookie, "refreshresdfsadk");

    if (currentUserCookie) {
      accessToken = JSON.parse(decodeURIComponent(currentUserCookie));
    }
    if (refreshTokenCookie) {
      refreshToken = JSON.parse(decodeURIComponent(refreshTokenCookie));
    }
  } catch (error) {
    console.error("Ошибка при разборе кук:", error);
  }

  if (!accessToken || !refreshToken) {
    console.error("Токены не найдены или не допустимы");
    return null;
  }

  console.log(accessToken.token, refreshToken.token);
  return { accessToken: accessToken.token, refreshToken: refreshToken.token };
};

const setHeaders = (tokens: Tokens) => {
  return {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${tokens?.accessToken}`,
    "Refresh-Token": tokens?.refreshToken,
  };
};

export const uploadFile = async (fileType: string, file: File) => {
  const tokens = getTokensFromCookies();
  const formData = new FormData();
  console.log(tokens, "tokens");
  formData.append("file", file);

  try {
    const response = await axios.post(
      `${SERVER_URL}/upload/${fileType}`,
      formData,
      {
        headers: setHeaders(tokens),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке файла:", error);
    throw error;
  }
};

export const downloadUserAvatar = async () => {
  const tokens = getTokensFromCookies();
  console.log(setHeaders(tokens), "Headers for request");
  try {
    const response = await axios.get(`${SERVER_URL}/download/avatar`, {
      headers: setHeaders(tokens),
    });
    console.log(response.data, " da=sadgjasdgoajsdgp");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Ошибка ответа сервера:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("Ошибка запроса:", error.request);
      } else {
        console.error("Ошибка настройки запроса:", error.message);
      }
    } else {
      console.error("Непредвиденная ошибка:", (error as Error).message);
    }
    throw error;
  }
};

export const downloadTaskImages = async (taskId: string) => {
  const tokens = getTokensFromCookies();
  console.log(tokens, "a;[soadgj");

  try {
    const response = await axios.get(
      `${SERVER_URL}/download/task-images/${taskId}`,
      {
        headers: setHeaders(tokens),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении изображений задачи:", error);
    throw error;
  }
};
