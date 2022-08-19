import React from 'react';
import "./vault.css";
import Draggable from "react-draggable";
import {ReactComponent as RedCircle} from "./red-circle.svg";
import {StoreContext} from "../../utils/store"

const Vault = () => {
    const {isVaultOpen, setIsVaultOpen} = React.useContext(StoreContext);

    const closeModal = () => {
        setIsVaultOpen(false);
    }

    if (isVaultOpen === true ){
    return (
        <Draggable bounds = "body">
            <div className = "vault-container">
                <div className = "vault-header">
                    <RedCircle className = "exit-button" onClick = {closeModal}/>
                    <h4>Vault</h4>
                    <div></div>
                </div>
                <div className = "vault-content">
                    <p>vaults</p>
                </div>
            </div>
        </Draggable>
    )
    }
}

export default Vault;