import { Link } from "react-router-dom";
import routeConfig from "../../../../config/route";



function Footer() {
  return (
    <section className="bg-[rgb(40,40,40)]  w-full pt-[190px] flex ">
      <div className=" flex flex-wrap justify-center container mx-auto">
        <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 space-y-7 ">
          <Link to={routeConfig.home}>
            <div className=" text-left text-3xl font-extrabold green-primary-color">
              <h1>Gofl Shop</h1>
            </div>
          </Link>
          <p className="text-[#b4b4b4]">
            Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis.
            Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer
            ac sem.
          </p>
        </div>
        <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 space-y-7">
          <h6 className="h-9  text-white uppercase">usefull links</h6>
          <ul className="text-[#b4b4b4]">
            <li>Partners</li>
            <li>Bloggers</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 space-y-7">
          <h6 className="h-9  text-white">SITEMAP</h6>
          <ul className="text-[#b4b4b4]">
            <li>Partners</li>
            <li>Bloggers</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 space-y-7">
          <h6 className="h-9  text-white">SHIPPING & RETURNS</h6>
          <ul className="text-[#b4b4b4]">
            <li>About Us</li>
            <li>Track Orders</li>
            <li>Returns</li>
            <li>Jobs</li>
            <li>Shipping</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 space-y-7">
          <h6 className="h-9  text-white">CONTACT</h6>
          <ul className="text-[#b4b4b4]">
            <li>Your Company Ltd</li>
            <li className="capitalize">khu 2 hoang tuong thanh ba phu tho</li>
            <li><a className="" href="tel:0964819465">+84 0964819465</a></li>
            <li><a className="" href="mailto:hthai1523@mail.com">hthai1523@mail.com</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
