import axios from 'axios';

export const BASE_URL = 'https://juitcy.store';

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* interceptors */
const getTokens = () => {
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  return { accessToken, refreshToken };
};
const setAccessToken = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken);
};

//요청시 헤더에 accessToken 추가
publicInstance.interceptors.request.use(
  async (config) => {
    const { accessToken, refreshToken } = getTokens();
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//access token이 만료되었을시 재발급
publicInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    const { accessToken, refreshToken } = getTokens();

    if (err.response && err.response.status === 401) {
      if (refreshToken) {
        // access token이 만료되었고 refresh token이 있는 경우
        try {
          // 새로운 access token을 받아온 뒤 저장
          const response = await axios.get(`${BASE_URL}/login/token/refresh`, {
            headers: {
              Authorization: refreshToken,
            },
          });
          const newAccessToken = response.data.result.access_token;
          setAccessToken(newAccessToken);

          // 이전 요청을 재시도
          return publicInstance(originalRequest);
        } catch (err) {
          // refresh token이 유효하지 않은 경우
          // 로그아웃
          localStorage.clear();
          window.location.href = '/signup';
        }
      } else {
        //access token, refresh token이 없는 경우 (로그인되지 않은 상태에서의 접근)
        // 로그아웃
        localStorage.clear();
        window.location.href = '/signup';
      }
    }

    return Promise.reject(err);
  },
);
