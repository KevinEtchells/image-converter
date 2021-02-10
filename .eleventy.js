module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("img");
};

/*
const Image = require("@11ty/eleventy-img");

(async () => {
    const url = "https://www.tearfund.org/-/media/tearfund/images/stories/storieshubpage-womanwithbasket-hubpagebanner-credittompricetearfund.jpg";
    await Image(url, {
        formats: ["avif", "webp", "jpeg"],
        sharpOptions: {
            raw : {
                width: 375,
                height: 375,
                channels: 4
            }
        }
    });
})();
*/