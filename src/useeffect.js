
//Problem Problem: You want to fetch data from an API when a component mounts and display it in your React application. 
//However, you're not sure where to perform this data fetching logic in a functional component.

// import React, { useState } from 'react';
// import axios from 'axios';

// function DataFetchingComponent() {
//   const [data, setData] = useState(null);

//   // This function gets called whenever the component renders
//   // This is not efficient as it will trigger the API call on every render
//   const fetchData = () => {
//     axios.get('https://api.example.com/data')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   // Call the fetchData function when the component mounts
//   // This ensures that the data is fetched only once when the component mounts
//   // However, it's not very clear and might be considered a side effect
//   fetchData();

//   return (
//     <div>
//       {data ? (
//         <p>Data: {data}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default DataFetchingComponent;

//Solution

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This function will run only once when the component mounts
    axios.get('https://api.example.com/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetchingComponent;
