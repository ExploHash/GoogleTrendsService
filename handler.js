'use strict';
const googleTrends = require('google-trends-api');

module.exports.getData = async (event) => {
  let data;

  try {
    data = await googleTrends.interestOverTime({
      ...event,
      startTime: event.startTime && new Date(event.startTime),
      endTime: event.endTime && new Date(event.endTime),
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: "Fuck google"
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

