import { Link } from "react-router-dom";
import routeConfig from "../../../../config/route";
import images from "../../../../assets";

function Footer() {
  return (
    <section className="bg-[rgb(40,40,40)] w-full pt-20 pb-10">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-2/12 md:w-4/12 sm:w-6/12 px-4 mb-10 space-y-5">
          <Link to={routeConfig.home} className="h-full">
            <img
              src={images.logo}
              alt="Thai Hoang"
              className="w-48 h h-full px-4 object-containe"
            />
          </Link>
          <p className="text-[#b4b4b4]">
            Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis.
            Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer
            ac sem.
          </p>
        </div>
        <div className="w-full lg:w-2/12 md:w-4/12 sm:w-6/12 px-4 mb-10 space-y-5">
          <h6 className="text-white uppercase">Useful Links</h6>
          <ul className="text-[#b4b4b4] space-y-2">
            <li>Partners</li>
            <li>Bloggers</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="w-full lg:w-2/12 md:w-4/12 sm:w-6/12 px-4 mb-10 space-y-5">
          <h6 className="text-white uppercase">Sitemap</h6>
          <ul className="text-[#b4b4b4] space-y-2">
            <li>Partners</li>
            <li>Bloggers</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="w-full lg:w-2/12 md:w-4/12 sm:w-6/12 px-4 mb-10 space-y-5">
          <h6 className="text-white uppercase">Shipping & Returns</h6>
          <ul className="text-[#b4b4b4] space-y-2">
            <li>About Us</li>
            <li>Track Orders</li>
            <li>Returns</li>
            <li>Jobs</li>
            <li>Shipping</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="w-full lg:w-2/12 md:w-4/12 sm:w-6/12 px-4 mb-10 space-y-5">
          <h6 className="text-white uppercase">Contact</h6>
          <ul className="text-[#b4b4b4] space-y-2">
            <li>Your Company Ltd</li>
            <li className="capitalize">Khu 2 Hoang Tuong, Thanh Ba, Phu Tho</li>
            <li>
              <a className="text-white " href="tel:0964819465">
                +84 0964819465
              </a>
            </li>
            <li>
              <a className="text-white " href="mailto:hthai1523@mail.com">
                hthai1523@mail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
