"use server";
import axios from "axios";
export const getCategories = async (page: number) => {
  const response = await axios.get(
    `https://nwaa.trendline.marketing/api/categories/main?page=${page}`
  );
  return response.data;
};
