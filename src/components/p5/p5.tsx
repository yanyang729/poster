import { useState } from 'react';

import './styles.css';

import { Flex, Image, Loader, Text } from '@mantine/core';

const P5 = () => {
  const posterUrls = Array.from(
    { length: 5 },
    (_, i) => `https://beyond-no.s3.us-east-1.amazonaws.com/assets/posters/poster${i + 1}.png`
  );
  const [loading, setLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  const pickRandomPoster = async () => {
    const randomIndex = Math.floor(Math.random() * posterUrls.length);
    setSelectedUrl(posterUrls[randomIndex]);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <Flex direction="row" gap="xl" style={{ marginTop: '64px' }} justify="start" align="start">
      <div>
        <Text c="black" size="l">
          End your journey by creating a personalized postcard to remember these social events.
        </Text>
        <div style={{ marginTop: '20%' }}>
          {loading ? (
            <Loader />
          ) : (
            <Text
              c="black"
              className="click"
              size="xl"
              style={{ textDecoration: 'underline' }}
              onClick={pickRandomPoster}
            >
              Create
            </Text>
          )}
        </div>
      </div>
      <div style={{ height: '80vh' }}>
        {!!selectedUrl && !loading && (
          <Image
            src={selectedUrl}
            style={{ zIndex: 1000, height: '100%', width: '100%', objectFit: 'contain' }}
          />
        )}
      </div>
    </Flex>
  );
};

export default P5;
