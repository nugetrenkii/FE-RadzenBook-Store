// src/components/NotificationBell.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Popover,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { ROUTERS } from "../../utils/router";
import { AiOutlineShoppingCart, AiOutlineBell } from "react-icons/ai";
import './styles.scss';

interface Notification {
  id: number;
  message: string;
}

interface NotificationBellProps {
  totalQuantity: number;
  notifications: number;
  notificationList: Notification[];
}

const NotificationBell: React.FC<NotificationBellProps> = ({
  totalQuantity,
  notifications,
  notificationList,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ul>
      <li>
        <Link to={ROUTERS.USER.SHOPPING_CART}>
          <AiOutlineShoppingCart size={25} />{" "}
          <span className="content">{totalQuantity}</span>
        </Link>
      </li>
      <li>
        <IconButton onClick={handleClick}>
          <AiOutlineBell size={25} />
          <span className="content">{notifications}</span>
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box p={2} maxWidth={300}>
            <Typography variant="h6">Notifications</Typography>
            <List>
              {notificationList.map((notification) => (
                <ListItem key={notification.id}>
                  <ListItemText primary={notification.message} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Popover>
      </li>
    </ul>
  );
};

export default NotificationBell;