import { useQuery } from "@tanstack/react-query";

import { getUsers } from "./api";
import { User } from "./APIResponsesTypes";

export default function useUsers(sortCol?: string) {
  return useQuery<User[]>(["users"], getUsers, {
    select: (users) => {
      if (!sortCol) {
        return users;
      }

      if (!isValidKey(sortCol)) {
        return users;
      }

      return users.sort((a, b) => {
        const rowA = a[sortCol];
        const rowB = b[sortCol];

        if (rowA < rowB) {
          return -1;
        }

        if (rowA > rowB) {
          return 1;
        }

        return 0;
      });
    },
  });
}

type UserKey = keyof Pick<
  User,
  "first_name" | "last_name" | "email" | "phone_number" | "date_of_birth"
>;

export const validKeys: UserKey[] = [
  "first_name",
  "last_name",
  "email",
  "phone_number",
  "date_of_birth",
];

export const keyMap = {
  first_name: "First name",
  last_name: "Last name",
  email: "Email",
  phone_number: "Phone",
  date_of_birth: "DOB",
};

function isValidKey(key: string): key is UserKey {
  return validKeys.includes(key as UserKey);
}
