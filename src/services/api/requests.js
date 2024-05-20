import { instance } from ".";

const getData = async (path) => (await instance.get(path)).data;

const postData = async (path, postData) => {
  try {
    const response = await instance.post(path, postData);
    return response.data;
  } catch (error) {
    // Hata yönetimi burada yapılabilir
    console.error("Post isteği sırasında bir hata oluştu:", error);
    throw error;
  }
};

export { getData, postData };
