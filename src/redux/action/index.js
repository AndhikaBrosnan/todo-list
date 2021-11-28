import apiBackend from "../../apis/apiBackend";

export const fetchTodos = async () => {
  try {
    const response = await apiBackend.get("/");
    return response.data;
  } catch (err) {
    return {
      message: "Error on Fetch Todos",
    };
  }
};
