import { siteConfig } from '../config';

const Footer = () => {
  return (
    <footer className="bg-pku-blue text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">{siteConfig.footer.title}</h3>
          <p className="text-gray-400">{siteConfig.footer.subtitle}</p>
        </div>
        <div className="border-t border-white/10 pt-8 text-sm text-gray-400">
          <p>{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
