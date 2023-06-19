import React from 'react';
import MainContainer from "components/MainContainer/MainContainer";

export default function ({ user }) {
  return (
    <MainContainer>
      <div>
        <h1>Пользователь {user.name} c id {user.id}</h1>
      </div>
    </MainContainer>
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