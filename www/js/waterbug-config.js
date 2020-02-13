// widths and padding
var elementPadding = 40; // padding around the logo and credit text

// Crop options
var currentCrop = "cinema"; // default crop size
var cropOptions = {
    cinema: {
        display: "16:9",
        width: 1000,
        height: Math.round(1000 / (16 / 9))
    },
    twitter: {
        display: '2:1 <i class="fa fa-twitter"></i>',
        width: 1024,
        height: 1024 / 2
    },
    facebook: {
        display: '<i class="fa fa-facebook"></i>',
        width: 1200,
        height: 630
    },
    instagram: {
        display: '1:1 <i class="fa fa-instagram"></i>',
        width: 1080,
        height: 1080
    },
    original: {
        display: "Original",
        width: 1000
    }
};

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
    // 'lunchbox': {
    //     whitePath: '../img/icon-lunchbox-white.svg', // path to white logo
    //     blackPath: '../img/icon-lunchbox-black.svg', // path to black logo
    //     w: 100, // width of logo
    //     h: 80, // height of logo
    //     display: 'Lunchbox'
    // },
    "wbez-wide": {
        whitePath: "../img/icon-wbez-white-darkgrey-light-grey.png", // path to white logo
        blackPath: "../img/icon-wbez-black-darkgrey-light-grey.svg", // path to black logo
        w: 346, // width of logo
        h: 45, // height of logo
        display: "WBEZ wide"
    },
    "wbez-stacked": {
        whitePath: "../img/icon-wbez-stacked-white-darkgrey-light-grey.png", // path to white logo
        blackPath: "../img/icon-wbez-stacked-black-darkgrey-light-grey.png", // path to black logo
        w: 100, // width of logo
        h: 140, // height of logo
        display: "WBEZ stack"
    },
    "sound-opinions-wide": {
        whitePath: "../img/Sound_Opinions_horizontal_for_dark_backgrounds.png",
        blackPath: "../img/Sound_Opinions_horizontal_for_light_backgrounds.png",
        w: 200,
        h: 100,
        display: "Sound Opinions Wide"
    },
    "sound-opinions-stack": {
        whitePath: "../img/Sound_Opinions_stacked_for_dark_backgrounds.png",
        blackPath: "../img/Sound_Opinions_stacked_for_light_backgrounds.png",
        w: 150,
        h: 138,
        display: "Sound Opinions Stacked"
    },

    nerdette: {
        whitePath: "../img/nerdette-stacked-white.png",
        blackPath: "../img/nerdette-stacked.png",
        w: 150,
        h: 150,
        display: "Nerdette"
    },
    "south side stories": {
        whitePath: "../img/logo-ss-stories.png",
        blackPath: "../img/logo-ss-stories.png",
        w: 125,
        h: 95,
        display: "South Side Stories"
    },
    motive: {
        whitePath: "../img/motive-white.png",
        blackPath: "../img/motive-dark.png",
        w: 130,
        h: 64,
        display: "Motive"
    }
};

// logo opacity for colors
var whiteLogoAlpha = "0.8";
var blackLogoAlpha = "0.6";

// type
var fontWeight = "normal"; // font weight for credit
var fontSize = "15pt"; // font size for credit
var fontFace = "Helvetica"; // font family for credit
var fontShadow = "rgba(0,0,0,0.7)"; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = "WBEZ";
var freelanceString = "for " + orgName;

var copyrightOptions = {
    WBEZ: {
        showPhotographer: true, // show the photographer input box
        showSource: false, // show the source input box
        photographerRequired: false, // require a photographer
        sourceRequired: false, // require a source
        source: orgName, // How the source should appear on the image, e.g. 'NPR'
        display: orgName // How the option will appear in the dropdown menu
    },
    freelance: {
        showPhotographer: true,
        showSource: false,
        photographerRequired: true,
        sourceRequired: false,
        source: freelanceString,
        display: "Freelance",
        delimiter: " "
    },
    ap: {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: "AP",
        display: "AP"
    },
    getty: {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: "Getty Images",
        display: "Getty"
    },
    thirdParty: {
        showPhotographer: true,
        showSource: true,
        photographerRequired: false,
        sourceRequired: true,
        source: "",
        display: "Third Party/Courtesy"
    }
};

// app load defaults
var currentLogo = "wbez-wide"; // default logo slug
var currentLogoColor = "white"; // default logo color
var currentTextColor = "white"; // default text color
var defaultImage = "../img/test-kitten.jpg"; // path to image to load as test image
var defaultLogo = logos[currentLogo]["whitePath"]; // path to default logo
