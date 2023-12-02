
const representante_legal = require('../components/representante_legal/interface')
const user = require('../components/user/interface')

const routes = function(server) {
    server.use('/representante_legal', representante_legal)
    server.use('/user', user)
}

module.exports = routes