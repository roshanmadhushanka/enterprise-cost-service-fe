// import {Button, DatePicker, Space, Switch} from "antd";
// import "antd/dist/antd.min.css";

import { Suspense, lazy } from "react";
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
const Home = lazy(() => import('./routes/home/home.route'));

function App() {

  return (
      <Suspense fallback={<Spinner/>}>
          <Routes>
              <Route index element={<Home />} />
          </Routes>
      </Suspense>
  );
}

export default App;
