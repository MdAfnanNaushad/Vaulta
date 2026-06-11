// src/api/wallet.api.js

import api from "./axios";

export const getWalletData =
  async () => {
    const response =
      await api.get("/dashboard");

    return response.data.data;
  };