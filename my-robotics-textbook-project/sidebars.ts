import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction to Book',
      link: { type: 'generated-index' },
      items: ['intro/index'], // Original intro.md will be moved to intro/index.mdx
    },
    {
      type: 'category',
      label: 'Preface',
      link: { type: 'generated-index' },
      items: ['preface/index'], // Links to docs/preface/index.mdx
    },
    {
      type: 'category',
      label: 'Introduction to Physical AI',
      link: { type: 'generated-index' },
      items: ['introduction/introduction'], // Links to docs/introduction/index.mdx with id: introduction
    },
    {
      type: 'category',
      label: 'Module 1 - ROS 2 Fundamentals',
      link: { type: 'generated-index' },
      items: ['modules/ros2/index'],
    },
    {
      type: 'category',
      label: 'Module 2 - Gazebo & Unity Simulation',
      link: { type: 'generated-index' },
      items: ['modules/gazebo-unity/index'],
    },
    {
      type: 'category',
      label: 'Module 3 - NVIDIA Isaac Platform',
      link: { type: 'generated-index' },
      items: ['modules/isaac/index'],
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action Systems',
      link: { type: 'generated-index' },
      items: ['modules/vla/index'],
    },
    {
      type: 'category',
      label: 'Weekly Breakdown',
      link: { type: 'generated-index' },
      items: ['weekly-breakdown/index'],
    },
    {
      type: 'category',
      label: 'Assessments',
      link: { type: 'generated-index' },
      items: ['assessments/index'],
    },
    {
      type: 'category',
      label: 'Hardware Requirements',
      link: { type: 'generated-index' },
      items: ['hardware-requirements/index'],
    },
    {
      type: 'category',
      label: 'Lab Setup Guide',
      link: { type: 'generated-index' },
      items: ['lab-setup-guide/index'],
    },
    {
      type: 'category',
      label: 'Capstone “Autonomous Humanoid” Project',
      link: { type: 'generated-index' },
      items: ['capstone-project/index'],
    },
    {
      type: 'category',
      label: 'Glossary',
      link: { type: 'generated-index' },
      items: ['glossary/index'],
    },
    {
      type: 'category',
      label: 'References',
      link: { type: 'generated-index' },
      items: ['references/index'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
