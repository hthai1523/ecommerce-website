import routesConfig from ".././config/route";

// Header only

import Home from ".././pages/Home";
import Login from ".././pages/Login";
import Register from ".././pages/Register";
import Product from ".././pages/Product";
import Blog from ".././pages/Blog";
import About from ".././pages/About";
import ProductDetail from '.././pages/ProductDetail';
import Cart from '.././pages/Cart';
import Profile from '.././pages/Profile';

import ProductListLayout from "../components/Layout/ProductListLayout";
import ProfileLayout from "../components/Layout/ProfileLayout"


const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: '/ecommerce-website', component: Home },
  { path: routesConfig.product, component: Product, layout: ProductListLayout },
  { path: routesConfig.blog, component: Blog },
  { path: routesConfig.about, component: About },
  { path: routesConfig.productDetail, component: ProductDetail },
  { path: routesConfig.cart, component: Cart },
  { path: routesConfig.login, component: Login ,  layout: null },
  { path: routesConfig.register, component: Register, layout: null },
  { path: routesConfig.profile, component: Profile, layout: ProfileLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };