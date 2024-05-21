import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6 bg-[#0D2033] w-full">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <img
            src="../src/assets/images/Group.png"
            alt="Logo"
            className="mx-auto py-6"
          />
        </div>

        <nav className="mb-4 pb-6">
          <ul className="flex flex-col md:flex-row justify-center space-x-4 text-[14px] lg:text-[16px]">
            <li className="mb-2">
              <a className="mx-2">Data Science Lab</a>
            </li>
            <li className="mb-2">
              <a className="mx-2">Community</a>
            </li>
            <li className="mb-2">
              <a className="mx-2">Career</a>
            </li>
            <li className="mb-2">
              <a className="mx-2">Academy</a>
            </li>
            <li className="mb-2">
              <a className="mx-2">Consulting</a>
            </li>
            <li className="mb-2">
              <Link to="/news" className="mx-2">
                News
              </Link>
            </li>
            <li className="mb-2">
              <a className="mx-2">Feed</a>
            </li>
            <li className="mb-2">
              <a className="mx-2">Forum</a>
            </li>
          </ul>
        </nav>

        <div className="footer-icons flex items-center md:flex-row justify-center space-x-6 pb-6">
          <a
            className="mx-2 text-[#C3C3C3]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={28} />
          </a>
          <a
            className="mx-2 text-[#C3C3C3]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        <div className="footer-copyright">
          <p className="text-[#C3C3C3]">&#169; 2023 Datapark</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
