const svgr = require("@svgr/core").default;
const fs = require("fs");
const glob = require("glob");

const config = {
    inputFolderUrl: "public/images/icons",
    outputFolderUrl: "src/resources/icons",
};

(async (settings) => {
    glob(`${settings.inputFolderUrl}/**/*.svg`, {}, (err, files) => {
        const exportedIcons = [];
        const actions = files.map((inputFileUrl) => {
            return fs.promises.readFile(inputFileUrl, "utf8").then((svgCode) => {
                const componentName = inputFileUrl.substr(
                    inputFileUrl.lastIndexOf("/") + 1,
                    inputFileUrl.lastIndexOf(".") - inputFileUrl.lastIndexOf("/") - 1
                );
                const sizeString = componentName.substring(componentName.length - 4);
                return svgr(
                    svgCode,
                    {
                        icon: true,
                        typescript: true,
                        replaceAttrValues: {
                            "1em": sizeString,
                            "#000": "currentColor"
                        },
                        prettier: true,
                        dimensions: true,
                    },
                    { componentName }
                ).then((tsCode) => {
                    const outputFileUrl = inputFileUrl.replace(settings.inputFolderUrl, settings.outputFolderUrl).replace(".svg", ".tsx");
                    const outputFolderName = outputFileUrl.substring(0, outputFileUrl.lastIndexOf("/"));
                    const relativeFileUrl = outputFileUrl.replace(settings.outputFolderUrl, "").replace(".tsx", "");
                    exportedIcons.push(`export {default as ${componentName}} from '.${relativeFileUrl}'`);
                    fs.mkdir(outputFolderName, { recursive: true }, () => {
                        return fs.promises.writeFile(outputFileUrl, tsCode);
                    });
                });
            });
        });

        Promise.all(actions).then(() => {
            fs.writeFileSync(`${settings.outputFolderUrl}/index.ts`, exportedIcons.join("\n"));
        });
    });
})(config).then();
