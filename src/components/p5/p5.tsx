import './styles.css';

import { Flex, Text } from '@mantine/core';

const P5 = () => {
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
            onClick={() => {}}
          >
            Create
          </Text>
        </div>
      </div>
      <div className="right" style={{ backgroundColor: 'yellow', width: '80%' }}>
        b
      </div>
    </Flex>
  );
};

export default P5;
