"use server";
import axios from "axios";
export const getCategories = async () => {
  const response = await axios.get(
    "https://nwaa.trendline.marketing/api/categories/main"
  );
  return response.data;
};
