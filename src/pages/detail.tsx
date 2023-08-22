import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';

const Edit = () => {
  const location = useLocation();
  const locationObject = location.state.event
  
  
  return(
    <Container>
      {locationObject.title}
    </Container>
  )
}

export default Edit