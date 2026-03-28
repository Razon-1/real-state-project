const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST /api/contact
router.post('/',
  [
    body('fullName').notEmpty().trim(),
    body('phoneNumber').notEmpty().trim(),
    body('emailAddress').isEmail().normalizeEmail(),
    body('timeSlot').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { fullName, phoneNumber, emailAddress, timeSlot } = req.body;
      
      // Here you would save to database and send email
      console.log('Meeting Request:', { fullName, phoneNumber, emailAddress, timeSlot });
      
      res.status(200).json({ 
        success: true, 
        message: 'Meeting scheduled successfully!' 
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to schedule meeting' });
    }
  }
);

module.exports = router;
