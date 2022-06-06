import {getLocalStorage, setLocalStorage} from "../utils/storage";
import {useEffect, useState} from "react";
import {Theme} from "../theme/types";

export function useTheme(){
    const themes: {[index: string]: Theme} = getLocalStorage('themes');
    const [theme, setTheme] = useState(themes.light);
    const [hasLoaded, setLoaded] = useState(false);

    const setThemeMode = (mode: string) => {
        setLocalStorage('usedTheme', mode);
        setTheme(themes[mode]);
    }

    useEffect(() => {
        const localTheme = getLocalStorage('usedTheme') ?? 'light';
        setTheme(themes[localTheme]);
        setLoaded(true);
    })

    return {theme, hasLoaded, setThemeMode};

}
