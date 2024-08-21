import "../App.css";
import "../styles/scss/main.scss"
import { Box, Button, Container, Heading, TabIndicator, useMultiStyleConfig, useTab, useTabList } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from "react";

function TabsTechnology() {
  const CustomTab = React.forwardRef((props, ref)  => {
    const tabProps = useTabList({...props, ref})
  //   const isSelected = !!tabProps['aria-selected']
  //   const styles = useMultiStyleConfig ('Tabs', tabProps)
  //   // return (
  //   //   <Button __css={styles.tab} {...tabProps}>
  //   //     <Box as='span' mr='2'>
  //   //       {isSelected ? '⚪' : 'O'}
  //   //     </Box>
  //   //     {tabProps.children}
  //   //   </Button>
  //   // );
  } )
  return (
    <Container class="technology-view">
      <Tabs variant="unstyled">
        <TabList className="tablist">
          <Tab _selected={{ color: "white", bg: "blue.500", borderRadius:"50%"}}>1</Tab>
          <Tab _selected={{ color: "white", bg: "green.300", borderRadius:"50%"}}>2</Tab>
          <Tab _selected={{ color: "white", bg: "green.400", borderRadius:"50%"}}> 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="info-container">
              <div className="page-contain">
                <h5>THE TERMINOLOGY...</h5>
                <h3>LAUNCH VEHICLE</h3>
                <p>
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
              <div className="techImage">
                <img src="./public/technology/image-launch-vehicle-portrait.jpg" alt="" className="imageTab" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="info-container">
              <div className="page-contain">
                <h5>THE TERMINOLOGY...</h5>
                <h3>SPACEPORT</h3>
                <p>
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>
              <div className="techImage">
                <img src="./public/technology/image-space-capsule-portrait.jpg" alt="" className="imageTab"/>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="info-container">
              <div className="page-contain">
                <h5>THE TERMINOLOGY...</h5>
                <h3>SPACE CAPSULE</h3>
                <p>
                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </p>
              </div>
              <div className="techImage">
                <img src="./public/technology/image-spaceport-portrait.jpg" alt="" className="imageTab"/>
              </div>
            </div>
          </TabPanel>
        </TabPanels>

        <TabList className="tablist">
          <CustomTab></CustomTab>
          <CustomTab></CustomTab>
          <CustomTab></CustomTab>
          <CustomTab></CustomTab>
        </TabList>
      </Tabs>
    </Container>
  );
}

export default TabsTechnology;