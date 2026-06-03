import { siteConfig } from '../config';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-pku-blue to-[#001a3a] text-white py-14 relative">
      {/* 顶部学院红点缀线 */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-pku-red to-transparent" />
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-xl font-bold font-serif mb-2 tracking-tightish">{siteConfig.footer.title}</h3>
          <p className="text-white/55 text-sm tracking-wide">{siteConfig.footer.subtitle}</p>
        </div>
        <div className="border-t border-white/10 pt-8 text-sm text-white/45">
          <p>{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
