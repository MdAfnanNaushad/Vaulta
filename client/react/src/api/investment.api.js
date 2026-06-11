import api from "./axios";

export const getInvestments =
  async () => {
    const response =
      await api.get(
        "/investments"
      );

    return response.data.data;
  };

export const createInvestment =
  async (payload) => {
    const response =
      await api.post(
        "/investments",
        payload
      );

    return response.data.data;
  };

export const cancelInvestment =
  async (id) => {
    const response =
      await api.patch(
        `/investments/${id}/cancel`
      );

    return response.data.data;
  };