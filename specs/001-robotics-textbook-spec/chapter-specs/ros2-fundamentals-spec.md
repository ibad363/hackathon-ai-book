# Chapter Specification: ROS 2 Fundamentals

**Chapter Title**: Module 1 - ROS 2 Fundamentals
**Parent Spec**: `specs/001-robotics-textbook-spec/spec.md`
**Status**: Draft

## 1. Learning Objectives

Upon completing this chapter, the reader will be able to:
- Explain the core concepts of ROS 2, including nodes, topics, services, actions, and parameters.
- Understand the ROS 2 architecture and how communication happens between different parts of a robotic system.
- Create, build, and run a simple ROS 2 package and node using Python.
- Use ROS 2 command-line tools to inspect and debug a running ROS 2 system.
- Explain the importance of launch files for starting and managing complex robotic systems.

## 2. Content Outline

This chapter will cover the following topics:
1.  **Introduction to ROS 2**: What is ROS 2 and why is it important for robotics? A brief history and its key features.
2.  **Core Concepts**:
    -   **Nodes**: The fundamental processing units in ROS 2.
    -   **Topics**: Asynchronous, one-to-many communication using a publish/subscribe model.
    -   **Services**: Synchronous, one-to-one communication for request/reply interactions.
    -   **Actions**: Asynchronous, one-to-one communication for long-running tasks with feedback.
    -   **Parameters**: A way to configure nodes at runtime.
    -   **Messages**: The data structures used for topics, services, and actions.
3.  **Getting Started with ROS 2**:
    -   Creating a ROS 2 workspace.
    -   Creating a simple ROS 2 package.
    -   Writing a "Hello, World!" publisher and subscriber node in Python.
    -   Building and running the nodes.
4.  **ROS 2 Command-Line Tools**:
    -   `ros2 run`: To execute a node.
    -   `ros2 node list`: To list running nodes.
    -   `ros2 topic list/echo/pub`: To inspect topics.
    -   `ros2 service list/call`: To inspect and call services.
    -   `ros2 action list/send_goal`: To inspect and send action goals.
    -   `ros2 param list/get/set`: To manage parameters.
5.  **Launch Files**:
    -   Introduction to launch files for starting multiple nodes.
    -   Creating a simple launch file in Python.

## 3. Chapter Requirements

-   All code examples must be in Python.
-   The chapter should include at least two diagrams:
    1.  A diagram illustrating the publish/subscribe model with topics.
    2.  A diagram showing the request/reply model with services.
-   The chapter must include a hands-on exercise where the reader creates a simple publisher/subscriber system.
-   The chapter must end with a summary of key takeaways and a short quiz of 5 questions.
-   Include links to the official ROS 2 documentation for further study.
