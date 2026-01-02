import { blueGrey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return <Box
        sx={{
            p:1,
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            color: blueGrey[900],
            bgcolor: blueGrey[200],
            textAlign: "center"
        }}
    >
        <Typography>If you find this tool helpful, please consider supporting me at <a href="https://ko-fi.com/lukystudios/">Ko-Fi</a>!</Typography>
        <Typography>All images & data are copied from Cobblemon's <a href="https://wiki.cobblemon.com/index.php/Aprijuice">Aprijuice</a> & <a href="https://wiki.cobblemon.com/index.php/Seasoning">Seasoning</a> Wikis</Typography>
    </ Box>
}