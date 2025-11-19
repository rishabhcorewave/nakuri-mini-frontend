import axios from "axios";

export const baseURL = "http://localhost:8080/api"

export const Services = {
    register: `${baseURL}/register`,
    getUser: `${baseURL}/get-user-list`,
    addScore: `${baseURL}/add-score`,
    getScore: `${baseURL}/get-score`

}

export const RegisterUser = async (body) => {
  const log = await axios.post(Services.register, body);
  return log;
};

export const GetUserList = async () => {
  const log = await axios.get(Services.getUser);
  return log;
};

export const AddScores = async (body) => {
  const log = await axios.post(Services.addScore, body);
  return log;
};

export const GetScore = async (id) => {
  const log = await axios.get(`${Services.getScore}/${id}`);
  return log;
};