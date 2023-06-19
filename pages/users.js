import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Users = ({ users }) => {
  return (
      <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.map((user) => {
            return (
                <li key={user.id}>
                  <Link href={`/users/${user.id}`}>
                    {user.name}
                  </Link>
                </li>
            )
          })}
        </ul>
      </div>
  );
};

export default Users;

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return {
    props: {
      users,
    },
  }
}
