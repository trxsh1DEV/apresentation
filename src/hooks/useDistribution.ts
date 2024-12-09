// hooks/useDistributions.ts
import requestWithToken from "@/utils/request";

export const fetchDistributions = async () => {
  const { data } = await requestWithToken.get("/distribution");
  return data;
};

export const createDistribution = async (formData: FormData) => {
  const { data } = await requestWithToken.post("/distribution", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteDistribution = async (id: string) => {
  const { data } = await requestWithToken.delete(`/distribution/${id}`);
  return data;
};

export const updateDistribution = async (distribution: any, id: string) => {
  const { data } = await requestWithToken.put(`/distribution/${id}`, distribution);
  return data;
};