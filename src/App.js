import { Route , Routes } from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {PLayPage} from "./pages/PlayPage";
import {RecordPage} from "./pages/RecordPage";
import {NotFound} from "./pages/NotFound";

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/signin' element={<LoginPage/>} />
        <Route path='/signup' element={<RegisterPage/>}/>
        <Route path='/play' element={<PLayPage/>} />
        <Route path='/records' element={<RecordPage/>}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
