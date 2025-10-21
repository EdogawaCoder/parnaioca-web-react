import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MenuCard from '../../molecules/Menu/MenuCard';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import { Box } from '@mui/material';

export default function Menu() {
  return (
    <Box sx={{ display: 'flex', gap: 1 , flexWrap: 'wrap' }}>
      <MenuCard title="Dashboard" 
      icon={<DashboardIcon />} onClick={() => console.log('Dashboard')} />
      <MenuCard title="Users" 
       icon={<PersonIcon />} onClick={() => console.log('Users')} />    
      <MenuCard title="Logs" 
       icon={<SettingsIcon />} onClick={() => console.log('Configurações')} />
    </Box>
  );
}
