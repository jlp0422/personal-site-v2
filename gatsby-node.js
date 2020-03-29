exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: `/`,
    toPath: `/about`,
    redirectInBrowser: true,
    isPermanent: true
  })
}
