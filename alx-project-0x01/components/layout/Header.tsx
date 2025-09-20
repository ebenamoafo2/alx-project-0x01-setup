import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              ALX Project
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-gray-900 transition-colors">
              Posts
            </Link>
            <Link href="/users" className="text-gray-700 hover:text-gray-900 transition-colors">
              Users
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;