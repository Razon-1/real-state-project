const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST /api/meeting
router.post('/',
  [
    body('fullName').notEmpty().trim(),
    body('phoneNumber').notEmpty().trim(),
    body('timeSlot').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { fullName, phoneNumber, emailAddress, timeSlot } = req.body;
      
      // Here you would save to database
      console.log('Meeting:', { fullName, phoneNumber, emailAddress, timeSlot });
      
      res.status(200).json({ 
        success: true, 
        message: 'Meeting request received!' 
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to process meeting request' });
    }
  }
);

module.exports = router;
