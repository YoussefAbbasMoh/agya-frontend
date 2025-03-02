import {Route, Routes } from "react-router-dom";
import { useEffect, useState,useContext } from "react";

// import MainLayout from "./layout/mainLayout";
import Login from "./pages/Login";
// import LoginLayout from "./layout/loginLayout";
import Home from "./pages/Home";
import Users from "./pages/users.jsx";
import Reports from "./pages/Reports";
// import ReportDetails from "./pages/ReportDetails";
import ReportDetailsPost from "./pages/ReportDetailsPost";
import ReportDetailsComment from "./pages/ReportDetailsComment";
import Articles from "./pages/Articles";
import FeaturedArticles from "./pages/featured-articles";
import ArticleEdit from "./pages/article-edit";
import AddArticle from "./pages/Add-article";
import Tages from "./pages/tages";
import Activities from "./pages/Activities";
import ActiviteDetails from "./pages/ActiviteDetails";
import ActiviteEdit from "./pages/Activite-edit";
import PendingActivities from "./pages/PendingActivities";
import PendingActivitiesDetails from "./pages/PendingActivitiesDetails";
import Messages from "./pages/Messages";
import Admins from "./pages/Admins";
import AdminEdit from "./pages/Admin-edit";
import NewAdmin from "./pages/New-admin";
import ReportDetailsArticle from "./pages/ReportDetailsArticle";
import Search from "./pages/search";
import ForgetPassword from "./pages/forgetPassword";
import EditPassword from "./pages/Edit-password";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./context/GlobelContext";

function App() {
  const { isAuthUser } = useContext(GlobalContext);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname ==="/dashboard/overview" ||
       location.pathname ==="/dashboard/users" ||
        location.pathname ==="/dashboard/report" ||
        location.pathname ==="/dashboard/report/article/:id/:content" || 
        location.pathname ==="/dashboard/report/comment/:id/:content" || 
        location.pathname ==="/dashboard/report/post/:id/:content" || 
        location.pathname ==="/dashboard/article" || 
        location.pathname ==="/dashboard/article/featured-articles" || 
        location.pathname ==="/dashboard/article/:name/edit" || 
        location.pathname ==="/dashboard/article/add" || 
        location.pathname ==="/dashboard/tags" ||
        location.pathname ==="/dashboard/activities" ||
        location.pathname ==="/dashboard/activities/:id" ||
        location.pathname ==="/dashboard/activities/:id/edit" ||
        location.pathname ==="/dashboard/activities/pending-activities" ||
        location.pathname ==="/dashboard/activities/pending-activities/:id" ||
        location.pathname ==="/dashboard/article/search" ||
        location.pathname ==="/dashboard/admin" ||
        location.pathname ==="/dashboard/admin/add-admin" ||
        location.pathname ==="/dashboard/admin/edit/:id" ||
        location.pathname ==="/dashboard/forget-password" ||
        location.pathname ==="/dashboard/edit-password/:id" 
      ) {
      if (isAuthUser === null || isAuthUser === undefined) {
        return navigate("/dashboard")
      }
    }
  }, [isAuthUser]);
  const navigate = useNavigate();

  return (
  <>
    <Routes>
      <Route path="/dashboard" element={<Login/>}/>
      <Route path="/dashboard/overview" element={<Home/>}/>
      <Route path="/dashboard/users" element={<Users/>}/>
      <Route path="/dashboard/report" element={<Reports/>}/>
      <Route path="/dashboard/report/article/:id/:content" element={<ReportDetailsArticle/>}/>
      <Route path="/dashboard/report/comment/:id/:content" element={<ReportDetailsComment/>}/>
      <Route path="/dashboard/report/post/:id/:content" element={<ReportDetailsPost/>}/>
      <Route path="/dashboard/article" element={<Articles/>}/>
      <Route path="/dashboard/article/featured-articles" element={<FeaturedArticles/>}/>
      <Route path="/dashboard/article/:name/edit" element={<ArticleEdit/>}/>
      <Route path="/dashboard/article/add" element={<AddArticle/>}/>
      <Route path="/dashboard/tags" element={<Tages/>}/>
      <Route path="/dashboard/activities" element={<Activities/>}/>
      <Route path="/dashboard/activities/:id" element={<ActiviteDetails/>}/>
      <Route path="/dashboard/activities/:id/edit" element={<ActiviteEdit/>}/>
      <Route path="/dashboard/activity/new-activity" element={<ActiviteEdit/>}/>
      <Route path="/dashboard/activities/:id/edit" element={<ActiviteEdit/>}/>
      <Route path="/dashboard/activities/pending-activities" element={<PendingActivities/>}/>
      <Route path="/dashboard/activities/pending-activities/:id" element={<PendingActivitiesDetails/>}/>
      <Route path="/dashboard/messages" element={<Messages/>}/>
      <Route path="/dashboard/article/search" element={<Search/>}/>
      <Route path="/dashboard/admin" element={<Admins/>}/>
      <Route path="/dashboard/admin/add-admin" element={<NewAdmin/>}/>
      <Route path="/dashboard/admin/edit/:id" element={<AdminEdit/>}/>
      <Route path="/dashboard/forget-password" element={<ForgetPassword/>}/>
      <Route path="/dashboard/edit-password/:id" element={<EditPassword/>}/>
    </Routes>
  </>
  )
}

export default App
