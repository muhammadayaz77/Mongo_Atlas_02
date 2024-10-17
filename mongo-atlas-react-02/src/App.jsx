import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  
  let [user,setUser] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/items')
  .then(function (response) {
    // handle success
    setUser(response.data);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[])
  return (
    <>
    {user.map((item) => {
      <ul>
        <li>{item.name}</li>
      </ul>
    })}
    </>
  )
}

export default App