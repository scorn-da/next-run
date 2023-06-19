import React from 'react';
import { useRouter } from "next/router";

export default function ({ user }) {
  return (
      <div>
        <h1>Пользователь {user.name} c id {user.id}</h1>
      </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  }
}