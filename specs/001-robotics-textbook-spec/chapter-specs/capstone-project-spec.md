# Chapter Specification: Capstone Project

**Chapter Title**: Capstone “Autonomous Humanoid” Project
**Parent Spec**: `specs/001-robotics-textbook-spec/spec.md`
**Status**: Draft

## 1. Learning Objectives

Upon completing this chapter, the reader will be able to:
- Understand the goals and requirements of the capstone project.
- Follow a structured guide to build, test, and demonstrate an autonomous humanoid robot in simulation.
- Integrate perception, control, and navigation in a complex ROS 2 application.

## 2. Content Outline

This chapter provides a detailed guide to the final capstone project of the course.

**1. Project Goal**
- The goal of the capstone project is to build an autonomous humanoid robot in simulation that can navigate to a specific object in a room, pick it up, and place it in a designated location.

**2. The Robot**
- We will be using a pre-existing humanoid robot model (e.g., the Unitree H1 or a similar model) in Isaac Sim.
- The robot will be equipped with a head-mounted camera and an IMU sensor.

**3. The Environment**
- The simulation environment will be a simple room in Isaac Sim containing a few objects (e.g., a table, a chair, a cube).

**4. Project Phases**

**Phase 1: Perception**
- **Goal**: To identify the target object and its location.
- **Tasks**:
    -   Create a ROS 2 node that subscribes to the camera feed from Isaac Sim.
    -   Use a pre-trained object detection model (e.g., YOLO) to detect the target object in the camera image.
    -   Publish the object's location as a ROS 2 message.

**Phase 2: Control**
- **Goal**: To control the robot's arms and legs.
- **Tasks**:
    -   Create a ROS 2 node that can control the joints of the humanoid robot.
    -   Implement simple motion primitives like "walk forward", "turn left", "reach for object".

**Phase 3: Navigation & Manipulation**
- **Goal**: To combine perception and control to achieve the main goal.
- **Tasks**:
    -   Create a high-level "behavior" node that:
        1.  Subscribes to the object location from the perception node.
        2.  Issues commands to the control node to walk towards the object.
        3.  Once at the object, issues commands to pick it up.
        4.  Navigates to the designated drop-off location.
        5.  Issues commands to place the object.

**5. Deliverables**
- A link to a GitHub repository containing all the ROS 2 packages for the project.
- A comprehensive `README.md` with instructions on how to launch the simulation and run the project.
- A final video demonstration of the humanoid robot completing the task.
- A final report detailing the architecture of the system, the challenges faced, and potential improvements.

## 3. Chapter Requirements

-   The chapter must be a clear, step-by-step guide.
-   The chapter should provide code snippets for the key parts of the project.
-   The chapter must not have a quiz.
-   The chapter should include diagrams illustrating the ROS 2 node graph for the final system.
