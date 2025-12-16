# Chapter Specification: Hardware Requirements

**Chapter Title**: Hardware Requirements
**Parent Spec**: `specs/001-robotics-textbook-spec/spec.md`
**Status**: Draft

## 1. Learning Objectives

Upon completing this chapter, the reader will be able to:
- Understand the minimum and recommended hardware specifications for completing the course.
- Identify if their current computer is suitable for the course.
- Make informed decisions about potential hardware upgrades.

## 2. Content Outline

This chapter will detail the hardware requirements for the "Physical AI & Humanoid Robotics" course. It will be broken down into minimum and recommended specifications.

**1. Minimum Requirements**
- **Operating System**: Ubuntu 22.04 (Jammy Jellyfish) - dual-boot or native installation is strongly recommended.
- **CPU**: Intel Core i5 or AMD Ryzen 5 (quad-core) or better.
- **RAM**: 16 GB.
- **Storage**: 50 GB of free space.
- **GPU**: Any integrated or discrete GPU that supports OpenGL 3.3.

*   **What you can do with the minimum requirements**: You will be able to complete the ROS 2 and basic Gazebo exercises. You may experience slow performance in more complex simulations. You will **not** be able to run Isaac Sim.

**2. Recommended Requirements**
- **Operating System**: Ubuntu 22.04 (Jammy Jellyfish) - native installation.
- **CPU**: Intel Core i7/i9 or AMD Ryzen 7/9 (6-core or 8-core) or better.
- **RAM**: 32 GB or more.
- **Storage**: 100 GB of free space on a Solid State Drive (SSD).
- **GPU**: NVIDIA RTX 3060 or better (for Isaac Sim and GPU acceleration). An RTX 3070, 3080, 4070, or higher is strongly recommended for a smooth experience.

*   **What you can do with the recommended requirements**: You will be able to comfortably run all simulations, including complex Gazebo worlds and the NVIDIA Isaac Sim platform. You will be able to take full advantage of GPU acceleration for perception and training.

**3. A Note on Apple Silicon (M1/M2/M3)**
- While ROS 2 and some simulators can be run on Apple Silicon via virtualization or containerization, it is **not officially supported** for this course. You may encounter significant compatibility and performance issues, especially with GPU-accelerated tasks and NVIDIA-specific software like Isaac Sim. Proceed at your own risk.

**4. A Note on Windows**
- ROS 2 has support for Windows, but the robotics ecosystem is primarily developed and tested on Linux. For a smoother learning experience, a native Ubuntu installation is strongly recommended. If you must use Windows, consider using Windows Subsystem for Linux (WSL) 2, but be aware that you may face challenges with GUI applications and hardware acceleration.

## 3. Chapter Requirements

-   The chapter should be presented as a clear, easy-to-understand list.
-   The chapter must not have a quiz.
-   The chapter should clearly explain the trade-offs between the minimum and recommended specs.
