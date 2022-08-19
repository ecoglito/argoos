import React from 'react';
import "./transfer.css";
import Draggable from "react-draggable";
import {ReactComponent as RedCircle} from "./red-circle.svg";
import {StoreContext} from "../../utils/store";
import { Resizable } from 'react-resizable'; 

const Transfer = () => {
    const {isTransferOpen, setIsTransferOpen} = React.useContext(StoreContext);

    const closeModal = () => {
        setIsTransferOpen(false);
    }

    if (isTransferOpen === true ){
    return (
        
            <Draggable bounds = "body">
                <div className = "transfer-container">
                    <div className = "transfer-header">
                        <RedCircle className = "exit-button" onClick = {closeModal}/>
                        <h4>Transfer</h4>
                        <div></div>
                    </div>
                    <div className = "transfer-content">
                        <p>transfer</p>
                    </div>
                </div>
            </Draggable>
       
    )
    }
    else {
        return (
           <div></div>
        );
    }
}

export default Transfer;