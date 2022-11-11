import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";
import reactStickyBox from "react-sticky-box";

export default function Layout({ children }) {
    return (
        <div>
        <Navbar />
        {children}
        <Footer />
        </div>
    );
    }