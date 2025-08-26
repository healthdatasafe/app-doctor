import {
  Box,
  AppBar,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

export function Layout({ children }: LayoutProps) {
  const theme = useTheme();


  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` }, 
        }}
      >
        {/* Top App Bar */}
        <AppBar
          position="static"
          elevation={1}
          sx={{
            backgroundColor: "background.paper",
            color: "text.primary",
            borderBottom: `1px solid ${theme.palette.divider}`,
            flexShrink: 0,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.default",
            overflow: "auto", 
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
} 