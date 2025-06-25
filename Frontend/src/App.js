import './App.css';
import './index.css';
import { Route, Routes } from "react-router-dom";
import Header from './pages/Header';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import PropertyFormPage from './pages/PropertyFormPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <div>
      <Header /> {/* Header will be displayed on every page */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Homepage />} /> {/* Set the default route to Homepage */}
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/PropertyForm" element={<PropertyFormPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
