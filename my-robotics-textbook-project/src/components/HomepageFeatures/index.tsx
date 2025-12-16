import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

// TODO: Replace these with more relevant icons for the robotics textbook
const FeatureList: FeatureItem[] = [
  {
    title: 'Foundational Concepts',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn the core principles of modern robotics, including ROS 2, simulation with Gazebo and Unity, and robot kinematics.
      </>
    ),
  },
  {
    title: 'AI for Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explore the cutting edge of AI in robotics, from computer vision and perception to advanced Vision-Language-Action (VLA) models.
      </>
    ),
  },
  {
    title: 'Hands-On Learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Put theory into practice with hands-on exercises, simulation-based projects, and a final capstone project to build an autonomous humanoid robot.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
