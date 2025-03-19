import { useState } from 'react';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Avatar, Box, Button, Card, CardContent, Grid, Tab, Tabs, Typography } from '@mui/material';

const plans = [
  { name: 'Basic', credits: 15, price: 1499 },
  { name: 'Standard', credits: 33, price: 2999 },
  { name: 'Pro', credits: 70, price: 5995 },
  { name: 'Gladiator', credits: 110, price: 9990 },
];

function Page2() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Mis Créditos
        </Typography>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: '#FFC107', width: 24, height: 24, mr: 1 }}>
            <MonetizationOnIcon sx={{ fontSize: 18, color: 'white' }} />
          </Avatar>
          <Typography fontWeight="bold">0</Typography>
        </Box>
      </Box>
      <Typography color="textSecondary" fontSize={14}>
        Créditos Disponibles
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => setTabIndex(newValue)}
        variant="fullWidth"
        sx={{ mt: 2, mb: 2, bgcolor: '#F5F5F5', borderRadius: 3 }}
      >
        <Tab label="Planes" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
        <Tab label="Créditos" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
      </Tabs>

      {/* Plan Cards */}
      <Grid container spacing={2}>
        {plans.map((plan, index) => (
          <Grid item xs={6} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 1 }}>
              <Box
                sx={{
                  bgcolor: '#1976D2',
                  color: 'white',
                  padding: 1,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  textAlign: 'center',
                }}
              >
                <MonetizationOnIcon sx={{ fontSize: 16, verticalAlign: 'middle' }} /> {plan.credits}{' '}
                Créditos
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">
                  {plan.name}
                </Typography>
                <Typography fontSize={18} fontWeight="bold">
                  ${plan.price.toFixed(2)}
                </Typography>
                <Typography color="textSecondary">Mensual</Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 1, borderRadius: 3, textTransform: 'none' }}
                >
                  Activar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Page2;
