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

type UserKey = keyof User;

function isValidKey(key: string): key is UserKey {
  const validKeys: UserKey[] = [
    "first_name",
    "last_name",
    "email",
    "phone_number",
    "date_of_birth",
  ];
  return validKeys.includes(key as UserKey);
}
