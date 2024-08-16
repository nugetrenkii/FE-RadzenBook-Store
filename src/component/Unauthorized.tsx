import React from 'react';
import { Box, Typography } from '@mui/material';

const UnauthorizedPage: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Typography variant="h4" color="error">
                Bạn không có quyền truy cập vào trang này.
            </Typography>
        </Box>
    );
};

export default UnauthorizedPage;
