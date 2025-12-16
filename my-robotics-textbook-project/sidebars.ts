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
    // Top-level introduction to the book
    'intro/index', 
    'preface/index',

    // A new "Modules" category to group all the learning modules
    {
      type: 'category',
      label: 'Core Modules',
      link: {
        type: 'generated-index',
        title: 'Core Learning Modules',
        description: 'These modules cover the fundamental concepts of Physical AI and Humanoid Robotics.',
      },
      items: [
        {
          type: 'doc',
          id: 'modules/ros2/index',
          label: 'Module 1 - ROS 2 Fundamentals',
        },
        {
          type: 'doc',
          id: 'modules/gazebo-unity/index',
          label: 'Module 2 - Gazebo & Unity Simulation',
        },
        {
          type: 'doc',
          id: 'modules/isaac/index',
          label: 'Module 3 - NVIDIA Isaac Platform',
        },
        {
          type: 'doc',
          id: 'modules/vla/index',
          label: 'Module 4 - Vision-Language-Action Systems',
        },
      ],
    },

    // A new "Course Information" category for all the supporting materials
    {
      type: 'category',
      label: 'Course Information',
      link: {
        type: 'generated-index',
        title: 'Course Information',
        description: 'All the supporting materials for the course.',
      },
      items: [
        'weekly-breakdown/index',
        'hardware-requirements/index',
        'lab-setup-guide/index',
      ],
    },
    
    // A new "Projects & Assessments" category
    {
        type: 'category',
        label: 'Projects & Assessments',
        link: {
            type: 'generated-index',
            title: 'Projects & Assessments',
            description: 'Apply your knowledge with these hands-on projects.',
        },
        items: [
            'assessments/index',
            'capstone-project/index',
        ],
    },

    // A new "Reference" category for glossary and references
    {
        type: 'category',
        label: 'Reference',
        link: {
            type: 'generated-index',
            title: 'Reference Materials',
            description: 'A glossary of terms and a list of references for further study.',
        },
        items: [
            'glossary/index',
            'references/index',
        ],
    }
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