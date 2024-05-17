import React from 'react';

const TwitterShareButton = ({ text }) => {
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={twitterShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="twitter-share-button"
    >
      分享到推特
    </a>
  );
};

export default TwitterShareButton;