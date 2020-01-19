import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Header'
import Home from './Home'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
