module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./assets/images/');
    eleventyConfig.addPassthroughCopy('./assets/fonts/');
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};