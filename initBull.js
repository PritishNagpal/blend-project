const _ = require('lodash')

const gitlabFetcher = require('./gitlab/fetcher')

// const { providerConfig } = require('./credentialsManager')

// const fetchers = _(providerConfig)
//   .mapValues((_, key) => require('./' + _.lowerCase(key) + '/fetcher'))
//   .value()

const fetchers = {
  GITLAB: gitlabFetcher.fetcher,
}
