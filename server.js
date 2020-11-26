var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8000/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/images/bowie.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/bowie.jpg'));
});

app.get('/images/cannabis-strain.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/cannabis-strain.jpg'));
});

app.get('/images/citrus-emoji.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/citrus-emoji.png'));
});

app.get('/images/dizzy-enoji.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/dizzy-enoji.png'));
});

app.get('/images/energy-emoji.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/energy-emoji.png'));
});

app.get('/images/focus-emoji.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/focus-emoji.png'));
});

app.get('/images/fruity-emoji,png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/fruity-emoji,png'));
});

app.get('/images/gpsbudlogo.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/gpsbudlogo.png'));
});

app.get('/images/happy-emoji.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/happy-emoji.png'));
});

app.get('/images/home-arrow-down-top.png', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/home-arrow-down-top.png'));
});

app.get('/images/home-arrow-down.svg', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/home-arrow-down.svg'));
});

app.get('/images/rainbow.jpg', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/images/rainbow.jpg'));
});

app.get('/js/age-modal.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/js/age-modal.js'));
});

app.get('/age-modal.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/age-modal.js'));
});

app.get('/caregivers.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/caregivers.html'));
});

app.get('/caregiverswallet.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/caregiverswallet.html'));
});

app.get('/fullfilledchat.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/fullfilledchat.html'));
});

app.get('/home.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/home.html'));
});

app.get('/lemonhaze.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/lemonhaze.html'));
});

app.get('/library.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/library.html'));
});

app.get('/orderdetails.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/orderdetails.html'));
});

app.get('/profile.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/patients.html'));
});

app.get('/patients.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/patients.html'));
});

app.get('/patientsorders.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/patientsorders.html'));
});

app.get('/patientswallet.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/patientswallet.html'));
});

app.get('/mywallet.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/patientswallet.html'));
});

app.get('/productdetails.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/productdetails.html'));
});

app.get('/storeorders.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/storeorders.html'));
});

app.get('/storeproducts.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/storeproducts.html'));
});

app.get('/styles.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/styles.css'));
});

app.get('/viewdetails.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/viewdetails.html'));
});

app.listen(8000);