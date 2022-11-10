import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Infermierja } from '../models/infermierja';

function App() {
  const [infermjeret, setInfermierja] = useState<Infermierja>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/infermierja').then(response =>{
      setInfermierja(response.data);
    })
  }, [])




  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities' />
      
        <List>
        {infermjeret.map((infermierja: any) => (
            <List.Item key={infermierja.id}>
              {infermierja.title}
            </List.Item>
          ))}
        </List>
        
    </div>
  );
}

export default App;
