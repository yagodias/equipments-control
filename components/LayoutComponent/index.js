import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import MenuComponent from 'components/MenuComponent';

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function LayoutComponent({ children }) {
  return (
    <Container maxWidth="none" disableGutters>
      <MenuComponent />
      {children}
    </Container>
  );
}
