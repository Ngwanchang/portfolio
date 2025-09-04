// src/components/organisms/Header/Header.jsx
import Logo from '../../atoms/Logo/logo';
import Navigation from '../../molecules/Nav/nav';
import MobileMenu from '../../molecules/mobilemenu/mobilemenu';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
          <div className="flex items-center space-x-4">
            {/* Cart icon would go here */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;