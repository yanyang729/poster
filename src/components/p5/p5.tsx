import { useState } from 'react';

import './styles.css';

import { Flex, Image, Text } from '@mantine/core';

const P5 = () => {
  const posterUrls = Array.from(
    { length: 5 },
    (_, i) => `https://beyond-no.s3.us-east-1.amazonaws.com/assets/posters/poster${i + 1}.png`
  );
  const [selectedUrl, setSelectedUrl] = useState(posterUrls[0]);
  const pickRandomPoster = () => {
    const randomIndex = Math.floor(Math.random() * posterUrls.length);
    setSelectedUrl(posterUrls[randomIndex]);
  };

  return (
    <Flex direction="row" style={{ height: '95%' }}>
      <div className="left" style={{ width: '20%', paddingTop: '64px', paddingLeft: '32px' }}>
        <Text c="black" size="l">
          End your journey by creating a personalized postcard to remember these social events.
        </Text>
        <div style={{ marginTop: '20%' }}>
          <Text
            c="black"
            className="click"
            size="xl"
            style={{ textDecoration: 'underline' }}
            onClick={pickRandomPoster}
          >
            Create
          </Text>
        </div>
      </div>
      <div className="right" style={{ width: '80%' }}>
        <Image src={selectedUrl} style={{ zIndex: 1000, height: '100%', width: 'auto' }} />
      </div>
    </Flex>
  );
};

export default P5;
