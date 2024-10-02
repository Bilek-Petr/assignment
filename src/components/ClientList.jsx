import { useState, useEffect } from 'react';
import { fetchClients } from '../services/api';

const ClientList = () => {
   const [clients, setClients] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getClients = async () => {
         try {
            const clientData = await fetchClients();
            setClients(clientData);
         } catch (err) {
            setError(`${err.message} / error`);
         } finally {
            setLoading(false);
         }
      };

      getClients();
   }, []);

   if (loading) return <div>Loading...</div>;
   if (error) return <div>{error}</div>;

   return (
      <div>
         <h1>Client List</h1>
         <ul>
            {clients.map((client) => (
               <li key={client.id}>
                  {client.name} - {client.status}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ClientList;
