import React, { useEffect, useState } from 'react';
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Petya'},
    {id: 2, name: 'Vasya'},
  ]);

  useEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  }, []);

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