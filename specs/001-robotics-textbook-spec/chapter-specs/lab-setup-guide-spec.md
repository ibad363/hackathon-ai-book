# Chapter Specification: Lab Setup Guide

**Chapter Title**: Lab Setup Guide
**Parent Spec**: `specs/001-robotics-textbook-spec/spec.md`
**Status**: Draft

## 1. Learning Objectives

Upon completing this chapter, the reader will be able to:
- Install Ubuntu 22.04.
- Install ROS 2 Humble Hawksbill.
- Install Gazebo.
- Install the NVIDIA Isaac Sim prerequisites.
- Set up a ROS 2 workspace.

## 2. Content Outline

This chapter will provide a step-by-step guide to setting up the development environment for the course.

**1. Installing Ubuntu 22.04**
- A brief guide on how to create a bootable USB and install Ubuntu alongside Windows (dual-boot) or as the main OS.
- Link to the official Ubuntu installation tutorial.

**2. Installing ROS 2 Humble Hawksbill**
- A step-by-step guide to installing ROS 2 Humble, following the official ROS 2 documentation.
- This will include setting up the sources, installing the `ros-humble-desktop-full` package, and sourcing the setup files.
- A section on how to test the installation by running a simple talker/listener example.

**3. Installing Gazebo**
- A guide on how to install Gazebo, which is installed as part of the `ros-humble-desktop-full` package.
- How to install the `ros_gz` bridge packages.
- How to test the installation by launching Gazebo.

**4. Installing NVIDIA Isaac Sim Prerequisites**
- A guide on how to install the NVIDIA Omniverse Launcher.
- How to install Isaac Sim from the Omniverse Launcher.
- A section on installing the correct NVIDIA drivers.

**5. Setting up your ROS 2 Workspace**
- A guide on how to create a `ros2_ws` directory.
- How to clone the course's example code from a GitHub repository.
- How to build the workspace using `colcon build`.

## 3. Chapter Requirements

-   The chapter must be a clear, step-by-step guide.
-   All commands must be in bash script blocks.
-   The chapter must not have a quiz.
-   The chapter should include links to the official documentation for Ubuntu, ROS 2, and NVIDIA Isaac Sim.
