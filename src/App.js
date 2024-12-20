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

import BusinessDescription from "./Pages/Business/Description/Description";
import CreateBusinessDescription from "./Pages/Business/Description/addDescription";
import EditBusinessDescription from "./Pages/Business/Description/editDescription";

import BusinessCategories from "./Pages/Business/BusinessCategory/BusinessCategory";
import SelectBusinessCategory from "./Pages/Business/BusinessCategory/selectBusinessCategory";
import UpdateBusinessCategory from "./Pages/Business/BusinessCategory/updateBusinessCategory";


import HangoutContact from "./Pages/Business/hangoutContact/hangoutContact";
import CreateHangoutContact from "./Pages/Business/hangoutContact/createHangoutContact";
import EditHangoutContact from "./Pages/Business/hangoutContact/editHangoutContact";


import SocialLinks from "./Pages/Business/SocialMedia/socialLinks";
import AddSocialLinks from "./Pages/Business/SocialMedia/addSocialLinks";
import EditSocialLinks from "./Pages/Business/SocialMedia/editSocialLinks";


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

          <Route path="/businessdescription" element={<BusinessDescription />} />
          <Route path="/create-businessdescription" element={<CreateBusinessDescription />} />
          <Route path="/edit-businessdescription/:id" element={<EditBusinessDescription />} />

          <Route path="/businesscategory" element={<BusinessCategories />} />
          <Route path="/select-businesscategory" element={<SelectBusinessCategory />} />
          <Route path="/update-businesscategory/:id" element={<UpdateBusinessCategory />} />


          <Route path="/hangoutcontact" element={<HangoutContact />} />
          <Route path="/create-hangoutcontact" element={<CreateHangoutContact />} />
          <Route path="/edit-hangoutcontact/:id" element={<EditHangoutContact />} />

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

          <Route path="/sociallinks" element={<SocialLinks />} />
          <Route path="/add-sociallinks" element={<AddSocialLinks />} />
          <Route path="/edit-sociallinks/:id" element={<EditSocialLinks />} />



        </Route>
      </Routes>
    </>
  );
};

export default App;
