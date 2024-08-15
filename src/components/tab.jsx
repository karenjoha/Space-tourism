import "../App.css";
import { Container, Heading, TabIndicator } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function TabsComponent() {
  return (
    <Container>
      <Tabs position="relative" variant="unstyled" >
        <TabList className="tablistoptions">
          <Tab color="white" _hover={{ border: "none" }} _focusWithin={{border: 'none'}}>
            MOON
          </Tab>
          <Tab color="white">MARS</Tab>
          <Tab color="white">EUROPA</Tab>
          <Tab color="white">TITAN</Tab>
        </TabList>
        <TabIndicator mt="15px" height="3px" bg="white" />
        <TabPanels>
          <TabPanel >
            <div className="tabs-principal">
              <div >
                <img src="/destination/image-moon.png" alt="" />
              </div>
              <div>
                <div>
                  <h2>MOON</h2>
                  <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
                <div className="tabs-principal">
                  <div>
                  <h4>AVG. DISTANCE</h4>
                  <p>384,400 km</p>
                  </div>
                  <div>
                  <h4>Est. travel time</h4>
                  <p>3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel >
            <div className="tabs-principal">
              <div >
                <img src="/destination/image-mars.png" alt="" />
              </div>
              <div>
                <div>
                  <h2>MARS</h2>
                  <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                </div>
                <div className="tabs-principal">
                  <div>
                  <h4>AVG. DISTANCE</h4>
                  <p>225 MIL. km</p>
                  </div>
                  <div>
                  <h4>Est. travel time</h4>
                  <p>9 MONTHOS</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel >
            <div className="tabs-principal">
              <div >
                <img src="/destination/image-europa.png" alt="" />
              </div>
              <div>
                <div>
                  <h2>EUROPA</h2>
                  <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                </div>
                <div className="tabs-principal">
                  <div>
                  <h4>AVG. DISTANCE</h4>
                  <p>628 MIL. km</p>
                  </div>
                  <div>
                  <h4>Est. travel time</h4>
                  <p>3 YEARS</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel >
            <div className="tabs-principal">
              <div >
                <img src="/destination/image-titan.png" alt="" />
              </div>
              <div>
                <div>
                  <h2>TITAN</h2>
                  <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                </div>
                <div className="tabs-principal">
                  <div>
                  <h4>AVG. DISTANCE</h4>
                  <p>1.6 BIL. km</p>
                  </div>
                  <div>
                  <h4>Est. travel time</h4>
                  <p>7 YEARS</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default TabsComponent;
