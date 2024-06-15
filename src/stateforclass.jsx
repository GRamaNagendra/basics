import React from "react";
class Stateforclass extends React.Component{
    constructor(props){
        super(props);
     this.state={
        count:0,
     };

    }

    inccnt=()=>{

        this.setState({count: this.state.count + 1});
    }

    render(){

        return(

            <div>
                {this.state.count}
                <button onClick={this.inccnt}>

increanment
                </button>
            </div>
        );
    }
}
    export default Stateforclass;