import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Home/Dashboard";

import Interests from "./Pages/Interest/Interest";

import Social from "./Pages/Social/Social";

import BusinessCategory from "./Pages/BusinessCategory/BusinessCategory";

import Payments from "./Pages/Payments/Payments";

import Language from "./Pages/Language/Languages";

import Terms from "./Pages/TermsandCondition/Terms";
import CreateTerms from "./Pages/TermsandCondition/CreateTerms";
import EditTerms from "./Pages/TermsandCondition/EditTerms";

import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import CreatePrivacyPolicy from "./Pages/PrivacyPolicy/CreatePrivacyPolicy";
import EditPrivacyPolicy from "./Pages/PrivacyPolicy/EditPrivacyPolicy";

import CookiePolicy from "./Pages/CookiePolicy/CookiePolicy";
import CreateCookiePolicy from "./Pages/CookiePolicy/CreateCookiePolicy";
import EditCookiePolicy from "./Pages/CookiePolicy/EditCookiePolicy";

import PrivateComponent from "./Private/PrivateComponent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/interests" element={<Interests />} />

          <Route path="/socials" element={<Social />} />

          <Route path="/businesscategories" element={<BusinessCategory />} />

          <Route path="/payments" element={<Payments />} />

          <Route path="/languages" element={<Language />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/create-terms" element={<CreateTerms />} />
          <Route path="/edit-terms/:id" element={<EditTerms />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/create-privacypolicy"
            element={<CreatePrivacyPolicy />}
          />
          <Route
            path="/edit-privacypolicy/:id"
            element={<EditPrivacyPolicy />}
          />

          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/create-cookiepolicy" element={<CreateCookiePolicy />} />
          <Route path="/edit-cookiepolicy/:id" element={<EditCookiePolicy />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
