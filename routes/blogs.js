var router = require('express').Router();
var mongoose = require('mongoose');

var Blog = mongoose.model('Blog', {
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: String
});

router.get('/', function (req, res) {
    Blog.find(function (err, result) {
        if (err) res.status(500).json({ message: 'oops something broke on get /'});
        else res.status(200).json(result);
    });
});

router.get('/:id', function (req, res) {
    Blog.findById(req.params.id, function (err, result) {
        console.log(result);
        if (err) res.status(500).json({ message: 'oops something broke on get /'});
        else res.status(200).json(result);
    });
});

router.post('/', function (req, res) {
    (new Blog(req.body)).save(function (err, result) {
        if (err) res.status(500).json({ message: 'oops something broke on get /'});
        else res.status(200).json(result);
    });
});


module.exports = router;