const { response, request } = require('express')

const getUsuario = (req = request, res = response) => {
    const query = req.query;

    res.json({
        msg: 'get API - controllerdsadsads',
        query
    });
}
const postUsuario = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API - controller',
        body
    });
}
const putUsuario = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id
    });
}
const deleteUsuario = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}