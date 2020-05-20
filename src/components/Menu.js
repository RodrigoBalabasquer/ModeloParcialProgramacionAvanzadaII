import React from 'react';
import {NavBar} from './';
import {NavLink} from '../atoms';

export default function Menu(props){
    return (
        <NavBar> 
        <NavLink href="formulario" label="Carga"/>
        <NavLink href="lista" label="Lista"/>
        </NavBar>
    )
}