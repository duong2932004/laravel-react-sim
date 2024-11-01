import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để xử lý cache
const CACHE_TIME = 5 * 60 * 1000; // 5 phút
const cache = new Map();

apiClient.interceptors.request.use((request) => {
  const key = request.url;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    const { data, timestamp } = cachedResponse;
    if (Date.now() - timestamp < CACHE_TIME) {
      // Trả về response từ cache
      return Promise.reject({
        config: request,
        response: { data, status: 200 },
        isAxiosCache: true,
      });
    }
    cache.delete(key);
  }
  return request;
});
