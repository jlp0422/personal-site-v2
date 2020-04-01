const React = require('react')
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: () => ({
    resume: require('./queries/resume.json'),
    logo: require('./queries/logo.json'),
    hottub2019: require('./queries/hottub2019.json'),
    stackjack: require('./queries/stackjack.json'),
    octocat: require('./queries/octocat.json'),
    computer: require('./queries/computer.json')
  })
}
