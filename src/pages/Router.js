import React from 'react';
import {
    Switch,Route
} from 'react-router-dom';
import Formulario from './Formulario';
import Lista from './Lista';

export default function Router(props){
    return(
        <Switch>
            <Route path="/formulario">
                <Formulario/> 
            </Route>
            <Route path="/lista">
               <Lista/> 
            </Route>
            <Route exact path="">
                <Formulario/>
            </Route>
            
        </Switch>
    )
}