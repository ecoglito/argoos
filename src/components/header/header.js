import {React} from 'react';
import "./header.css";
import {ReactComponent as ArgoLogoHorizontalWhite} from "./argo-logo-white-horizontal.svg";

const Header = () => {
    return (
        <div className = "header-bar">
            <ArgoLogoHorizontalWhite/>
        </div>
    );
}

export default Header;