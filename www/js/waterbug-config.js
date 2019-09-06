// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

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
    'wbez-wide': {
        whitePath: '../img/icon-wbez-white-darkgrey-light-grey.svg', // path to white logo
        blackPath: '../img/icon-wbez-black-darkgrey-light-grey.svg', // path to black logo
        w: 200, // width of logo
        h: 45, // height of logo
        display: 'WBEZ wide'
    },
    'wbez-stacked': {
        whitePath: '../img/icon-wbez-stacked-white-darkgrey-light-grey.svg', // path to white logo
        blackPath: '../img/icon-wbez-stacked-black-darkgrey-light-grey.svg', // path to black logo
        w: 100, // width of logo
        h: 137, // height of logo
        display: 'WBEZ stack'
    },
    'sound-opinions-wide': {
        whitePath: '../img/Sound Opinions_horizontal_for_dark_backgrounds.svg',
        blackPath: '../img/Sound Opinions_horizontal_for_light_backgrounds.svg',
        w: 200,
        h: 100,
        display: 'Sound Opinions Wide'
    },
    'sound-opinions-stack': {
        whitePath: '../img/Sound Opinions_stacked_for_dark_backgrounds.svg',
        blackPath: '../img/Sound Opinions_stacked_for_light_backgrounds.svg',
        w: 150,
        h: 150,
        display: 'Sound Opinions Stacked'
    },
    
    'nerdette': {
        whitePath: '../img/nerdette-stacked-white.svg',
        blackPath: '../img/nerdette-stacked.svg',
        w: 150,
        h: 150,
        display: 'Nerdette'
    },
    'south side stories': {
        whitePath: '../img/logo-ss-stories.png',
        blackPath: '../img/logo-ss-stories.png',
        w: 125,
        h: 95,
        display: 'South Side Stories'
    }
};

// logo opacity for colors
var whiteLogoAlpha = '0.8';
var blackLogoAlpha = '0.6';

// type
var fontWeight = 'normal'; // font weight for credit
var fontSize = '15pt'; // font size for credit
var fontFace = "Helvetica"; // font family for credit
var fontShadow = 'rgba(0,0,0,0.7)'; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = 'WBEZ';
var freelanceString = 'for ' + orgName;

var copyrightOptions = {
    'WBEZ': {
        showPhotographer: true, // show the photographer input box
        showSource: false, // show the source input box
        photographerRequired: false, // require a photographer
        sourceRequired: false, // require a source
        source: orgName, // How the source should appear on the image, e.g. 'NPR'
        display: orgName, // How the option will appear in the dropdown menu   
    },
    'freelance': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: true,
        sourceRequired: false,
        source: freelanceString,
        display: 'Freelance' 
    },
    'ap': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'AP',
        display: 'AP' 
    },
    'getty': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: 'Getty Images',
        display: 'Getty' 
    },
    'thirdParty': {
        showPhotographer: true,
        showSource: true,
        photographerRequired: false,
        sourceRequired: true,
        source: '',
        display: 'Third Party/Courtesy' 
    }
}

// app load defaults
var currentCrop = 'twitter'; // default crop size
var currentLogo = 'wbez-wide'; // default logo slug
var currentLogoColor = 'white'; // default logo color
var currentTextColor = 'white'; // default text color
var defaultImage = '../img/test-kitten.jpg'; // path to image to load as test image
var defaultLogo = logos[currentLogo]['whitePath'] // path to default logo