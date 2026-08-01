import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import Transactions from "./pages/Transactions";
import KillSwitch from "./pages/KillSwitch";
import Agent from "./pages/Agent";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/killswitch" element={<KillSwitch />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;