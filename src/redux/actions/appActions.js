import { app } from '../types';

export function cargarLista(lista){
    return (dispatch,state) => {
        //console.log(state);
        dispatch(set(true));

        setTimeout(() => {
            dispatch(setLista(lista));
            dispatch(set(false));
        }, (1000));
    }
}

export function set(loading=false, error=false, errorMsg=''){
    return{
        type: app.SET,
        payload:{
            loading,
            error,
            errorMsg
        }
    }
}

export function setLista(lista){
    return{
        type: app.SetLista,
        payload: lista
    }
}