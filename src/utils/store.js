import React from 'react'

export const StoreContext = React.createContext(null);

export const GlobalStateProvider = ({children}) => {
    const [isTransferOpen, setIsTransferOpen] = React.useState(false);
    const [isVaultOpen, setIsVaultOpen] = React.useState(false);
    return <StoreContext.Provider value ={{isTransferOpen, setIsTransferOpen, isVaultOpen, setIsVaultOpen}}>{children}</StoreContext.Provider>
};

export default GlobalStateProvider;