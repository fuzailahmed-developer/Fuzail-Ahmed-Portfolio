import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

function Footer() {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="w-full rounded-lg border shadow-md bg-white dark:bg-black dark:border-black">
      <div className="flex flex-col items-center ">
        <div className="flex">
          <Button
            className="dark:text-white"
            variant="text"
            aria-label="LinkedIn"
            onClick={() =>
              handleButtonClick("https://www.linkedin.com/in/fuzail-ahmed-5bb991355/")
            }
          >
            <Icon
              icon="mdi:linkedin"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
          <Button
            className="dark:text-white"
            variant="text"
            aria-label="GitHub"
            onClick={() =>
              handleButtonClick("https://github.com/fuzailahmed-developer")
            }
          >
            <Icon
              icon="mdi:github"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
          <Button
            className="dark:text-white"
            variant="text"
            aria-label="WhatsApp"
            onClick={() =>
              handleButtonClick(
                "https://wa.me/923162552534?text=Hi%20Fuzail!%20I%20visited%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20discuss%20a%20potential%20collaboration%20opportunity%20with%20you."
              )
            }
          >
            <Icon
              icon="mdi:whatsapp"
              height={36}
              width={36}
              style={{ marginRight: "2px" }}
            />
          </Button>
        </div>

        <Typography
          color="blue-gray"
          size="lg"
          className="text-center mt-2 font-normal font-poppins dark:text-white"
        >
          © 2025 Fuzail Ahmed. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
