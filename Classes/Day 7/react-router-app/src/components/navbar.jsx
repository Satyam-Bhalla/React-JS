import React from "react";
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
      <Link to="/">Home</Link>
        {/* <a href="/">Home</a> */}
      </li>
      <li>
      <NavLink activeClassName="active"  to="/products">Products</NavLink>
        {/* <a href="/products">Products</a> */}
      </li>
      <li>
      <Link to="/posts/2020/08">Posts</Link>
        {/* <a href="/posts/2018/06">Posts</a> */}
      </li>
      <li>
      <Link to="/admin">Admin</Link>
        {/* <a href="/admin">Admin</a> */}
      </li>
    </ul>
  );
};

export default NavBar;
