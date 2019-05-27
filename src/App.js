import React, { Component } from "react";
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";


class App extends Component{

    state ={
        counters: [
            { id:1,value:0 },
            { id:2,value:0 },
            { id:3,value:0 },
            { id:4,value:0 }

        ]
    }

    handleDelete = (counterId) =>{
        //to get all the counters except the one given id
        const counters = this.state.counters.filter(c => c.id !==counterId)
        //overide the new array in setstate
        //since the key and the value same we can just keep counters in below setstate method this.setState({counters});
        this.setState({counters:counters});
    }


    handelReset =() =>{
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        });

        this.setState({counters});
    }

    handleIncrement = counter =>{
        const counters=[...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    render()
    {
        return (
            <div className="App">
         <NavBar totalCounters={this.state.counters.filter(c=>c.value >0).length}/>
         <main className="container" > <Counters
                 counters={this.state.counters}
                 onRest={this.handelReset}
                 onIncrement={this.handleIncrement}
                 onDelete={this.handleDelete}


         /></main>
            </div>
        );
    }

}

export default App;
