/** @format */

import React from "react";

const SSGDynamicRoute = ({ res }) => {
  console.log(res);
  return (
    <div>
      SSGDynamicRoute
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SSGDynamicRoute;

// export const getStaticProps = async (ctx) => {
//   console.log(ctx);
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${ctx.params.id}`
//   );
//   const res = await result.json();
//   return {
//     props: {
//       res,
//     },
//   };
// };
// export const getStaticPaths = async () => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/users");
//   const res = await result.json();
//   const id = res.map((item) => item.id);
//   const paths = id.map((item) => ({ params: { id: item.toString() } }));
//   //path:{params:{id:"1",id:"2"}}
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (ctx) => {
  console.log(ctx);
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${ctx.params.id}`
  );
  const res = await result.json();
  return {
    props: {
      res,
    },
  };
};
