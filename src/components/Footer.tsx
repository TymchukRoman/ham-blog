import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box className="w-full p-1 flex justify-center items-center flex-wrap">
            <Typography variant="body2">© {new Date().getFullYear()} 🐹 ХОМНІ ХОНІЧНИКИ. Все насіння зарезервовано. 🌰</Typography>
        </Box>
    );
}

export default Footer;