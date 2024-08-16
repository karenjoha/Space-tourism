import "../App.css";
import { Box, Button, Container, Heading, TabIndicator, useMultiStyleConfig, useTab } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
function TabsCrew() {
  const CustomTab = React.forwardRef((props, ref)  => {
    const tabProps = useTab({...props, ref})
    const isSelected = !!tabProps['aria-selected']
    const styles = useMultiStyleConfig ('Tabs', tabProps)
    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' mr='2'>
          {isSelected ? '⚪' : 'O'}
        </Box>
        {tabProps.children}
      </Button>
    );
  } )
  return(
    <Container textAlign="-webkit-center">
      <Tabs maxWidth="90%">
        <TabPanels>
          <TabPanel>
            <div className="tabs-principal">
              <div>
                <p className="proffesion">COMMANDER</p>
                <h3>DOUGLAS HURLEY</h3>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
              </div>
              <div>
                <img className="img_people" src="/crew/image-douglas-hurley.png" alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-principal">
              <div>
                <p className="proffesion">MISSION SPECIALIST</p>
                <h3>MARK SHUTTLEWORTH</h3>
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
              </div>
              <div>
                <img className="img_people" src="/crew/image-mark-shuttleworth.png" alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-principal">
              <div>
                <p className="proffesion">PILOT</p>
                <h3>VICTOR GLOVER</h3>
                <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
              </div>
              <div>
                <img className="img_people" src="/crew/image-victor-glover.png" alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabs-principal">
              <div>
                <p className="proffesion">FLIGHT ENGINNER</p>
                <h3>ANOUSHEH ANSARI</h3>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
              </div>
              <div>
                <img className="img_people" src="/crew/image-anousheh-ansari.png" alt="" />
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
    
  )
}

export default TabsCrew;
