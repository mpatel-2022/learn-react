import { useState } from "react"; 
import { ProSidebar, Menu, Menuitem, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlinedIcon";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlinedIcon";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlinedIcon";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlinedIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlinedIcon";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlinedIcon";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlinedIcon";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlinedIcon";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlinedIcon";
import MapOutlinedIcon from "@mui/icons-material/MapOutlinedIcon";

const item = ({ titl, to, icon, selected, setSelected }) => {
    const theme = useTheme(); 
    const colors = tokens(them.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
            >
                <Typography>{title}</Typography>
                <Link to={to} />
            </MenuItem>
    );
};
 
const Sidebar = () => {
    const theme = useThem();
    const colors = tokens(theme.paletter.mode); 
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} ! important`,
                }, 
                "& .pro-icon-wrapper": {
                    backgroundColor: "transaparent !important",
                }, 
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                }, 
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                }, 
                "& .pro-menu-item.active": {
                    color: "#6870 !important",
                },
            }}
            
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* Logo and Menu Icon */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOulinedIcon /> : undefined }
                        style={{
                            margin: "10pz 0 20px 0", 
                            color: colors.grey[100], 
                        }}
                    >
                        {!isCollapsed && (

                            <Box 
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center" 
                                ml="15px"

                            >
                                <Typography variabt="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>

                            </Box>



                        )}


                        { /* User */ }

                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img    
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={`../../assets/user.png`}
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                </Box>

                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0" }}
                                    >
                                        Megha Patel 
                                    </Typography>
                                    <Typography variant ="h5" color={colors.greenAccent[500]}>
                                        SoftwareEngineer
                                    </Typography>

                                </Box>
                            </Box>

                        )}
                    </MenuItem>
                    {/* Menu Items */ }
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}></Box>
                </Menu>
            </ProSidebar>

        </Box>
    );
};

export default Sidebar;