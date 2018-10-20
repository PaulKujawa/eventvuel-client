module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('scss')
            .oneOfs
            .store
            .forEach((item) => {
                item.use('sass-resources-loader')
                    .loader('sass-resources-loader')
                    .options({resources: './src/styles/_shared.scss'})
                    .end()
        })

        config.module
            .rule('gql')
            .test(/\.(gql|graphql)$/)
            .use('graphql-tag/loader')
              .loader('graphql-tag/loader')
              .end()
    }
}
