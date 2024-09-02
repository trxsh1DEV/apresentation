import { requestWithToken } from "../utils/request";

export const createPeripherical = async (data: any) => {
  return await requestWithToken.post("/equipament", data);
};
