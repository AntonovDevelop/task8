import React, { useState, useEffect } from 'react';
import './App.css';
import {  AppBar,  Toolbar,  Typography,  Card,  CardContent,  Grid} from "@mui/material";

interface GithubRepo {
  id: number;
  name: string;
  description: string;
}

const getData = async () => {
  return await fetch(`https://api.github.com/users/vladdy-moses/repos`)
  .then(res => res.json())
  .then((res: GithubRepo[]) => {
      console.log(res);
      return res
  })
};
function App() {
  const [data, setData] = useState<GithubRepo[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <AppBar style={{ background: '#5c6ae6', height: 85 }}>
        <Toolbar>
          <Typography variant="h4" color="white">
            Репозитории пользователя:
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid style={{ marginTop: 100 }}
        id="cards"
        sx={{
          margin: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
        {data.map((item) => (
          <Grid item xs={4}>
            <Card key={item.id} sx={{
              backgroundColor: "#5c6ae6",
              color: "white",
              height: 180,
              margin: 3
            }}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center"> {item.name} </Typography>
                <Typography color="white">
                  -----------------------------------------------------------------------------------
                </Typography>
                <Typography variant="h6" color="white">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
    </>
    );
}

export default App;
