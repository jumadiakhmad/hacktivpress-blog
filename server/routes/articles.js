const express = require('express');
const router = express.Router()
const articleCtrl = require('../controllers/articleController');

router.get('/', articleCtrl.getAllArticles);
router.get('/author.id', articleCtrl.getArticleByAuthor);
router.post('/', articleCtrl.createArticle);
router.put('/:id', articleCtrl.updateArticle);
router.delete('/:id', articleCtrl.deleteArticle);

module.exports = router;
