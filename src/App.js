import React from 'react';
import './App.css';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    // Route,
} from "react-router-dom";
import CategoriesComponent from "./components/CategoriesComponent";
import {Container} from 'react-bootstrap';
import BesoftComponents from './components/BesoftComponents';


function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Header />
                    <Container>
                        <Switch>
                            <CategoriesComponent />
                            <BesoftComponents/>
                        </Switch>
                    </Container>
                </div>
            </Router>
        </>
    );
}

export default App;
