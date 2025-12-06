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
    'intro', // Introduction to the textbook, currently mapped to intro.md
    {
      type: 'category',
      label: 'Preface',
      items: ['preface'], // Placeholder for Preface
    },
    {
      type: 'category',
      label: 'Introduction to Physical AI',
      items: ['introduction'], // Placeholder for Introduction
    },
    {
      type: 'category',
      label: 'Module 1 - ROS 2 Fundamentals',
      items: ['modules/ros2/intro'], // Placeholder for ROS 2 module
    },
    {
      type: 'category',
      label: 'Module 2 - Gazebo & Unity Simulation',
      items: ['modules/gazebo-unity/intro'], // Placeholder for Gazebo & Unity module
    },
    {
      type: 'category',
      label: 'Module 3 - NVIDIA Isaac Platform',
      items: ['modules/isaac/intro'], // Placeholder for NVIDIA Isaac module
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action Systems',
      items: ['modules/vla/intro'], // Placeholder for VLA module
    },
    {
      type: 'category',
      label: 'Weekly Breakdown',
      items: ['weekly-breakdown'], // Placeholder for Weekly Breakdown
    },
    {
      type: 'category',
      label: 'Assessments',
      items: ['assessments'], // Placeholder for Assessments
    },
    {
      type: 'category',
      label: 'Hardware Requirements',
      items: ['hardware-requirements'], // Placeholder for Hardware Requirements
    },
    {
      type: 'category',
      label: 'Lab Setup Guide',
      items: ['lab-setup-guide'], // Placeholder for Lab Setup Guide
    },
    {
      type: 'category',
      label: 'Capstone “Autonomous Humanoid” Project',
      items: ['capstone-project'], // Placeholder for Capstone Project
    },
    {
      type: 'category',
      label: 'Glossary',
      items: ['glossary'], // Placeholder for Glossary
    },
    {
      type: 'category',
      label: 'References',
      items: ['references'], // Placeholder for References
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
