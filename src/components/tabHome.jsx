import { Container } from "@chakra-ui/react";
import "../App.css";
import Header from '../components/header';
import React from "react";

function TabsHome() {
  return (
    <Container class="home-container">
        <Header/>
      <div className="description-home">
        <div className="description">
          <div>
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <div>
              <img src="/home/Group.png" alt="image-space" class="background-img"/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TabsHome;