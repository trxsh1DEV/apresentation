// import { FormPropsPeripherical } from "@/pages/Peripherical/Periphericals";
import { FormPropsPeripherical } from "@/pages/Peripherical/FormPeripherals";
import { requestWithToken } from "../utils/request";
import { formatDateString } from "@/utils/utils";

// usePeriphericals.ts
export const createPeripherical = async (data: FormPropsPeripherical) => {
  const formattedData = {
    ...data,
    date_buy: data.date_buy ? formatDateString(data.date_buy)?.split(" ")[0] : undefined,
    category: data.category.map((item: any) => item.value)
  };
  return await requestWithToken.post("/equipament", formattedData);
};

export const updatePeripheral = async (dataPeripheral: FormPropsPeripherical, id: string) => {
  const formattedData = {
    ...dataPeripheral,
    date_buy: dataPeripheral.date_buy ? formatDateString(dataPeripheral.date_buy)?.split(" ")[0] : undefined,
    category: dataPeripheral.category.map((item: any) => item.value)
  };
  const { data } = await requestWithToken.patch(`/equipament/${id}`, formattedData);
  return data;
};

export const deletePeripherical = async (id: string) => {
  const { data } = await requestWithToken.delete(`/equipament/${id}`);
  return data;
};
