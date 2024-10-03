import React from 'react';

export default function Client({ client }) {
   return (
      <>
         <li key={client.id}>
            {client.name} - {client.status}
         </li>
      </>
   );
}
