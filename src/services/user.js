import axios from "axios";

export default async () => {
  const response = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
  return response.data.data;
};