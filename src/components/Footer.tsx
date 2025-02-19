import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container  py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-md">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-black transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-black transition">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
