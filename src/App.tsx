// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import PrivateRoute from './PrivateRoute';
import NotFound from './views/NotFound';
import Page from './views/Page';
import Users from './views/Users';
import UserDetails from './views/UserDetails';
import Products from './views/Products';
import Category from './views/Category';
import Stores from './views/Stores';
import Orders from './views/Orders';
import StoreDetails from './views/StoreDetails';
import ProductDetails from './views/ProductDetails';
import CategoryDetails from './views/CategoryDetails';
import OrderDetails from './views/OrderDetails';

// import Form from './views/Form'

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   console.log('Authent');
  //   localStorage.getItem('isLoggedIn') === 'true'
  //     ? setAuthenticated(true)
  //     : setAuthenticated(false);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/page' element={<PrivateRoute component={Page} />}>
          <Route
            path='/page'
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path='/page/dashboard'
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path='/page/users'
            element={<PrivateRoute component={Users} />}
          />
          <Route
            path='/page/userdetails/:id'
            element={<PrivateRoute component={UserDetails} />}
          />
          <Route
            path='/page/products'
            element={<PrivateRoute component={Products} />}
          />
          <Route
            path='/page/productdetails/:id'
            element={<PrivateRoute component={ProductDetails} />}
          />
          <Route
            path='/page/category'
            element={<PrivateRoute component={Category} />}
          />
          <Route
            path='/page/categorydetails/:id'
            element={<PrivateRoute component={CategoryDetails} />}
          />
          <Route
            path='/page/stores'
            element={<PrivateRoute component={Stores} />}
          />
          <Route
            path='/page/storedetails/:id'
            element={<PrivateRoute component={StoreDetails} />}
          />
          <Route
            path='/page/orders'
            element={<PrivateRoute component={Orders} />}
          />
          <Route
            path='/page/Orderdetails/:id'
            element={<PrivateRoute component={OrderDetails} />}
          />
          {/* <Route
            path='/page/form'
            element={<PrivateRoute component={Form} />}
          /> */}
        </Route>
        <Route path='*' element={<NotFound />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
