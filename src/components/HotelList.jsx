import { Card, Stack, Typography, Link, CardMedia, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const fetchHotels =  async () => {
    const res  =  await fetch('htpp://localhost:3000/hotels')
    if(!res.ok) {
        throw new Error('Network response was not ok')
    }

    return res.json()
}

function HotelList() {
        const {
            data: hotels,
            isLoading,
            isError,
        }
         = useQuery({ queryKey: ['hotels'], queryFn: fetchHotels})
        if(isLoading) return <div>Loading...</div>
        if(isError) return <div>Error</div>
        return (
            <>
              <Typography variant="h4" component="h1" gutterBottom>
                  Booking app
                </Typography>

            <Stack spacing={2}>
                {hotels.map((hotel) => (
                    <Link key={hotel.id} to={`/hotel/${hotel.id}`}>
                    <Card sx={{ maxWidth: 345, backgroundColor: "#eBeBeB" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={hotel.image}
                            alt="hotel image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {hotel.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {hotel.description}
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                ))}
            </Stack>
            </>
        )


}