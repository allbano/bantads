require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
var http =  require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const helmet = require('helmet');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// proxies
const clienteServiceProxy = httpProxy('http://localhost:5000');
const gerenteServiceProxy = httpProxy('http://localhost:5001');

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token)
        return res.status(401).json({auth: false, message: 'Token não fornecido'});

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err)
            return res.status(500).json({auth: false, message: 'Falha ao autenticar o token'});
        req.userId = decoded.id;
        next();
    })
}

app.post('/login', urlencodedParser, (req, res, next) => {
    if (req.body.user === 'admin' && req.body.password === 'admin') {
        const id = 1;
        const token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        });
        return res.json({auth: true, token: token});
    }
    res.status(500).json({message: 'Login inválido!'});
})

app.post('/logout', function(req, res) {
    res.json({auth: false, token: null});
})

app.get('/clientes', verifyJWT, (req, res, next) => {
    clienteServiceProxy(req, res, next);
})

app.get('/gerentes', verifyJWT, (req, res, next) => {
    gerenteServiceProxy(req, res, next);
})

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);