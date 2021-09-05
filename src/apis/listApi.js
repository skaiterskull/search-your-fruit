import axios from "axios";
const rootApi = "http://localhost:7000/api/v2";

export const fecthAllList = async () => {
  try {
    const { data } = await axios.get(rootApi);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
