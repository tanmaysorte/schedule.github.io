<script src="axios/axios.min.js"></script>
<script src="cheerio/cheerio.min.js"></script>


// const axios = require('axios');
// const cheerio = require('cheerio');

const getContestStartTime = async () => {
  try {
    const response = await axios.get('https://leetcode.com/contest/');
    const $ = cheerio.load(response.data);
    
    const contestTimeElement = $('div.contest-title span.countdown').attr('ng-if', 'contest.start');
    const contestStartTime = contestTimeElement.attr('value');

    console.log('Contest Start Time:', contestStartTime);
  } catch (error) {
    console.error('Error retrieving contest start time:', error);
  }
};

getContestStartTime();
