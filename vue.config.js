// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.resolve
            .symlinks(true)
        return config
    }
}