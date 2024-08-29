import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiClient } from "../api/apiClient";

export const useCaptcha = () => {
  const [captchaData, setCaptchaData] = useState(null);
  const [captchaValue, setCaptchaValue] = useState("");

  const fetchCaptchaMutation = useMutation({
    mutationKey: ["fetchCaptcha"],
    mutationFn: async () => {
      const { data: captcha } = await apiClient.get("/captcha/");
      if (captcha?.image && captcha?.encrypted_response) {
        return {
          image: captcha.image,
          encrypted_response: captcha.encrypted_response,
        };
      } else {
        throw new Error("Captcha data is undefined");
      }
    },
    onSuccess: (data) => {
      setCaptchaData(data);
      setCaptchaValue("");
    },
    onError: (error) => {
      console.error("Captcha fetch failed", error);
      toast.error("خطا در دریافت کپچا، مجدداً بارگذاری کنید");
    },
  });

  const fetchCaptcha = () => fetchCaptchaMutation.mutate();

  return {
    captchaData,
    captchaValue,
    setCaptchaValue,
    fetchCaptcha,
    isLoadingCaptcha: fetchCaptchaMutation.isLoading,
    isErrorCaptcha: fetchCaptchaMutation.isError,
    errorCaptcha: fetchCaptchaMutation.error,
  };
};
