export const global = {
    colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlueBg: "hsl(207, 26%, 17%)",
        veryDarkBlueText: "hsl(200, 15%, 8%)",
        veryDarkGrey: "hsl(0, 0%, 52%)",
        veryLightGrey: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
        shadowWhite: "rgba(255, 255, 255, .4)",
        shadowGrey: "rgba(90, 90, 90, .2)"
    }
}

export const lightTheme = {
    body: global.colors.veryLightGrey,
    text: global.colors.veryDarkBlueText,
    background: global.colors.veryLightGrey,
    header: global.colors.white,
    input: global.colors.veryDarkGrey,
    shadow: global.colors.shadowGrey
}

export const darkTheme = {
    body: global.colors.veryDarkBlueBg,
    text: global.colors.white,
    background: global.colors.veryDarkBlueBg,
    header: global.colors.darkBlue,
    input: global.colors.veryLightGrey,
    shadow: global.colors.shadowWhite
}