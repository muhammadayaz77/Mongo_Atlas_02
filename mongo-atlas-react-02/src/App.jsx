import React, { useEffect, useState } from 'react'
import axios from 'axios'
let URL = 'https://mongo-atlas-crud-1-bf5iclxbv-muhammadayaz77s-projects.vercel.app/api/items';
function App() {
  
  let [user,setUser] = useState([]);
  useEffect(() => {
    axios.get(URL)
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