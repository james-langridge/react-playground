import axios from "axios";

import { User } from "./APIResponsesTypes";

export const getUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://random-data-api.com/api/v2/users?size=100"
  );

  return data;
};
