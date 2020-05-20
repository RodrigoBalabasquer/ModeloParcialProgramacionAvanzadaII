import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { appActions } from '../redux/actions';
import { Msg } from '../components';

export default function Formulario(props){
    const { appReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const { lista } = appReducer;
    
    const [state,setState] = React.useState({
        user: '',
        password: '',
        activo: false,
        opcion: '1',
        id: 0,
    });

    const handleChange = e => {
        const value = e.target.value;
        const checked = e.target.checked;
        if(e.target.name === 'user' && value.length <= 10){
            setState({
                ...state,user: value
            });
        }
        else if(e.target.name === 'password' && value.length <= 10){
            setState({
                ...state,password: value
            });
        }
        else if(e.target.name === 'opcion'){
            setState({
                ...state,opcion: value
            });
        }
        else if(e.target.name === 'activo'){
            setState({
                ...state,activo: checked
            });
        }
    }
    const enviar = () =>{
        if(lista.length > 0)
            state.id = lista.length+1;
        else
            state.id = 1;

        lista.push(state);

        console.log(lista);
        dispatch(appActions.cargarLista(lista));

        setState({
            ...state,user: "",password:"",activo:false,opcion:"1"
        });
    }
    return(
        <div>
            <form>
                <h1>Formulario</h1>
                <label>
                    nombre<br/>
                    <input type="text"
                        value={state.user}
                        name="user"
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    clave<br/>
                    <input type="password"
                        value={state.password}
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <input type="checkbox" name="activo" checked={state.activo} onChange={handleChange}/> <label>Estoy Activo</label>
                <br/>
                <select name="opcion" value={state.opcion} onChange={handleChange}>
                    <option value="1">Valor 1</option> 
                    <option value="2">Valor 2</option>
                    <option value="3">Valor 3</option>
                </select>
                <br/>
                <br/>
                <input type="button" value="Enviar" onClick={enviar}/>
            </form>
            <Msg/>
        </div>
    )
}