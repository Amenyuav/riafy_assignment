import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';

function App() {
  return (
   <>
      <AppBar position="fixed">
<ToolBar>
<Typography variant="h6">Video Player
</Typography>
</ToolBar>
      </AppBar>
      <ToolBar/>
      <Container maxWidth="md">
<ReactPlayer
    url="https://www.youtube.com/watch?v=jssO8-5qmag"
/>
      </Container>
   </>
  );
}

export default App;