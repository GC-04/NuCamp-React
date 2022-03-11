import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfoComponent from './CampsiteInfoComponent';
import Header from './Header Component';
import Footer from './Footer Component';
import Home from './Home Component';
import { Switch, Route, Redirect } from 'react-router-dom';
import {CAMPSITES} from '../shared/campsites'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,

        };
    }


    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/directory' render={() =>   <Directory campsites={this.state.campsites}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
