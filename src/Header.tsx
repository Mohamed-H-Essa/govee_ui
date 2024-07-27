import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { styled } from '@mui/material/styles';

const GradientAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #3a3a3a 30%, #1a1a1a 90%)',
});

const Header: React.FC = () => {
  return (
    <GradientAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="device">
          <MedicalServicesIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Govee
        </Typography>
      </Toolbar>
    </GradientAppBar>
  );
};

export default Header;
