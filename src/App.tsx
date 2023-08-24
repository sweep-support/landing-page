import {
  ChakraProvider,
  Box,
  extendTheme,
  useColorMode,
  ThemeConfig,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import CallToAction from "./components/CallToAction";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import Users from "./components/Users";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import circles from "./assets/circles.svg";
import og_image from "./assets/og_image.png";
import Features from "./components/Features";
import Conclusion from "./components/Conclusion";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function ForceDarkMode(props: { children: JSX.Element }) {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") return;
    toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return props.children;
}


// @ts-ignore
window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "ce8fl00z",
  action_color: "#6b46c1",
  background_color: "#342867",
};

export class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ce8fl00z';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`;
    document.body.appendChild(script);
  }

  render() {
      return (
        <>
          
          <ChakraProvider theme={theme}>
            <ForceDarkMode>
            <Box
              textAlign="center"
              fontSize="xl"
              bgColor="#0d0a1a"
              bgImage={circles}
              bgPos="0 0"
              bgSize="100%"
              minH="100vh"
              bgRepeat="no-repeat"
              overflowX="hidden"
            >
              {false && <ColorModeSwitcher />}
              <Banner />
              <Router>
                <Navbar />
                <Switch>
                  <Route exact path="/">
                    <CallToAction />
                    <Users />
                    <Features />
                    <Testimonials />
                    <Conclusion />
                  </Route>
                  <Route path="/about-us">
                    <AboutUs />
                  </Route>
                </Switch>
              </Router>
            </Box>
          </ForceDarkMode>
        </ChakraProvider>
      </>
    );
  }
}