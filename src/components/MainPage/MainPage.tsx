import { motion, useScroll, useSpring } from 'framer-motion';
import { Divider, Flex, Grid, Group, Image, Stack, Text } from '@mantine/core';
import Graph from '../../assets/Graph.svg';
import Header from '../../assets/Header.svg';
import Header2 from '../../assets/Header2.svg';
import Martin from '../../assets/Martin.svg';
import Page4 from '../../assets/page4.svg';

import './styles.css';

const PgaeOne = () => {
  return (
    <div className="scroll-section" style={{ backgroundColor: '#E6E2E1' }}>
      <Stack gap="l">
        <div>
          <Text c="black" size="xl">
            Beyond <a style={{ fontWeight: 700 }}>NO.</a>
          </Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '10%' }}>
            <Text c="black" size="l">
              Thanks to D4BL for making this event possible, giving us a chance to explore social
              justice in the digital age.
            </Text>
            <div style={{ marginTop: '20%' }}>
              <Text c="black" size="xl" style={{ textDecoration: 'underline' }}>
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
    <div className="scroll-section page2" style={{ backgroundColor: '#3C3C3C' }}>
      <Stack>
        <Text c="white" size="xl">
          Sample data
        </Text>
        <Image src={Header2} style={{ zIndex: 1000 }} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '32px',
            right: '32px',
            height: '80vh',
            overflow: 'hidden',
          }}
        >
          <Image
            src={Martin}
            style={{
              objectFit: 'fill',
            }}
          />
        </div>
      </Stack>
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="scroll-section" style={{ backgroundColor: 'white' }}>
      <Stack>
        <div>
          <Text c="black" size="xl">
            Sample data
          </Text>
          <Text c="black" size="xl" style={{ textDecoration: 'underline' }}>
            1950-2005
          </Text>
        </div>
        <Flex direction="row">
          <div style={{ width: '70%', position: 'relative' }}>
            <div className="lower-left">
              <Flex direction="row">
                <div className="dot" style={{ backgroundColor: 'red' }} />
                <div>Personal Attack</div>
              </Flex>
              <Flex direction="row">
                <div className="dot" style={{ backgroundColor: '#2A357D' }} />
                <div>Riot or Brawl</div>
              </Flex>
              <Flex direction="row">
                <div className="dot" style={{ backgroundColor: '#EAA703' }} />
                <div>Verbal or Written Expression</div>
              </Flex>
            </div>
          </div>
          <div style={{ width: '30%' }}>
            <Text c="black" size="xl" fw={700}>
              This map shows major social events in the U.S. post-WWII, drawn from the SPEED
              Project’s Societal Stability Protocol. The SSP tracks events that disrupt daily life
              and raise public anxiety, focusing on four main types: political protests, attacks,
              state actions, and shifts in political power.{' '}
            </Text>
          </div>
        </Flex>
        <Flex
          direction="row"
          justify="center"
          align="center"
          style={{
            position: 'relative',
            bottom: 0,
            width: '100%',
            height: '60vh',
            overflow: 'hidden',
          }}
        >
          <Image src={Graph} style={{ zIndex: 1000, height: '100%', width: 'auto' }} />
        </Flex>
      </Stack>
    </div>
  );
};

const PageFour = () => {
  return (
    <div className="scroll-section" style={{ backgroundColor: '#E6E2E1', position: 'relative' }}>
      <Flex
        direction="row"
        justify="center"
        align="center"
        style={{
          position: 'relative',
          bottom: 0,
          width: '100%',
          height: '95vh',
          overflow: 'hidden',
        }}
      >
        <Image src={Page4} style={{ zIndex: 1000, height: '100%', width: 'auto' }} />
      </Flex>
    </div>
  );
};

const PageFive = () => {
  return (
    <div className="scroll-section" style={{ backgroundColor: 'white' }}>
      <Flex direction="row" style={{ height: '100vh' }}>
        <div style={{ width: '40%', position: 'relative' }}>
          <Stack gap="xl">
            <Text c="#3C3C3C" size="xl">
              Behind data
            </Text>
            <Text c="#3C3C3C" size="xl">
              How Data Visualization Helps Us Remember Stories
            </Text>
          </Stack>
        </div>
        <div style={{ width: '60%', height: '100%' }}>
          <Grid>
            <Grid.Col span={6} style={{ height: '45vh' }}>
              <GrpahBox
                title1="01"
                title2="Color Legend"
                content="Each color represents a different type of event—political protests, attacks, state actions, and shifts in power. The legend acts as a key to distinguish each occurrence's nature, making it easier to see the different threads in the story of social change."
              />
            </Grid.Col>
            <Grid.Col span={6} style={{ height: '45vh' }}>
              <GrpahBox
                title1="02"
                title2="Attributes"
                content="Important details such as event type, location, date, and participants are emphasized to help reveal patterns over time and place. By focusing on these attributes, users can see the bigger picture and remember individual stories within the timeline."
              />
            </Grid.Col>
            <Grid.Col span={6} style={{ height: '45vh' }}>
              <GrpahBox
                title1="03"
                title2="Layout"
                content="Events are organized chronologically across the U.S., with larger icons for more impactful events. This layout guides users through a timeline of events, helping them understand the sequence and regional effects of each occurrence. Hovering over specific points reveals more details."
              />
            </Grid.Col>
            <Grid.Col span={6} style={{ height: '45vh' }}>
              <GrpahBox
                title1="04"
                title2="Interactive Tooltips"
                content="Tooltips appear when users hover over each data point, offering additional information (date, description, participants) without cluttering the visual. These tooltips allow for a deeper dive into specific data points, helping users connect emotionally with each story and remember it more vividly."
              />
            </Grid.Col>
          </Grid>
        </div>
      </Flex>
    </div>
  );
};

const GrpahBox = ({
  title1,
  title2,
  content,
}: {
  title1: string;
  title2: string;
  content: string;
}) => {
  return (
    <>
      <Text size="lg" fw={600}>
        {title1}
      </Text>
      <Text size="lg" fw={600}>
        {title2}
      </Text>
      <div style={{ margin: '12px 0px', backgroundColor: 'black', height: '1px', width: '100%' }} />
      <Text size="lg" c="#8A8A8A">
        {content}
      </Text>
    </>
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
      <PageThree />
      <PageFour />
      <PageFive />
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};

export default MainPage;
