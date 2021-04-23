import React from 'react';
import {Provider} from 'react-redux'
import {store} from "../redux/store"
import RepositoriesList from './RepositoriesList';
const App = () => {
    return (  
        <Provider store={store}>
            <div>
                <h1>Search Repositories</h1>
                <RepositoriesList />
            </div>

        </Provider>  
        
    );
};

export default App;