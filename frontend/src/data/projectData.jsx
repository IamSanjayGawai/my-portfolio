import React from 'react';

// Importing images for all projects
import asnaroTop from "../assets/projects/asnaro-top.png";
import asnaroResult from "../assets/projects/asnaro-result.png";
import transaction from "../assets/projects/asnaro-transaction.png";
import asnaroAdmin from "../assets/projects/asnaro-admin.png";
import asnaroHero from "../assets/projects/asnaro-hero.png";

import expTop from "../assets/projects/exp-top.png";
import expResult from "../assets/projects/exp-hero.png";
import exptransaction from "../assets/projects/exp-chart.png";
import expAdmin from "../assets/projects/exp-dashboard.png";
import expHero from "../assets/projects/exp-profile.png";


import contentHero from "../assets/projects/ai-content-generator.png";



import askexptop from "../assets/projects/askexp-top.png"
import askexpHero from "../assets/projects/AskExp.png"
import askexpAdmin from "../assets/projects/AskExp-1.png"


// Define all project data in JSON-like format
const projectData = {
  projects: [
    {
      id: 3,
      name: "AI Expense Manager",
      description:
        "AI Expense Manager is a platform designed to help users manage and track their personal expenses with AI-driven insights and budgeting tools.",
      image: expTop,
      images: [ expResult, exptransaction, expAdmin,expHero],
      tech_stack: [ "React 19",
        "Next.js 15",
        "Tailwind CSS",
        "Supabase",
        "Prisma",
        "Clerk Authentication",
        "Inngest",
        "Arcjet",
        "ShadCN UI"],
      problem_faced: [
        {
          problem: "Analyzing user spending habits and categorizing expenses accurately.",
          solution:
            "We used machine learning models to categorize transactions based on patterns and implemented an AI algorithm to provide predictive insights.",
        },
        {
          problem: "Scaling the system for a large number of users.",
          solution:
            "We used cloud-based solutions for scalability and implemented efficient data storage practices to handle large datasets.",
        },
      ],
      more_details:
        "The platform uses AI to track expenses, suggest budgets, and generate reports, helping users make smarter financial decisions.",
        live_link: "https://expense-project-self.vercel.app/"  ,
        github_link: "https://github.com/IamSanjayGawai/ExpenseProject"
      
      },
    {
      id: 1,
      name: "Asnaro",
      description:
        "Asnaro is an e-commerce platform built for a Japanese client. The project involved developing a scalable, user-friendly system that supports various features like product catalog management, order processing, and secure payment integrations.",
      image: asnaroHero,
      images: [asnaroTop, asnaroResult, transaction, asnaroAdmin],
      tech_stack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        {
            name: "Real-Time Chat Feature",
            desc: "Asnaro includes a real-time chat feature, allowing immediate communication between buyers and sellers. This chat functionality also supports file uploads, enabling users to share product images, documents, and other media instantly. File previews are also supported to enhance the user experience."
        },
        {
            name: "Real-Time Order and Delivery Status Updates",
            desc: "The platform includes real-time order status updates, ensuring that both sellers and buyers stay informed about the progress of orders. From confirming the order to tracking its delivery, both parties can receive up-to-the-minute information about the status of the product."
        },
        {
            name: "Quotation Creation and Real-Time Sharing",
            desc: "Sellers on Asnaro have access to a unique quotation creation platform. Sellers can generate customized quotes for buyers, and these quotes are sent and visible in real time to both the buyer and the seller, streamlining the negotiation process and improving transparency."
        },
        {
            name: "Refund System",
            desc: "The platform features a comprehensive refund system, allowing users to initiate and manage refund requests efficiently. The system ensures a smooth and hassle-free experience for both buyers and sellers."
        },
        {
            name: "Admin Dashboard",
            desc: "The admin dashboard offers robust controls for managing the platform. Admins can monitor transactions, track order statuses, manage users, and oversee the entire marketplace with ease."
        },
        {
            name: "PDF Generation",
            desc: "Asnaro includes the capability to generate PDF documents for quotes, invoices, and other transactional records. These PDFs can be downloaded and shared, providing a professional touch to every transaction."
        },
        {
            name: "Rating, Feedback, and Review System",
            desc: "Asnaro includes a robust rating and feedback system where buyers can rate their experience and leave reviews for the products and services they receive. This feature enhances the trust and credibility of the platform by allowing future buyers to make informed decisions based on previous customer experiences."
        }
    ],
      problem_faced: [
        {
          problem: "Handling large amounts of product data efficiently.",
          solution:
            "We implemented pagination and lazy loading for the product catalog to reduce the load on the server and improve user experience.",
        },
        {
          problem: "Ensuring smooth order processing and payment integration.",
          solution:
            "We used a reliable payment gateway API and optimized the backend to handle concurrent transactions seamlessly.",
        },
      ],
      more_details:
        "This project was designed to scale and handle over 1,000 monthly active users with a target uptime of 99.9%. The goal was to process 500+ transactions monthly while reducing infrastructure costs by 35%.",
      live_link: ""  ,
      github_link: "https://github.com/IamSanjayGawai/asnaro-webapp"
    
    
      },

  
    
    {
      id: 4,
      name: "AI Content Manager",
      description:
        "AI Content Manager is an intelligent platform that helps businesses generate and manage content based on user input and preferences, leveraging AI to create personalized content.",
      image: contentHero,
      images: [contentHero, contentHero, contentHero, contentHero],
      tech_stack: [  
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Gemini",
        "Clerk"],
      problem_faced: [
        {
          problem: "Generating relevant content based on user preferences.",
          solution:
            "We integrated GPT-3 for content generation and built algorithms to analyze user input and generate personalized suggestions.",
        },
        {
          problem: "Ensuring the platform remains responsive and fast.",
          solution:
            "We optimized API calls, used caching, and integrated serverless solutions to ensure the platform handled large-scale content generation seamlessly.",
        },
      ],
      more_details:
        "AI Content Manager automates content creation, enabling businesses to deliver customized content at scale, improving engagement and productivity.",
        live_link: ""  ,
        github_link: "https://github.com/IamSanjayGawai/ai-conent-generator"
      
      },
    // {
    //   id: 5,
    //   name: "BannerBox",
    //   description:
    //     "BannerBox is an interactive banner management tool for websites. It allows users to create, manage, and display dynamic banners that adapt to different screen sizes and user preferences.",
    //   image: asnaroHero,
    //   images: [asnaroTop, asnaroResult, transaction, asnaroAdmin],
    //   tech_stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    //   problem_faced: [
    //     {
    //       problem: "Ensuring responsive banner designs that work across various screen sizes.",
    //       solution:
    //         "We implemented a flexible grid system and media queries to ensure that banners looked great on all screen sizes.",
    //     },
    //     {
    //       problem: "Managing real-time updates for dynamic banners.",
    //       solution:
    //         "We utilized WebSockets to enable real-time communication between the server and client to instantly update banners.",
    //     },
    //   ],
    //   more_details:
    //     "BannerBox is designed to help marketers easily create and manage banners, providing real-time analytics and ensuring responsiveness across devices.",
    //     live_link: "https://bannerbox.in/"  ,
    //     github_link: ""
      
    //   },
    {
      id: 6,
      name: "AskExp",
      description:
        "AskExp is a platform where users can ask questions and get answers from experts in various fields. It uses a simple and intuitive interface for seamless user interaction.",
      image: askexptop,
      images: [askexptop,askexpAdmin, askexpHero,  askexpAdmin],
      tech_stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      problem_faced: [
        {
          problem: "Ensuring the platform could handle a large volume of real-time user interactions.",
          solution:
            "We used a microservice architecture to handle traffic spikes efficiently and implemented load balancing.",
        },
        {
          problem: "Managing user-generated content and ensuring its quality.",
          solution:
            "We integrated moderation features and allowed experts to verify answers before they were posted.",
        },
      ],
      more_details:
        "AskExp enables users to get answers from experts, fostering a knowledge-sharing community. It aims to bridge the gap between people seeking information and those with expertise.",
        live_link: "https://askexpertfront.vercel.app/"  ,
        github_link: "https://github.com/IamSanjayGawai/askweb"
      
      },
  ],
};

// Export the project data
export default projectData;
