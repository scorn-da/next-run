import React from 'react';
import Link from "next/link";

const Index = () => {
  return (
      <div>

        <ul className="navList">
          <li>
            <Link href="/" className="link">
                Главная
            </Link>
          </li>
          <li>
            <Link href="/users" className="link">
              Пользователи
            </Link>
          </li>
        </ul>
        <h1>Главная</h1>
        <style>
          {`
            .navList {
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: min-content;
              grid-column-gap: 12px;
              margin: 0;
              padding: 12px;
              list-style: none;

              background-color: orange;
            }
            .link {
              padding: 8px 12px;

              text-decoration: none;
              color: white;
              font-size: 17px;
              line-height: 21px;
            }
          `}
        </style>
      </div>
  );
};

export default Index;