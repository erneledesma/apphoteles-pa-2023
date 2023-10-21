import toast from "react-hot-toast";
import { useForm }  from "react-hook-form"
import useStore from "../store";
import { Input, Button, Typography } from "@mui/material";

 
const BookingForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },      
    } = useForm();

    const addReservation = useStore((state) => state.addReservation)

    const onSubmit = (data) => {
        addReservation( hotel, data)
        toast.success('Reservation added')
    }


    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="date" {...register("startDate", {require: true})} />
            { errors.startdata && (
                <Typography color="red">Start date is required</Typography>
            )}
            <br />
            <Input type="date" {...register("endDate", {require: true})} />
            { errors.startdata && (
            <Typography color="red">Start date is required</Typography>
            )}   
            <br />
            <br />
            <Button variant="contained" type="submit">Reservar</Button>
        </form>
        
     )
 }
 
export default BookingForm;