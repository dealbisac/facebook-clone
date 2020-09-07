import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/51161348_798963650442598_7680534653584801792_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=WxIqPXT55pcAX_ncKt1&_nc_ht=scontent.fktm8-1.fna&oh=9a8d61fdb41683dff7f2fba2180ba1b9&oe=5F7CB9BC"
                title="Dipendra Laxmi" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="View More" />
        </div>
    )
}

export default Sidebar
