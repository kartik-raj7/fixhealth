import axios from 'axios';

export const axiosGet = async (url, params = {}, contentType = 'application/json') => {
  let response = {};

  try {
    const result = await axios.get(url, {
      headers: {
        'Content-Type': contentType,
      },
      params,
    });

    response = result.data || {};
    response.status = result?.status === 200;
    response.message = result?.data?.message;
  } catch (e) {
    response.status = false;
    response.message = 'Something went wrong';
    response.data = e;
  }

  return response;
};
