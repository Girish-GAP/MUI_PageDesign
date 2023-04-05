import React from 'react';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


function App() {
  return (
    <div>
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera>
              <Typography>
                Photo Album
              </Typography>
            </PhotoCamera>
          </Toolbar>
        </AppBar>

        <main>
          <div>
            <Container maxWidth = "sm">
              <Typography variant='h2' align='center' color = "textPrimary" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant='h5' align = "center" color = "textSecondary" paragraph>
                Hello everyone, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugiat nemo, nam tempore accusantium magnam et delectus magni minus commodi voluptatibus velit est. Explicabo, eaque blanditiis! Quae ipsam iste dignissimos.
              </Typography>
            </Container>
          </div>
        </main>
    </div>
  );
}

export default App;
