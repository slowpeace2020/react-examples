import axios from "axios";

export const api = process.env.REACT_APP_RECORDS_API_URL || "http://localhost:3000/"


export const getAll = () => axios.get(`${api}/api/v1/records`)

export const create = (body) => axios.post(`${api}/api/v1/records`,body)
export const update = (id,body) => axios.put(`${api}/api/v1/records/${id}`,body)
export const remove = (id) => axios.delete(`${api}/api/v1/records/${id}`)