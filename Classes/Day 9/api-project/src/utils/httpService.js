import axios from "axios";
import { toast } from 'react-toastify';
// Types of requests
// CRUD application -> Create,Read, Update and Delete
// POST Request -> Create resource
// GET Request -> Fetching/Reading the resource
// PUT([
//   {'a' :'a'},
//   {'b':'b'}
// ]) / PATCH([{'a':'A'}]) -> Updating the resource
// DELETE Request -> Deleteing a resource

//AJAX Example
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//   xhttp.send();
// }

axios.interceptors.response.use(null, error => {
    // console.log("Error log",err);
    // console.log(error);
    
    const expectedError = error.response && error.response.status >= 400 && error.response.status<500;
    if(expectedError){
      toast.error('Expected error occured');
    }else{
        toast("Unexpected Error");
    }
    return  Promise.reject(error);
});


export default {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post
}

