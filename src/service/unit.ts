import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

export const getUnits = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}${url}`);

  return data;
};

export const getUnitById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/units/${id}`);
  return data;
};