import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
const Sharebutton = ({ closemodal }) => {
  return (
    <div className="shareicons">
      <div>
        <Tooltip title="Facebook">
          <FacebookIcon
            className="zoomone"
            style={{ color: "rgb(3, 10, 144)" }}
          />
        </Tooltip>
        <Tooltip title="Instagram">
          <InstagramIcon
            className="zoomtwo"
            style={{ color: "rgb(157, 0, 91)" }}
          />
        </Tooltip>
        <Tooltip title="Twitter">
          <TwitterIcon
            className="zoomthree"
            style={{ color: " rgb(0, 145, 255)" }}
          />
        </Tooltip>
      </div>
      <div>
        <Tooltip title="WhatsApp">
          <WhatsAppIcon
            className="zoomfour"
            style={{ color: "rgb(16, 108, 40)" }}
          />
        </Tooltip>
        <Tooltip title="Pinterest">
          <PinterestIcon
            className="zoomfive"
            style={{ color: "rgb(227, 31, 31)" }}
          />
        </Tooltip>
        <Tooltip title="Telegram">
          <TelegramIcon
            className="zoomsix"
            style={{ color: "rgb(0, 29, 245)" }}
          />
        </Tooltip>
      </div>
      <div>
        <Stack>
          <Tooltip title="close">
          <Button
            className="btn close_close"
            variant="text"
            onClick={() => closemodal(false)}
          >
            <CloseIcon style={{width:"20px"}}/>
          </Button>
          </Tooltip>
   
        </Stack>
      </div>
    </div>
  );
};

export default Sharebutton;
