const Request = require('../models/Request');

exports.processRequest = async (requestId) => {
  try {
    const request = await Request.findByIdAndUpdate(
      requestId,
      { status: 'Processing' },
      { new: true }
    );
    return request;
  } catch (err) {
    throw new Error('Failed to process request');
  }
};