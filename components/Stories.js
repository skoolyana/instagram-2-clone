import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import {  useSession } from 'next-auth/react'


function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const {data:session} = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => [
      {
        id: i,
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      },
    ]);

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 
    border-gray-200 border rounded-sm overflow-scroll 
    scrollbar-thin scrollbar-thumb-black">
      {
        session && (

          <Story img={session.user.image} username={session.user.username}></Story>
        )

      }
      {suggestions.map((profile) =>
        profile.map((userdata) => (
          <Story
            key={userdata.id}
            img={userdata.avatar}
            username={userdata.username}
          ></Story>
        ))
      )}

      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}

export default Stories;
