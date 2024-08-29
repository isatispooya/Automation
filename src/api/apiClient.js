import axios from "axios";
import { OnRun } from "../api/config";

export const apiClient = axios.create({
  baseURL: OnRun,
  headers: {
      "Content-Type": "application/json",
  },
});
