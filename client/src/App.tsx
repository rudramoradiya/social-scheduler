import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Scheduler from "./pages/Scheduler";
import AIComposer from "./pages/AIComposer";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <>
            <Toaster position="top-right"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                //layout component is used to wrap the dashboard, accounts, schedule, and ai-composer pages. It provides a consistent layout and navigation for these pages.
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />}/>
                    <Route path="/accounts" element={<Accounts />}/>
                    <Route path="/schedule" element={<Scheduler />}/>
                    <Route path="/ai-composer" element={<AIComposer />}/>

                </Route>
            </Routes>
        </>
    );
}
