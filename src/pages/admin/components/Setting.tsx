import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const SettingsMenu: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        onLogout();
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <SettingsOutlinedIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ mt: '30px' }}
            >
                <MenuItem onClick={handleLogout}>
                    <LogoutOutlinedIcon sx={{ mr: 1 }} /> Đăng xuất
                </MenuItem>
            </Menu>
        </>
    );
};

export default SettingsMenu;
