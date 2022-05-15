module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "item-icon": "#3CC0C3",
                label: "#0C5078",
                "back-page": "#F5F5F5",
                button: "#1978A3",
                "agreement-table-header": "#e6e4e4",
            },
            height: {},
            maxWidth: {
                "5/6": "83.333333%",
            },
            scale: {
                200: "2",
                300: "3",
                400: "4",
                500: "5",
                600: "6",
            },
            saturate: {
                110: "1.1",
            },
            transitionProperty: {
                y: "height",
                x: "width",
            },
            width: {
                "agreement-table": "calc(100% - 13rem)",
            },
        },
    },
    plugins: [],
};
