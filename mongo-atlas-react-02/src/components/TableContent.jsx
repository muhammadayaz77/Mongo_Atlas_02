import axios from 'axios';
import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
let URL = 'https://mongo-atlas-crud-1.vercel.app/api/items';

function TableContent({user,setUser,GETData}) {
  let handleDelete = (id) => {
    console.log(id);
    axios.delete(`${URL}/${id}`)
    .then(function (response) {
      // setGetData([getData,response.data])
      let deletedItem = user.filter(item => item._id != id);
      setUser(deletedItem);
      console.log(user)
      // GETData();
      console.log('success');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  return (
    <>
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-36 mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xl">
            <tr className=''>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
                {user.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-lg">
                <td class="px-6 py-4">
                    {item.name}
                </td>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4 flex">
                  <div className='p-3 rounded-full hover:bg-blue-100 transition-all'>
                  <MdEdit className='text-3xl text-blue-600 rounded-full' />
                  </div>
                  <div className='p-3 rounded-full hover:bg-red-100 transition-all'>
                  <MdDelete 
                  onClick={() => handleDelete(item._id)}
                  className='text-3xl text-red-600 rounded-full' />
                  </div>
                </td>
            </tr>
                ))}
            
        </tbody>
    </table>
</div>

    </>
  )
}

export default TableContent