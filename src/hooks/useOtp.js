import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiClient } from "../api/apiClient";

export const useOtp = () => {
  const otpMutation = useMutation({
    mutationKey: ["sendOtp"],
    mutationFn: async ({ nationalCode, encryptedResponse, captcha }) => {
      const response = await apiClient.post("/otp/", {
        national_code: nationalCode,
        encrypted_response: encryptedResponse,
        captcha: captcha,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("OTP verification successful");
    },
    onError: (error) => {
      console.error("OTP verification failed", error);
      toast.error("خطا در ارسال کد مجددا تلاش کنید");
    },
  });

  const { mutateAsync: sendOtp, isLoading, isError, error, data } = otpMutation;

  return {
    sendOtp,
    isLoading,
    isError,
    error,
    data,
  };
};

