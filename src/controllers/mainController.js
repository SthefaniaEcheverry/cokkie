const { validationResult } = require('express-validator');

module.exports = {
    //Trae todos los errores y los renderiza
    store: function (req, res) {
        let errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.errors })
        }
        req.session.nombre = req.body.nombre;
        req.session.colores = req.body.colores;
        req.session.email = req.body.email;
        req.session.edad = req.body.edad;

        res.redirect('/');
    }, 
    index: function (req, res){
        if(req.session.nombre){
            let data = req.session
            return res.render('register', {data:data})
        }
        res.render('register');
    }
    
}