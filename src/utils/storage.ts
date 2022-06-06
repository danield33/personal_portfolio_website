export const setLocalStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key: string) => {
    const val = window.localStorage.getItem(key);
    if (val) return JSON.parse(val);
    return null;
}
