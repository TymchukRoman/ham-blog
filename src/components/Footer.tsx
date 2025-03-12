import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box className="w-full p-1 flex justify-between items-center flex-wrap">
            <Typography variant="body2">
                🐹 Powered by hamsters running on tiny wheels. No real wheels were harmed.
            </Typography>
            <Typography variant="body2">© {new Date().getFullYear()} Hamster Chronicles. All seeds reserved. 🌰</Typography>
        </Box>
    );
}

export default Footer;