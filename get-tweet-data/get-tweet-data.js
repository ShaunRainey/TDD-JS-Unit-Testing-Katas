// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here
  let tags = [];
  const tagPattern = /#\w+/g

  if(tweet.match(tagPattern)){
    const tagMatch = tweet.match(tagPattern); 
    tagMatch.forEach(tag => {
      if(!tags.includes(tag)){tags.push(tag);}
    });
  }
  
  let mentions = [];
  const mentionPattern = /@\w+/g

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