import React from "react";
import Directory from "../../Directory/Directory";
import "./homepage.style.scss";
import { HomePageContainer } from "./HomePage.style";

export default function HomePage() {
  return (
    <HomePageContainer>
      <div className="directory-menu">
        <Directory />
      </div>
    </HomePageContainer>
  );
}
