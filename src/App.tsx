import React from 'react';
import { Typography, AppBar, Toolbar, Container, Grid, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import ThemeComponent from './styles';

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
          <ThemeComponent>
            <Container maxWidth = "sm" >
              <Typography variant='h2' align='center' color = "textPrimary" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant='h5' align = "center" color = "textSecondary" paragraph>
                Hello everyone, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugiat nemo, nam tempore accusantium magnam et delectus magni minus commodi voluptatibus velit est. Explicabo, eaque blanditiis! Quae ipsam iste dignissimos.
              </Typography>

              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant='contained' color = "primary">
                      See my photos
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant='outlined' color = "primary">
                      See my videos
                    </Button>
                  </Grid>
                </Grid>
              </div>

            </Container>
          </ThemeComponent>
        </main>
    </div>
  );
}

export default App;
