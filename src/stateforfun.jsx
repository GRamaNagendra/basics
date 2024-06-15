import React, { useState } from "react";
function Stateforfun(){

   const [count,setCount]=useState(0);
    return(

        <div>
  {count}

 <button onClick={()=>setCount(count + 1) }>increament</button>}
     </div>
    );
}
export default Stateforfun;
