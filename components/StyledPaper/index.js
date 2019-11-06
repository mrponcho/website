import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper)(({ background, color }) => ({
  display: 'block',
  padding: 18,
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  background,
  color,
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export default StyledPaper;
