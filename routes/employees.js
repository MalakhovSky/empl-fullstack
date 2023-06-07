const express = require('express');
const router = express.Router()
const {auth} = require('../middleware/auth');
const {all, add} = require('../controllers/emoloyees')

router.get('/', auth, all)
router.get('/:id', auth, () => {
    console.log('get  employee')
})
router.post('/add',auth, add)
router.post('/remove/:id', auth, () => {
    console.log('remove employee')
})
router.put('/edit/:id', auth, () => {
    console.log('edit employee')
})

module.exports = router;

