import React from 'react';
import styles from './App.module.css';
import { LocationSelector, Cards } from './components';

import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    getCity = async(city) => {
       const fetchedData = await fetchData(city);
       this.setState( { data: fetchedData, city: city })
    }

    render() {
        const { data } = this.state;
        return (
            <div className = { styles.container }>
                <LocationSelector getCity = { this.getCity } />
                <Cards data = { data } />
            </div>
        )
    }
}

export default App;