const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST /api/suggestion
router.post('/',
  [
    body('name').notEmpty().trim(),
    body('phone').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('message').notEmpty().trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, phone, email, message } = req.body;
      
      // Here you would save to database and send email
      console.log('Suggestion:', { name, phone, email, message });
      
      res.status(200).json({ 
        success: true, 
        message: 'Suggestion submitted successfully!' 
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to submit suggestion' });
    }
  }
);

module.exports = router;
