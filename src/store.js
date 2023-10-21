import { create } from 'zustand'

export const useStore = create((set) => ({
    reservations: [], 
    addReservation:(hotel, dates) => 
    set(state => ({ reservations: [...state.reservations, { hotel, dates }]
    }))
}))

