import "../Footer/style.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto text-center">
        {/* Image Section */}
        <div className="mb-4">
          <img
            src="../src/assets/images/Group.png"
            alt="Logo"
            className="mx-auto py-6"
          />
        </div>

        {/* Menu Section */}
        <nav className="mb-4 pb-6">
          <ul className="flex justify-center space-x-4">
            <li>
              <a className="mx-2">Data Science Lab</a>
            </li>
            <li>
              <a className="mx-2">Community</a>
            </li>
            <li>
              <a className="mx-2">Career</a>
            </li>
            <li>
              <a className="mx-2">Academy</a>
            </li>
            <li>
              <a className="mx-2">Consulting</a>
            </li>
            <li>
              <a className="mx-2">News</a>
            </li>
            <li>
              <a className="mx-2">Feed</a>
            </li>
            <li>
              <a className="mx-2">Forum</a>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="footer-icons flex justify-center space-x-6 pb-6">
          <a className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} />
          </a>
          <a className="mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
        </div>

        <div className="footer-copyright">
          <p>&#169; 2023 Datapark</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
