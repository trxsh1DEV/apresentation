// hooks/useSoftwares.ts
import { FormValues } from "@/pages/Software/CreateSoftwareLicenseForm";
import requestWithToken from "@/utils/request";

export const fetchSoftwares = async () => {
  const { data } = await requestWithToken.get("/software-licenses");
  return data;
};

export const createSoftware = async (formData: FormData) => {
  console.log(formData)
  const { data } = await requestWithToken.post("/software-licenses", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteSoftware = async (name: string) => {
  const { data } = await requestWithToken.delete(`/software-licenses/${name}`);
  return data;
};


export const updateSoftware = async (software: FormValues, nameOld: string) => {
  const { data } = await requestWithToken.put(`/software-licenses/${nameOld}`, {
    name: software.name,
    total_licenses: software.total_licenses,
    used_licenses: software.used_licenses,
    provider: software.provider,
    due_date: software.due_date,
    file: software?.file || null,
  });
  return data;
};
