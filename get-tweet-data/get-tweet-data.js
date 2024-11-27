/*getTweetData(tweet)

Takes a string representing a tweet and returns an object containing key data about the tweet, including its length, the count and array of unique hashtags, and the count and array of unique mentions.

*/
function getTweetData (tweet) {
  // Your code here
  let tags = [];
  const tagPattern = /#\w+/g;

  if(tweet.match(tagPattern)){
    const tagMatch = tweet.match(tagPattern); 
    tagMatch.forEach(tag => {
      if(!tags.includes(tag)){tags.push(tag);}
    });
  }
  
  let mentions = [];
  const mentionPattern = /@\w+/g;

  if(tweet.match(mentionPattern)){
    const mentionMatch = tweet.match(mentionPattern);
    mentionMatch.forEach(mention => {
      if(!mentions.includes(mention)){mentions.push(mention);}
    });
  }

  let tagCount = tags.length;
  let mentionCount = mentions.length;
  let length = tweet.length;

  const outputObject =  {tags, mentions, tagCount, mentionCount, length};
 
  return outputObject;
};

module.exports = getTweetData;
