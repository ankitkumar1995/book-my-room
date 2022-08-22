/** @format */

import React from "react";

const SSGDataFetching = ({ res }) => {
  console.log(res);
  return (
    <div>
      SSGDataFetching
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {res.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <a href={`user/${item.id}`}> view details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SSGDataFetching;
export const getStaticProps = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await result.json();
  return {
    props: {
      res,
    },
  };
};
