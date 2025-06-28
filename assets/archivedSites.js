const archivedSiteList = [
    {
        id: 'fortuneidn',
        description: 'fortuneidn.com',
        hostname: /(^|\.)fortuneidn\.com$/,
        path: /\/[a-z-]+\/.+(?<!\/\w+)$/,
        method: 'param',
        dynamic: false,
        fullpage: 'page=all'
    },
    {
        id: 'idntimes',
        description: 'idntimes.com, popbela.com, popmama.com',
        hostname: /(^|\.)(idntimes|popbela|popmama)\.com$/,
        path: /\/[a-z-]+\/[a-z-]+\/.+(?<!\/\w+)$/,
        method: 'param',
        dynamic: false,
        fullpage: 'page=all'
    },
]