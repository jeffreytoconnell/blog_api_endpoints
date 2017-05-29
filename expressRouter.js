const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const {BlogPosts} = require('./models');

BlogPosts.create("First Blog", "BLAH", "Jeff");
BlogPosts.create("Second Blog", "WTH", "Jeff");

router.get('/', (req, res) => {
    console.log("Test");
    res.json(BlogPosts.get())
});

router.post('/', jsonParser, (req, res) => {
    console.log("Post test");
    console.log(req);
    BlogPosts.create(req.body.title, req.body.content, req.body.author);
    res.status(201).json("posted successfully");
});


router.delete('/:id', (req,res) => {
    BlogPosts.delete(req.params.id);
    res.status(204).end();
});

router.put('/:id', jsonParser, (req, res) => {
    console.log("here");
    BlogPosts.update({
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        publishDate: req.body.publishDate
    });
    res.status(204).json("updated");
});

module.exports = router;
