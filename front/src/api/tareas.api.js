import axios from 'axios'

// url base

const tareaAPI = axios.create(
    {
        baseURL:'http://127.0.0.1:8000/taskApp/api/v1/tareas-api/'
    }
)

// forma 3

export const getAlltareas=()=>tareaAPI.get('/')
export const getTarea=(id)=>tareaAPI.get(`/${id}`)
export const createTareas=(tarea)=>tareaAPI.post('/',tarea)
export const deleteTareas=(id)=>tareaAPI.delete(`/${id}`)
export const updateTareas=(id,tarea)=>tareaAPI.put(`/${id}/`,tarea)


// forma 2
// export const getAlltareas=()=>axios.get('http://127.0.0.1:8000/taskApp/api/v1/tareas-api/')

// forma 1
// export const getAlltareas=()=>{
//     return axios.get('http://127.0.0.1:8000/taskApp/api/v1/tareas-api/')

// }