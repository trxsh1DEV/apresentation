// import { FormPropsPeripherical } from "@/pages/Peripherical/Periphericals";
import { requestWithToken } from "../utils/request";
import { formatDateString } from "@/utils/utils";

export const createPeripherical = async (data: any) => {
  data.date_buy = formatDateString(data.date_buy)?.split(" ")[0];
  data.category = data.category.map((item: any) => item.value);
  return await requestWithToken.post("/equipament", data);
};
