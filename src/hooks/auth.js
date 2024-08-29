import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie, setCookie, deleteCookie } from "../utils/cookie";
import { apiClient } from "../api/apiClient";

export const useAuth = () => {
  const [token, setToken] = useState(getCookie("token") || null);
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (credentials) => {
      const response = await apiClient.post("/auth/login", credentials);
      return response.data;
    },
    onSuccess: (data) => {
      const token = data.token;
      setToken(token);
      setCookie("token", token);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      queryClient.invalidateQueries("auth");
    },
    onError: (error) => {
      console.error("Login failed", error);
      throw error;
    },
  });

  const logout = () => {
    setToken(null);
    deleteCookie("token");
    delete apiClient.defaults.headers.common["Authorization"];
    queryClient.invalidateQueries("auth");
  };

  const getToken = () => {
    return token;
  };

  return {
    login: loginMutation.mutateAsync,
    logout,
    getToken,
    isAuthenticated: !!token,
    isLoading: loginMutation.isLoading,
    isError: loginMutation.isError,
    error: loginMutation.error,
  };
};
