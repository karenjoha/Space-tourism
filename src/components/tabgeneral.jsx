import "../App.css";
import { Container, Heading, TabIndicator } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function TabsDestinationGeneral() {
  return (
    <Container>
      <Tabs position="relative" variant="unstyled" >
        <TabList>
          <Tab color="white" _hover={{ border: "none" }} _focusWithin={{border: 'none'}}>
            MOON
          </Tab>
          <Tab color="white">HOME</Tab>
          <Tab color="white">DESTINATION</Tab>
          <Tab color="white">TITAN</Tab>
        </TabList>
        <TabIndicator mt="15px" height="3px" bg="white" />
        <TabPanels>
          <TabPanel>
            <div>
              <img src="../../public/destination/image-moon.png" alt="" />
            </div>
            <div>
              <h2>MOON</h2>
              <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
            <div>
              <div>
              <h4>AVG. DISTANCE</h4>
              <p>384,400 km</p>
              </div>
              <div>
              <h4>Est. travel time</h4>
              <p>3 days</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
            <img src="../../public/destination/image-mars.png" alt="" />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
            <img src="../../public/destination/image-europa.png" alt="" />
          </TabPanel>
          <TabPanel>
            <p>three!</p>
            <img src="../../public/destination/image-titan.png" alt="" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default TabsDestinationGeneral;
