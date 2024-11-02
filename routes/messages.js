const express = require('express');
const router = express.Router();

// Define your messages route
router.get('/', (req, res) => {
    const messages = [
        'The Story of Heavenly-Jerusaluem: The King who gave all for me.',
        'Love so Perfect, Love so divine',
        'He is the heir of all things',
        'He owns the whole universe including the ages to come',
        'Yet he chose to live in me',
        'This is the story of love so pure and divine',
        'He gave me everything, now I am heir of eternal verities and untold wealth men can\'t fathom',
        'I tell the story of love embedded in my heart, the story of his unfailing grace',
        'I am grateful that he loved me and made me so righteous and glorious as he',
        'This is the story my Master, ruler, God, Father and King',
        'He is my LORD JESUS CHRIST!!'
    ];

    res.render('index', {
        title: 'Home is where my heart lives',
        messages
    });
});

module.exports = router;
