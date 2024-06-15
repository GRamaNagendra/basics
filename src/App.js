import React from 'react';
import User from './clscom';
import Funcom from './Funcom';
import Bothfuncls from './bothfuncls';
import Stateforclass from './stateforclass';
import Stateforfun from './stateforfun';
import CombinedEffectsComponent from'./useeffect2';
import Counter from './callback';

import FileList from './Filemanagment';

// import useFetch from "./customhook";

// const cushook = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

function App() {

  const jsonFileName = 'data.json'; // Specify the JSON file name
  return (
    <div>
   <User firstName="DAta from props" lastName="In class component"/>
 <Bothfuncls/>
<Stateforfun/>
<Stateforclass/>
   <Funcom name="data from props to functional component"/>



<CombinedEffectsComponent/>


abcd
<Counter/>
abcd\\

<FileList />

   </div>
  );
}

export default App;
