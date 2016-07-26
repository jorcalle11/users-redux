export const ADD = 'newTweet';
export const REMOVE = 'deleteTweet';

export function addTweet(tweet) {
  return {
    type: ADD,
    tweet
  }
}

export function removeTweet(tweet) {
  return {
    type: REMOVE,
    tweet
  }
}
