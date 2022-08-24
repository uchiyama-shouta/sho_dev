import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-12 text-center text-white">
      <div className="mt-8 flex justify-center space-x-6">
        <IoLogoGithub size={24} />
        <IoLogoTwitter size={24} />
      </div>
      <p className="mt-8">&copy; 2022 Shota uchiyama. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
