import React from "react";

class MainPage extends React.Component {
    state = {
        covid: []
    };
    componentDidMount(){
        fetch("https://corona-api.com/countries/us")
        .then(response => response.json())
        .then(covid =>{ // The timeline property gave the data for each day to map
            this.setState({ covid: covid.data.timeline });
        }) // Chose fetch over axios so I wouldn't be setting covid: data.data.timeline
        .catch(error =>console.error(error));
    } 
    render() {
        return ( // Included only entries from 2021 to shorten the list
        <article className="container">
            <h1>COVID-19 STATS IN THE UNITED STATES</h1>
            {this.state.covid.map(c => (
                c.date.includes(2021) && (
                <>
                <h3>Date: {c.date}</h3>
                <p>New Confirmed Cases: {c.new_confirmed.toLocaleString()}</p>
                <p>Confirmed Total Cases: {c.confirmed.toLocaleString()}</p>
                <p>New Deaths: {c.new_deaths.toLocaleString()}</p>
                <p>Total Deaths: {c.deaths.toLocaleString()}</p>
                </>
                )
            ))}
        </article>
        );
    }
}
export default MainPage;