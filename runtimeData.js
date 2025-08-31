// example of a runtime data file from a game host

const runtimeData = (function () {

    return {

        companyName: "",
        productName: "",
        productVersion: "",
        sdkVersion: "",
        productDescription: "",

        buildURL: "",
        loaderURL: "",
        dataURL: "",
        frameworkURL: "",
        workerURL: "",
        codeURL: "",
        symbolsURL: "",
        streamingURL: "",

        logoType: "",
        iconTextureName: "",
        backgroundTextureName: "",

        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        debugMode: false,
        rotationLockType : "",

        prefsContainerTags: [ "" ],
.
        wrapperScript: "",

        yandexGamesSDK: "/sdk.js",

        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        gameDistributionId: "",
        gameDistributionPrefix: "",

        crazyGamesXSollaProjectId: "",

        googleAdsClient: "",
        googleAdsChannel: "",
        googleAdsTest: true,

        gamepushProjectId: "",
        gamepushToken: "",

    }

})();
