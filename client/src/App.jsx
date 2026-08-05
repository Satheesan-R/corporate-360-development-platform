import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import HRDashboard from "./pages/HrDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";


function App(){ 
   return(

<BrowserRouter>

<Routes>

<Route
path="/login"
element={<Login/>}
/>

<Route path="/employee/dashboard" 
element={

<ProtectedRoute roles={["EMPLOYEE"]}>

<EmployeeDashboard/>

</ProtectedRoute>

}
/>

<Route
path="/hr/dashboard"
element={

<ProtectedRoute roles={["HR_MANAGER"]}>

<HRDashboard/>

</ProtectedRoute>

}
/>

<Route
path="/admin/dashboard"
element={

<ProtectedRoute roles={["SYSTEM_ADMIN"]}>

<AdminDashboard/>

</ProtectedRoute>

}
/>

</Routes>

</BrowserRouter>

)

}


export default App;