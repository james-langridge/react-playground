import React, { useState } from "react";

import useUsers from "./useUsers";

export default function Example() {
  const [sortCol, setSortCol] = useState("");
  const { isLoading, error, data, isSuccess } = useUsers(sortCol);

  const onClick = (e: React.MouseEvent) => {
    setSortCol(e.currentTarget.id);
  };

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error)
    return <div>An error has occurred: {error.message}</div>;

  if (isSuccess) {
    return (
      <table className="table-auto">
        <thead>
          <tr>
            <th id="first_name" onClick={(e) => onClick(e)}>
              First name
            </th>
            <th id="last_name" onClick={(e) => onClick(e)}>
              Last name
            </th>
            <th id="email" onClick={(e) => onClick(e)}>
              Email
            </th>
            <th id="phone_number" onClick={(e) => onClick(e)}>
              Phone
            </th>
            <th id="date_of_birth" onClick={(e) => onClick(e)}>
              DOB
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.uid}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.date_of_birth.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return null;
}
