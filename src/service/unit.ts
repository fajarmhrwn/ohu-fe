import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_URL;

export const getUnits = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxNTM3NDA5LCJleHAiOjE2NjQxMjk0MDl9.q2suJaCPESIAzav-6jPYxHmMI2CQTmFi5OFE899UyIQ'
    }
  });

  return data;
};

export const getUnitById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/units/${id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxNTM3NDA5LCJleHAiOjE2NjQxMjk0MDl9.q2suJaCPESIAzav-6jPYxHmMI2CQTmFi5OFE899UyIQ'
    }
  });
  return data;
};

export const updateVisitors = async (id: string, visitors: number) => {
  await axios.put(
    `${BASE_URL}/units/${id}`,
    { visitors },
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxNTM3NDA5LCJleHAiOjE2NjQxMjk0MDl9.q2suJaCPESIAzav-6jPYxHmMI2CQTmFi5OFE899UyIQ'
      }
    }
  );
};

export const getScore = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}${url}`);

  return data;
};
