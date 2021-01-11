import axios from "axios";

const API_URL = 'https://matheuscarv-sds2.herokuapp.com';
const API_LOCAL_URL = 'http://192.168.0.108:8080';

export function fetchOrders(){
  return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: Number){
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}