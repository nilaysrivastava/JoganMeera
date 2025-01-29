import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8c0145] text-white p-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Direct Links section */}
          <div className="md:flex-1">
            <h5 className="font-bold mb-2">Direct Links</h5>
            <ul className="list-none p-0">
              <li className="cursor-pointer hover:text-gray-200">Home</li>
              <li className="cursor-pointer hover:text-gray-200">
                Our Products
              </li>
              <li className="cursor-pointer hover:text-gray-200">About Us</li>
              <li className="cursor-pointer hover:text-gray-200">Contact Us</li>
            </ul>
          </div>

          {/* Connect section */}
          <div className="md:flex-1">
            <h5 className="font-bold mb-2">CONNECT WITH US</h5>
            <p className="flex items-center py-1">
              <FaPhoneAlt className="mr-2" /> +918279233727
            </p>
            <p className="flex items-center py-1">
              <FaEnvelope className="mr-2" /> dakshhgupta55@gmail.com
            </p>
          </div>

          {/* Social Media Handles section */}
          <div className="md:flex-1">
            <h5 className="font-bold mb-2">FOLLOW US</h5>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-white/60" />

        <div className="text-center text-sm mt-8">© 2024, Jogan Meera</div>
      </div>
    </footer>
  );
};

export default Footer;
