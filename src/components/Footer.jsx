import { blueGrey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return <footer>
        <Box sx={{
            p: 1,
            left: 0,
            bottom: 0,
            width: '100%',
            color: blueGrey[900],
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <br />
            <Typography variant="caption" sx={{
                justifyContent: "center",
                alignItems: "center",
                verticalAlign: "middle"
            }}>If you find this tool helpful, please consider to <a href="https://ko-fi.com/lukystudios/">
                    <img
                        style={{ verticalAlign: "middle", imageRendering:'smooth' }}
                        src={"./images/support_me_on_kofi_blue.png"}
                        alt={"Support me on KoFi"}
                        width="150"
                        height="30"
                    />
                </a> !
                <br /> Please report any bugs or leave feedback by <a href="https://github.com/lukystudios/aprijuicecalc/issues/new">opening an issue on GitHub</a>
                <br /> All images & data are copied from Cobblemon's <a href="https://wiki.cobblemon.com/index.php/Aprijuice">Aprijuice</a> & <a href="https://wiki.cobblemon.com/index.php/Seasoning">Seasoning</a> Wikis as of v1.7.1
            </Typography>
        </Box>
    </ footer>
}