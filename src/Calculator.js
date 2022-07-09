import React from 'react';
export default class Calculator extends React.Component{
    constructor()
    {
        super();
        this.state={
            ans:0
        }
    }
        add2=()=>{
            this.setState((prevState)=>{
                return{
                ans:prevState.ans+2

                }
            });
        }
        subtract2=()=>{
            this.setState((prevState)=>{
                return{
                ans:prevState.ans-2

                }
            });    
        }
        double2=()=>{
            this.setState((prevState)=>{
                return{
                ans:prevState.ans*2

                }
            });
        }
        devide2=()=>{
            this.setState((prevState)=>{
                return{
                ans:prevState.ans/2

                }
            });
        }
        square2=()=>{
            this.setState((prevState)=>{
                return{
                ans:prevState.ans*prevState.ans

                }
            });
        }
        reset=()=>{
            this.setState((prevState)=>{
                return{
                ans:0

                }
            });
        }
    render(){
        return(
            <div className='calc'>
            <h1 className='ans' style={{fontSize:80}}>{this.state.ans}</h1>
            <div className='button'>
                <button onClick={this.add2} style={{height:30}}  className='btn'>Add2!</button>
                <button onClick={this.square2} className='btn'>Square!</button>
                <button onClick={this.double2} className='btn'>Double!</button>
                <button onClick={this.devide2} className='btn'>DevideBy2!</button>
                <button onClick={this.subtract2} className='btn'>Subtract2!</button>
            </div>
            <button onClick={this.reset} className='btn'>Reset</button>
            </div>
        );


    }
}