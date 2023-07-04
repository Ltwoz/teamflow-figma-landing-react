import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }
]);

function App() {
    return (
        <div className="font-inter">
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
