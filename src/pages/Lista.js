import React, { Fragment } from 'react';
import { useSelector} from 'react-redux';
import { Msg } from '../components';

export default function Lista(props){

    function handleClick(value) {
        console.log(value);
    }

    const { appReducer } = useSelector(state => state);

    const { lista, loading } = appReducer;

    if(loading){
        return(<Msg/>)
    }
    return (
        
        <div>
            <h1>
                Lista de valores ingresados:
            </h1>
            {/*<ul className="list-group">
            {   
                
                lista.map((dato) =>{
                if(dato.activo){
                    return <div key={dato.id}>
                        <li className="list-group-item active">Usuario: {dato.user} - Password: {dato.password} - Opcion: {dato.opcion}</li>
                        </div>
                }
                else{
                    return <div key={dato.id}>
                        <li className="list-group-item">Usuario: {dato.user} - Password: {dato.password} - Opcion: {dato.opcion}</li>
                        </div>
                }
                })
                
            }
            </ul>*/}
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th >Id</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Opcion</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {   
                
                        lista.map((dato,index) =>{
                            if(dato.activo){
                                return <Fragment>
                                    <tr key={dato.id.toString()} className="table-primary">
                                        <td>{dato.id}</td>
                                        <td>{dato.user}</td>
                                        <td>{dato.password}</td>
                                        <td>{dato.opcion}</td>
                                        <td><input className="btn btn-primary" type="button" value="Ver Datos" onClick={() => handleClick(dato)}/></td>
                                    </tr>
                                </Fragment>
                            }
                            else{
                                return <Fragment>
                                    <tr key={dato.id.toString()} className="table-danger">
                                        <td>{dato.id}</td>
                                        <td>{dato.user}</td>
                                        <td>{dato.password}</td>
                                        <td>{dato.opcion}</td>
                                        <td><input className="btn btn-primary" type="button" value="Ver Datos" onClick={() => handleClick(dato)}/></td>
                                    </tr>
                                </Fragment>
                            }
                        })                        
                    }
                </tbody>
            </table>
        </div>
    )
}