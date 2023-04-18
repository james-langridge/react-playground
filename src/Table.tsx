import React, { useState } from "react";

import Container from "./Container";
import SortSvg from "./SortSvg";
import useUsers, { keyMap, validKeys } from "./useUsers";

export default function Table() {
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
      <Container>
        <section className="container px-4 mx-auto">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Users
          </h2>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        {validKeys.map((key) => {
                          return (
                            <th
                              key={key}
                              scope="col"
                              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                              <button
                                id={key}
                                onClick={(e) => onClick(e)}
                                className="flex items-center gap-x-3 focus:outline-none"
                              >
                                <span>{keyMap[key]}</span>
                                <SortSvg />
                              </button>
                            </th>
                          );
                        })}

                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {data.map((user) => {
                        return (
                          <tr key={user.uid}>
                            {validKeys.map((key) => {
                              return (
                                <td
                                  key={key}
                                  className="px-4 py-4 text-sm whitespace-nowrap"
                                >
                                  <div>
                                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                      {user[key].toString()}
                                    </p>
                                  </div>
                                </td>
                              );
                            })}

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }

  return null;
}
