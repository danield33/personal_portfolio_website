export interface Theme{
    id: number,
    name: string,
    colors: {
        body: string,
        text: string,
        primary: string,
        secondary: string,
        link:{
            text: string,
            opacity: number,
        }
    }
}
