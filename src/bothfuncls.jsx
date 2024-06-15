import React from 'react'

class Clscomp extends React.Component{
render(){
return(<h1>Class Component</h1>);
}
}


function Funcomp(){
    return(<h1>Function Component</h1>);

}


function Bothfuncls(){
return(<div>
<ul style={{color:'red'}}>Both Components</ul>

<Clscomp/>
<Funcomp/>
</div>);

}

export default Bothfuncls;