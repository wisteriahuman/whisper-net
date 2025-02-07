import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "secondary.dark",
                color: "#ffccff",
                padding: 4,
                marginTop: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="body1">
                    © {new Date().getFullYear()} WisteriaHub. All rights reserved.
                </Typography>
                <Box>
                    <IconButton
                        component={Link}
                        href="https://github.com/wisteriahuman"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#ffccff" }}
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://twitter.com/wisteria_man"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#ffccff" }}
                        aria-label="Twitter"
                    >
                        <TwitterIcon />
                    </IconButton>
                    {/* <IconButton
                        component={Link}
                        href="https://www.linkedin.com/in/%E5%84%AA%E6%B0%97-%E8%97%A4%E4%BA%95-b104b0344/"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: "#ffccff" }}
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </IconButton> */}
                </Box>
            </Box>
            <Box mt={2}>
                <Typography variant="body2">
                    デプロイ: <Link href="https://vercel.com/" color="inherit" target="_blank" rel="noopener">Vercel</Link> | コード管理: <Link href="https://github.com/" color="inherit" target="_blank" rel="noopener">GitHub</Link>
                </Typography>
            </Box>
        </Box>
    );
}