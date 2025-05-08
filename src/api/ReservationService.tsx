// api/ReservationService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/reservations';

export const createReservation = (data: any) => axios.post(API_URL, data);

export const fetchReservations = () => axios.get(API_URL);

export const getUserReservations = (userId: string | number) => {
  return axios.get(`/api/reservations?userId=${userId}`);
};
