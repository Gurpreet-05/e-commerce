const express = require('express');
const {
  createSeller,
  getSellers,
  getSellerById,
  updateSeller,
  deleteSeller
} = require('../controllers/sellerController');

const router = express.Router();

router.post('/', createSeller);
router.get('/', getSellers);
router.get('/:id', getSellerById);
router.put('/:id', updateSeller);
router.delete('/:id', deleteSeller);

module.exports = router;