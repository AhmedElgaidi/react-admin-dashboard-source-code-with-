import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from './formSource';
import { productInputs } from './formSource';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* let's use nested route */}
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            {/* user routes */}
            <Route path='users'>
              <Route index element={<List />}></Route>
              <Route path=':userId' element={<Single />}></Route>
              <Route path='new' element={<New inputs={userInputs} title='Add New User' />}></Route>
            </Route>
            {/* product routes */}
            <Route path='products'>
              <Route index element={<List />}></Route>
              <Route path=':productId' element={<Single />}></Route>
              <Route path='new' element={<New inputs={ productInputs } title='Add New Product' />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

