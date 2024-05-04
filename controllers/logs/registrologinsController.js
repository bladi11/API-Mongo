const RegistroLogs = require('../../models/logs/RegistroLogs');

exports.crearRegistroLogs = async (req, res) => {
    let json = req.body;
    const jsonString = JSON.stringify(json)
    const registros = new RegistroLogs({
        registro: jsonString,
        registro_json: json
    });

    registros.save(function (err, registros) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(registros);
    });
}