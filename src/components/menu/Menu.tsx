import React from "react";
import "./menu.scss";
import { menu } from "../../data";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GridViewIcon from "@mui/icons-material/GridView";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import BackupIcon from "@mui/icons-material/Backup";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Link } from "react-router-dom";

const Menu = () => {
  function getAvataricon(icon: string): JSX.Element | undefined {
    switch (icon) {
      case "HomeIcon":
        return <HomeIcon />;

      case "PersonIcon":
        return <PersonIcon />;

      case "GroupIcon":
        return <GroupIcon />;

      case "ProductionQuantityLimitsIcon":
        return <ProductionQuantityLimitsIcon />;

      case "LocalShippingIcon":
        return <LocalShippingIcon />;

      case "GridViewIcon":
        return <GridViewIcon />;

      case "DocumentScannerIcon":
        return <DocumentScannerIcon />;

      case "FormatListNumberedRtlIcon":
        return <FormatListNumberedRtlIcon />;

      case "CalendarMonthIcon":
        return <CalendarMonthIcon />;

      case "SettingsIcon":
        return <SettingsIcon />;

      case "BackupIcon":
        return <BackupIcon />;

      case "ShowChartIcon":
        return <ShowChartIcon />;

      case "VpnKeyIcon":
        return <VpnKeyIcon />;

      default:
        <></>;
    }
  }

  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className='item' key={item.id}>
          <span className='title'> {item.title}</span>
          {item.listItems.map((listItem) => (
            <Link className='listItem' to={listItem.url} key={listItem.id}>
              {getAvataricon(listItem.icon)}
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
      {/* <div className='item'>
        <span className='title'> MENU</span>
        <Link className='listItem' to=''>
          <HomeIcon className='icon' />
          <span className='listItemTitle'>Home</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Menu;
