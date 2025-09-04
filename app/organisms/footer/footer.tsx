
import Link from 'next/link';
import Button from '../../atoms/button/button';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Dribbble', href: '#', icon: 'dribbble' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-orange-500 mb-4">Evolve Authentic</div>
            <p className="text-gray-400 mb-6">
              Building digital experiences as unique as you are.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <div className="w-20 h-14 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-100 transition-colors duration-200">                    
                    <span className="text-2xl">{social.icon}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Services</h3>
            <ul className="space-y-3">
              {['UI/UX Design', 'Web Development', 'Brand Identity', 'Digital Marketing', 'Content Strategy'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <Button type="submit" variant="primary" size="small">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Evolve Authentic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;