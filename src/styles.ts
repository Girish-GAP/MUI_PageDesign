import { styled } from '@mui/material/styles';


const ThemeComponent = styled('div')(({ theme }) => ({
  backgroundColor : theme.palette.background.paper,
  padding : theme.spacing(8, 0, 6)
}));


export default ThemeComponent