import React, { useEffect, useState } from 'react';
import Link from "next/link";
import MainContainer from "components/MainContainer/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer title='Пользователи'>
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
    </MainContainer>
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
