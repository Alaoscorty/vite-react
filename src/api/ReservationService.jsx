import axios from 'axios';

const API_URL = 'http://localhost:5000/reservations';

export const createReservation = (data) => axios.post(API_URL, data);
export const fetchReservations = () => axios.get(API_URL);

// api/ReservationService.js

export const getUserReservations = (userId) => {
    return axios.get(`/api/reservations?userId=${userId}`);
  };
  
