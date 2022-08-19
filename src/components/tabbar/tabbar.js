import React from 'react';
import "./tabbar.css";


import {ReactComponent as TransferIcon} from "./icons/argo-logo-black-green.svg";
import {ReactComponent as VaultIcon} from "./icons/argo-logo-white-purple.svg";
import {ReactComponent as GreenIcon} from "./icons/argo-logo-green-white.svg";
import {ReactComponent as TabbarOpenCircle} from "./icons/tabbar-circle-open.svg";
import {StoreContext} from "../../utils/store";

const Tabbar = () => {
const {isTransferOpen, setIsTransferOpen, isVaultOpen, setIsVaultOpen} = React.useContext(StoreContext);

const transferOpen = () => {
    setIsTransferOpen(true);
}

const vaultOpen = () => {
    setIsVaultOpen(true);
}

const TransferTab = () => {
    return (
        <div className = "tabbar-icon-open">
            <TransferIcon className = "tabbar-icon-1" onClick = {transferOpen}></TransferIcon>
            <TabbarOpenCircle style = {{opacity:isTransferOpen ? '100' : '0'}}/>     
        </div>
    );
}

const VaultTab = () => {
    return (
        <div className = "tabbar-icon-open">
            <VaultIcon className = "tabbar-icon-2" onClick = {vaultOpen}></VaultIcon>
            <TabbarOpenCircle style = {{opacity:isVaultOpen ? '100' : '0'}}/>     
        </div>
    )
}

    return (
        <div className = "tabbar-container">
            <div className = "tabbar-icon-container">
                <TransferTab />
                <VaultTab />
            </div>
            
        </div>
    );

}

export default Tabbar;