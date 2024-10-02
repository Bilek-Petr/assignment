// API CALL to get the clients

export const fetchClients = async () => {
   try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
         method: 'GET',
         headers: {
            Authorization:
               'Basic ' +
               btoa(`${import.meta.env.VITE_API_USER}:${import.meta.env.VITE_API_KEY}`),
            'X-Instance-Name': import.meta.env.VITE_INSTANCE_NAME,
         },
      });

      if (!response.ok) {
         throw new Error('The fetching process of client list failed');
      }

      const fetchedData = await response.json();

      return fetchedData.data;
   } catch (error) {
      console.error(error);
   }
};
