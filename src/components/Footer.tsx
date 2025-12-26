const Footer = () => {
  return (
    <footer className="bg-pku-blue text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">北京大学数学科学学院学生会学术组</h3>
          <p className="text-gray-400">Academic Department, SMS Student Union, PKU</p>
        </div>
        <div className="border-t border-white/10 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SMS Academic Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
