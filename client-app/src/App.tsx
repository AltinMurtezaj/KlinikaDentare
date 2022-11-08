import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [infermierja, setInfermierja] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/infermierja').then(response =>{
      console.log(response);
      setInfermierja(response.data);
    })
  }, [])




  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities' />
      
        <List>
        {infermierja.map((infermierja: any) => (
            <List.Item key={infermierja.id}>
              {infermierja.title}
            </List.Item>
          ))}
        </List>
        
    </div>
  );
}

export default App;
