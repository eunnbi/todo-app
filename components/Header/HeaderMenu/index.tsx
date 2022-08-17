import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MENUS } from "./menus";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const HeaderMenu = ({ handleOpen }: { handleOpen: () => void }) => {
  const { color, name } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ThreeDotIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: color.boxColor,
            color: name === "dark" ? color.textColor : "inherit",
          },
        }}
      >
        {MENUS.map((menu) => {
          const onClick = () => {
            if (menu.onClick === null) {
              handleOpen();
            } else {
              menu.onClick();
            }
            handleClose();
          };
          return (
            <MenuItem key={menu.menu} onClick={onClick}>
              <ListItemIcon
                sx={{ color: name === "dark" ? color.textColor : "inherit" }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText>{menu.menu}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default HeaderMenu;

const ThreeDotIcon = styled(BsThreeDotsVertical)`
  color: ${({ theme }) => theme.name === "dark" && "white"};
`;
