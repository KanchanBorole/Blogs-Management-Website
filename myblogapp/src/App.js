import logo from './logo.svg';
import './App.css';
import Header from './component/HeaderComponent/Header';
import About from './component/AboutComponent/About';
import Banner from './component/BannerComponent/Banner';
import FeaturePost from './component/FeaturePostComponent/FeaturePost';
import SocialConnectPart from './component/SocialConnectPartComponent/SocialConnectPart';
import Footer from './component/FooterComponent/Footer';
import {Route, Routes} from 'react-router-dom';
import Blog from './component/BlogsComponent/Blog';
import Contact from './component/ContactComponent/Contact';
import Home from './component/HomeComponent/Home';
import BlogDetail from './component/BlogDetailComponent/BlogDetail';
import TravelCategory from './component/TravelCategoryComponent/TravelCategory';
import Register from './component/RegisterComponent/Register';
import Login from './component/LoginComponent/Login';
import Logout from './component/LogoutComponent/Logout';
import ManageBloggers from './component/ManageBloggersComponent/ManageBloggers';
import ManageBlog from './component/ManageBlogComponent/ManageBlog';
import MyBlog from './component/MyBlogComponent/MyBlog';
import AddBlog from './component/AddBlogComponent/AddBlog';
import ChangePassword from './component/ProfileComponent/ChangepPassword';
import EditProfile from './component/ProfileComponent/EditProfile';

function App() {
  return (
    <>
     <Header/> 

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/blogdetail" element={<BlogDetail/>}></Route>
      <Route path="/travelcategory" element={<TravelCategory/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/manageblog" element={<ManageBlog/>}></Route>
      <Route path="/managebloggers" element={<ManageBloggers/>}></Route>
      <Route path="/myblog" element={<MyBlog/>}></Route>
      <Route path="/addblog" element={<AddBlog/>}></Route>
      <Route path="/editprofile" element={<EditProfile/>}></Route>
      <Route path="/changepassword" element={<ChangePassword/>}></Route>
     </Routes>

     <Footer/>

    </>
  );
}

export default App;
