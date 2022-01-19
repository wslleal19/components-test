import React, { useEffect } from "react";

function FluenceProvider(props:any) {

    useEffect(() => {
        if(props.theme.darkMode) setDarkTheme();
        else setLightTheme();
    }, []);
    
    const setDarkTheme = () => {
        document.body.setAttribute('data-theme', 'dark');
    }

    const setLightTheme = () => {
        document.body.setAttribute('data-theme', 'light');
    }

    return (props.children);
}
export default FluenceProvider;