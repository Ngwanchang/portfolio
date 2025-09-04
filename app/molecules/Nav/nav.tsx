import NavLink from '../../atoms/Nav/nav';

const Navigation = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
  
    { href: '/contact', label: 'Contact' }
  ];
  
  return (
    <nav className="hidden md:flex gap-4">
      {links.map((link) => (
        <NavLink 
          key={link.href} 
          href={link.href}
          className="text-base"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;