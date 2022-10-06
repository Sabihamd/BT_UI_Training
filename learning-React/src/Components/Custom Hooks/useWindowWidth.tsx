import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [smallScreen, setSmallScreen] = useState<boolean>(false);

    useEffect(()=>{
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
    }, [])

    const checkScreenSize = () => {
        setSmallScreen(window.innerWidth<800);
    }
    return smallScreen;
}

export default useWindowWidth;