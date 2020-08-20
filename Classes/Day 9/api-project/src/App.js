import React, { Component } from "react";
import {ToastContainer} from 'react-toastify';

import config from './config/config.json';
import http from './utils/httpService';

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    // loadDoc();
    console.clear();
    const { data: posts } = await http.get(config.urlEndpoint);
    // const { data: temp } = await http.get(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );
    // console.log(temp);
    // // promise.then((response) => console.log(response.data));
    this.setState({ posts });
    // console.log(response.data);
  }

  handleAdd = async () => {
    const obj = {
      title: "learning react",
      body: "React is easy to understand",
    };
    const {data: post} = await http.post(config.urlEndpoint,obj);
    console.log(post);
    const posts = [post , ...this.state.posts];
    
    this.setState({posts});
  };

  handleUpdate = async (post) => {
    post.title = "Updated title";
    const {data} =  await http.put(config.urlEndpoint+"/"+post.id , post);
    
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    console.log(posts[0]);
    posts[index] = {...post};
    this.setState({posts});
  };

  handleDelete = async (post) => {
    try{
      const temp = await http.delete("https://jsonplaceholder.typicode.com/pos"+"/"+post.id);
    }catch (err){
      // console.log(err);
      // if(err.response && err.response.status===404){
      //   alert('page not found');
      // }
    }
    
    // console.log(temp);
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({posts});
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}> Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
