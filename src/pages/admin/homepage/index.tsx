import React, { useState, memo, ReactNode } from "react";
import SideBar from "../scenes/global/SideBar";
import Topbar from "../scenes/global/Topbar";
import { ColorModeContext, useMode } from "../scenes/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface HomePageAdminProps {
  screen: ReactNode;
  [key: string]: any; // to accept additional props
}

const HomePageAdmin: React.FC<HomePageAdminProps> = ({ screen, ...props }) => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div {...props}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <SideBar isSidebar={isSidebar} />
            <main
              style={{
                height: "100%",
                width: "100%",
                fontFamily: "Be Vietnam Pro",
              }}
            >
              <Topbar setIsSidebar={setIsSidebar} />
              {screen}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default memo(HomePageAdmin);
