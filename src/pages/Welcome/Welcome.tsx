import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material';

interface Gym {
  name: string;
  address: string;
  rating: number;
  image: string;
}

function Welcome() {
  const gyms = [
    {
      name: 'Moai Fitness',
      address: 'C. Luis Schéker, Santo Domingo, Dominican Republic',
      rating: 4.9,
      image: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
    {
      name: 'Patronato Complejo Acuático',
      address: 'F3HM+347, Santo Domingo 10122, Dominican Republic',
      rating: 4.8,
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'Club Body Shop Naco',
      address: 'C. Padre Fantino Falco 42, Santo Domingo, Dominican Republic',
      rating: 4.9,
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'The Bunker Cross Training',
      address: 'C. Salvador Sturla 9, Santo Domingo 10121, Dominican Republic',
      rating: 4.9,
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'The Cave RD by Víctor Gómez',
      address: 'Calle Salvador Sturla #6 esq Gracita Álvarez, 3er Nivel Plaza Diagonal Naco',
      rating: 5.0,
      image: 'https://via.placeholder.com/50',
    },
  ];

  const GymCard = ({ gym }: { gym: Gym }) => (
    <Card sx={{ display: 'flex', padding: 1, marginBottom: 2, borderRadius: 3, boxShadow: 1 }}>
      <Avatar src={gym.image} variant="rounded" sx={{ width: 60, height: 60, marginRight: 2 }} />
      <CardContent sx={{ padding: 0 }}>
        <Typography fontWeight="bold">{gym.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {gym.address}
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              fontSize="small"
              sx={{ color: i < Math.floor(gym.rating) ? '#FFC107' : '#E0E0E0' }}
            />
          ))}
          <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
            {gym.rating}
          </Typography>
        </Box>
      </CardContent>
      <Button variant="outlined" sx={{ borderRadius: 2, textTransform: 'none' }}>
        Ver Horarios
      </Button>
    </Card>
  );

  const GymList = () => (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 1 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Espacios cercanos
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
          Ver en mapa
        </Typography>
      </Box>
      {gyms.map((gym, index) => (
        <GymCard key={index} gym={gym} />
      ))}
    </Box>
  );

  const PlanCard = () => {
    return (
      <Card
        sx={{
          maxWidth: 400,
          backgroundColor: '#f5f5f5',
          borderRadius: 3,
          boxShadow: 3,
          textAlign: 'center',
          padding: 2,
          margin: 'auto',
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            Plan Standard
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            33 Créditos
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
            <Typography variant="body1">Precio</Typography>
            <Typography
              variant="body1"
              sx={{ textDecoration: 'line-through', marginLeft: 1 }}
              color="textSecondary"
            >
              $2,999.00
            </Typography>
            <Typography variant="body1" sx={{ marginLeft: 1 }} color="primary">
              Gratis
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#18d1f9',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 2,
              marginTop: 2,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#15b8d9' },
            }}
            fullWidth
          >
            Activar
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <meta name="title" content="Inicio" />
      <PlanCard />
      <GymList />
    </>
  );
}

export default Welcome;
