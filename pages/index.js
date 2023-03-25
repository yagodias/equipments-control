import { Typography } from '@mui/material';
import LayoutComponent from 'components/LayoutComponent';

export default function Home() {
  return (
    <main sx={{ display: 'flex', alignItems: 'center', justifyContent: 'spaceBetween' }}>
      <LayoutComponent>
        <Typography variant="h4" textAlign="center">
          Olá mundo
        </Typography>
      </LayoutComponent>
    </main>
  )
}
