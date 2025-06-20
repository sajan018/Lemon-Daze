import axios from "axios";

// Create axios client instance
const axiosClient = axios.create({
  baseURL: "https://lemon-daze-backend-production.up.railway.app/",
});

// Function to setup interceptors — accepts your loader setter
export const setupInterceptors = (setLoader) => {
  axiosClient.interceptors.request.use(
    (config) => {
      setLoader(true);   // Show loader when request starts
      return config;
    },
    (error) => {
      setLoader(false);  // Hide loader if request fails before sending
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    (response) => {
      setLoader(false);  // Hide loader when response received
      return response;
    },
    (error) => {
      setLoader(false);  // Hide loader if response fails
      return Promise.reject(error);
    }
  );
};

export default axiosClient;
