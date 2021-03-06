import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';

function App() {
  return (
   <>
      <AppBar position="fixed">
<Toolbar>
<Typography variant="h6">Video Player
</Typography>
</Toolbar>
      </AppBar>
      <Toolbar/>
      <Container maxWidth="md">
<ReactPlayer
    url="https://www.youtube.com/watch?v=jssO8-5qmag"
/>
      </Container>
   </>
  );
}

export default App;
