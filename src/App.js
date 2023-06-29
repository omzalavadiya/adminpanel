import 'bootstrap/dist/css/bootstrap.min.css';
import './style/adminlte.css'
import './App.css';

import { Form, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Dash from './component/Dash';
import Dash2 from './component/Dash2';
import Table_data from './component/Table_data';
import Register from './component/Register';
import Data_form from './component/Data_form';
import Edit from './component/Edit';
import Singleblog from './component/Singleblog';
import Comment_table from './component/Comment_table';
import Comment_edit from './component/Comment_edit';




function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/home' element={<Home/>}/> */}

          {/* <Route path='/' element={}/> */}
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={window.localStorage.getItem('uid')== null ? <Login/> : <Dash/>}/>
          <Route path='/dash' element={ window.localStorage.getItem('uid') !== null ?<Dash/> : <Login/>}/>
          <Route path='/dash2' element={<Dash2/>}/>
          <Route path='/table_data' element={<Table_data/>}/>
          <Route path='/form' element={<Data_form/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/singleblog/:u_id' element={<Singleblog/>}/>
          <Route path='/comment_table' element={<Comment_table/>}/>
          <Route path='/comment_edit' element={<Comment_edit/>}/>

        


        </Routes>
    </div>
  );
}

export default App;
