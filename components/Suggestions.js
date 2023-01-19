import React, { useEffect, useState } from 'react';
import { faker } from "@faker-js/faker";


function Suggestions() {

    const [suggestions,setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(6)].map((_, i) => [
          {
            id: i,
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            companyName : faker.company.name(),
          },
        ]);
    
        setSuggestions(suggestions);
      }, []);
    

    return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for You</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
        </div>
        
        {suggestions.map((profile) =>
        profile.map((userdata) => (
          <div
            key={userdata.id}
            className='flex items-center justify-between mt-3'
          >

           <img className='w-10 h-10 rounded-full border p-[2px]' src={userdata.avatar}></img>     

            <div className='flex-1 ml-4'>     
               <h2 className='font-semibold text-sm'>
                {userdata.username}
               </h2>     
               <h3 className='text-xs truncate w-40'>Works at {userdata.companyName} </h3> 
            </div>

            <button className='text-blue-400'>Follow</button>
            
          </div>
          
        ))
      )}
        
    
    </div>
  )
}

export default Suggestions