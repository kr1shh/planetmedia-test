import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  AdsDetails,
  Dashboard,
  Home,
  Login,
  Register,
  MyAccount,
  Profile,
  PostAd,
  Ads,
} from "./pages";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="my-account" element={<MyAccount />} />
            <Route path="profile" element={<Profile />} />
            <Route path="post-ad" element={<PostAd />} />
            <Route path="ads" element={<Ads />} />
          </Route>
          <Route path="ads/:id" element={<AdsDetails />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </>
    )
  );

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
