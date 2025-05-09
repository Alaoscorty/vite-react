
import axios from 'axios';
import { Reservation } from '../types/Reservation'; // si tu places l'interface ailleurs

const API_URL = 'http://localhost:5000/reservations';

// Typage du paramètre 'data'
export const createReservation = (data: Reservation) => axios.post(API_URL, data);

// Typage du retour
export const fetchReservations = () => axios.get<Reservation[]>(API_URL);

// Récupération des réservations d'un utilisateur spécifique
export const getUserReservations = (userId: string) => {
  return axios.get<Reservation[]>(`${API_URL}?userId=${userId}`);
};
