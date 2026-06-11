import api from "./axios";

export const getReferralTree =
  async () => {
    const response =
      await api.get(
        "/referrals/tree"
      );

    return response.data.data;
  };

export const getDirectReferrals =
  async () => {
    const response =
      await api.get(
        "/referrals/direct"
      );

    return response.data.data;
  };

export const getReferralIncome =
  async () => {
    const response =
      await api.get(
        "/referrals/income"
      );

    return response.data.data;
  };