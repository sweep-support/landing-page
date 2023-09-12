import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import React from 'react';
import logo from "../assets/icon.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDisplay: window.innerWidth >= 1024 ? "flex" : "none",
      menuDisplay: window.innerWidth < 1024 ? "flex" : "none",
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      listDisplay: window.innerWidth >= 1024 ? "flex" : "none",
      menuDisplay: window.innerWidth < 1024 ? "flex" : "none",
    });
  };

  render() {
    const navItems = [
      {
        label: "Twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com/sweep__ai",
      },
      {
        label: "Github",
        icon: <FaGithub />,
        link: "https://github.com/sweepai/sweep",
      },
      {
        label: "Discord",
        icon: <FaDiscord />,
        link: "https://discord.gg/sweep",
      },
      {
        label: "Email",
        icon: <EmailIcon />,
        link: "mailto:team@sweep.dev",
      },
    ];

<ButtonGroup variant="link" display={this.state.listDisplay}>
  {navItems.map((item) => (
    <IconButton
      key={item.label}
      icon={item.icon}
      variant="ghost"
      aria-label={item.label}
      onClick={() => {
        window.open(item.link, "_blank");
      }}
      px={2}
    />
  ))}
  <Link to="/pricing">
    <Button variant="ghost">
      Pricing
    </Button>
  </Link>
</ButtonGroup>
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    display={this.state.menuDisplay}
  />
  <MenuList
    backgroundColor="#333"
  >
    {navItems.map((item) => (
      <MenuItem backgroundColor="#333">
        {item.label}
        {
          item.label !== "Buy Sweep Pro" &&
          <IconButton
            key={item.label}
            icon={item.icon}
            variant="ghost"
            aria-label={item.label}
            onClick={() => {
              window.open(item.link, "_blank");
            }}
          />
        }
      </MenuItem>
    ))}
  </MenuList>
</Menu>
