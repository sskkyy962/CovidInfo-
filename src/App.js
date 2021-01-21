import React from "react";
import Header from "./components/Header";
import {fetchData} from "./Api";
import Cards from "./components/Cards";
import Chart from "./Charts/charts";

class App extends React.Component{
    state={
        data:{},
    }

    async componentDidMount(){
        const fetcheddata = await fetchData();
        this.setState({data:fetcheddata});
    }
    render(){
        const {data} = this.state
        return (
            <div className='App'>
                <Header/>
                <Cards data={data}/>
                <Chart/>
            </div>


        );
    }




}

export default App;
