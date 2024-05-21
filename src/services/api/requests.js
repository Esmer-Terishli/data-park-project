import { instance } from ".";

const getData = async (path) => (await instance.get(path)).data;

const postData = async (path, postData) => {
  try {
    const response = await instance.post(path, postData);
    return response.data;
  } catch (error) {
    console.error("An error occurred during the post request:", error);
    throw error;
  }
};

export { getData, postData };
