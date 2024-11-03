import { motion, useScroll, useSpring } from 'framer-motion';
import { Image, Stack, Text } from '@mantine/core';
import Header from '../../assets/Header.svg';
import Header2 from '../../assets/Header2.svg';

import './styles.css';

const PgaeOne = () => {
  return (
    <div className="scroll-section" style={{ backgroundColor: '#E6E2E1' }}>
      <Stack gap="l">
        <Text c="black" size="xl">
          Beyond NO.
        </Text>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '10%' }}>
            <Text c="black" size="l">
              Thanks to D4BL for making this event possible, giving us a chance to explore social
              justice in the digital age.
            </Text>
            <div style={{ marginTop: '20%' }}>
              <Text c="black" size="xl">
                Explore more
              </Text>
            </div>
          </div>
          <div style={{ marginLeft: '20%' }}>
            <Text c="black" size="xl" fw={700}>
              Data can paint a picture, but it doesn’t always tell the full story. As you move
              through this experience, you’ll see the numbers, reflect on their meaning, and create
              a memory to carry forward.
            </Text>
          </div>
        </div>
        <Image src={Header} />
      </Stack>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div className="scroll-section" style={{ backgroundColor: '#3C3C3C' }}>
      <Stack gap="100px">
        <Text c="black" size="xl" style={{ color: '#E6E2E1' }}>
          Sample data
        </Text>
        <Image src={Header2} />
        {/* <Image src={Martin} /> */}
      </Stack>
    </div>
  );
};

const MainPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <PgaeOne />
      <PageTwo />
      <PgaeOne />
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default MainPage;
