import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import WorkerSidebar from "./components/WorkerSidebar";
import AdminSidebar from "./components/AdminSidebar";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const PendingAppointment = lazy(() => import("./pages/PendingAppointment"));
const StocksManagement = lazy(() => import("./pages/StocksManagement"));
const SaloonCalender = lazy(() => import("./pages/SaloonCalender"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ConfirmedAppointments = lazy(() => import("./pages/ConfirmedAppointments"));
const CheckInAppointments = lazy(() => import("./pages/CheckInAppointments"));
const PaidAppointments = lazy(() => import("./pages/PaidAppointments"));
const AppointmentForm = lazy(() => import("./pages/AppointmentForm"));
const WorkerAppointment = lazy(() => import("./pages/WorkerAppointment"));
const WorkerSidePage = lazy(() => import("./pages/WorkerSidePage"));
const WorkerStockPage = lazy(() => import("./pages/WorkerStockPage"));
const Invoice = lazy(() => import("./pages/Invoice"));
const AllAppointments = lazy(() => import("./pages/AllAppointments"));
const ClientInfo = lazy(() => import("./pages/ClientInfo"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminInventoryLogs = lazy(() => import("./pages/AdminInventoryLogs"));
const AdminSettings = lazy(() => import("./pages/AdminSettings"));
const AdminEmployeesPage = lazy(() => import("./pages/AdminEmployeesPage"));
const CustomerSideAppt = lazy(() => import("./pages/CustomerSideAppt"));
const AdminServicesList = lazy(() => import("./pages/AdminServicesList"));

function App() {
  const isAuthenticated = false;
  const location = useLocation();

  const hideNavbarAndSidebar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>

      <Routes>
        <Route path="/Workerpage/*" element={<WorkerSidebar />} />
        <Route path="/Adminpage/*" element={<AdminSidebar />} />
        <Route path="/Customerpage/*" element={<AdminSidebar />} />
      </Routes>

      <div className="main-content">
        {!hideNavbarAndSidebar && (
          <div className="app-navbar">
            <Navbar />
            <Sidebar />
          </div>
        )}

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/pendingappointment" element={<PendingAppointment />} />
            <Route path="/AdminPage/pendingappointment" element={<PendingAppointment />} />
            <Route path="/AdminPage/stockmanagement" element={<StocksManagement />} />
            <Route path="/calendar" element={<SaloonCalender />} />
            <Route path="/AdminPage/calendar" element={<SaloonCalender />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ConfirmedAppointments" element={<ConfirmedAppointments />} />
            <Route path="/AdminPage/ConfirmedAppointments" element={<ConfirmedAppointments />} />
            <Route path="/CheckInAppointments" element={<CheckInAppointments />} />
            <Route path="/AdminPage/CheckInAppointments" element={<CheckInAppointments />} />
            <Route path="/PaidAppointments" element={<PaidAppointments />} />
            <Route path="/AdminPage/PaidAppointments" element={<PaidAppointments />} />
            <Route path="/AppointmentForm" element={<AppointmentForm />} />
            <Route path="/WorkerAppointment" element={<WorkerAppointment />} />
            <Route path="/Workerpage" element={<WorkerSidePage />} />
            <Route path="/Workerpage/Workerstockpage" element={<WorkerStockPage />} />
            <Route path="/AdminPage/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/allappointments" element={<AllAppointments />} />
            <Route path="/AdminPage/allappointments" element={<AllAppointments />} />
            <Route path="/clientinfo" element={<ClientInfo />} />
            <Route path="/AdminPage/clientinfo" element={<ClientInfo />} />
            <Route path="/AdminPage/AdminInventoryLogs" element={<AdminInventoryLogs />} />
            <Route path="/AdminPage/AdminSettings" element={<AdminSettings />} />
            <Route path="/AdminPage/AdminEmployeesPage" element={<AdminEmployeesPage />} />
            <Route path="/AdminPage/AdminServicesList" element={<AdminServicesList />} />
            <Route path="/CustomerPage/CustomerBookingForm" element={<CustomerSideAppt />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
