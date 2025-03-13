import { Box, IconButton, Typography, useColorScheme } from '@mui/material'
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from "@mui/icons-material";
import icon from "../assets/favicon.png";

function Header() {
    const { mode, setMode } = useColorScheme();

    const toggleTheme = () => setMode(mode === 'dark' ? 'light' : 'dark');

    return <Box className="flex justify-between items-center p-4 position-fixed top-0">
        <Box className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src={icon} width={40} />
            <Typography variant="h6">Омар Хом'як</Typography>
        </Box>
        <IconButton onClick={toggleTheme} color="inherit" aria-label="toggle theme">
            {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
    </Box>;
}

export default Header
