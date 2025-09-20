const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 ALX Project. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;