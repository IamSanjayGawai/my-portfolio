import SkillItem from '../components/SkillItem'; // Adjust path as needed
import Profile_img from "../assets/images/profile-img.png";
import react from "../assets/skills/react.png";
import bootstrap from "../assets/skills/bootstrap.png";
import python from "../assets/skills/python.png";
import node from "../assets/skills/node.png";
import tailwind from "../assets/skills/tailwind.png";
import material from "../assets/skills/material.png";
import figma from "../assets/skills/figma.png";
import next from "../assets/skills/next.png";
import mongodb from "../assets/skills/mongodb.png";
import express from "../assets/skills/express.png";
import typescript from "../assets/skills/typescript.png";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import jquery from "../assets/skills/jquery.png";
import scss from "../assets/skills/scss.png";
import redux from "../assets/skills/redux.png";
import firebase from "../assets/skills/firebase.png";
import reactHookForm from "../assets/skills/reactHookForm.png";
import antd from "../assets/skills/antd.png";
import framerMotion from "../assets/skills/framerMotion.png";
import styledComponents from "../assets/skills/styledComponents.png";
import reactQuery from "../assets/skills/reactQuery.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import notion from "../assets/skills/notion.png";
import postman from "../assets/skills/postman.png";
import vscode from "../assets/skills/vscode.png";

const Skills = () => {
  return (
    <section className="bg-gray-50 py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="lg:text-5xl font-extrabold text-gray-900 text-4xl text-center w-full">
            My Skills
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Frontend Skills */}
          <div className="skill-category">
            <div className="space-y-4">
              <SkillItem imgSrc={react} altText="React.js" skillName="React.js" bgColor="bg-green-500" />
              <SkillItem imgSrc={next} altText="Next.js" skillName="Next.js" bgColor="bg-white" />
              <SkillItem imgSrc={tailwind} altText="Tailwind" skillName="Tailwind" bgColor="bg-white" />
              <SkillItem imgSrc={html} altText="HTML" skillName="HTML" bgColor="bg-blue-400" />
              <SkillItem imgSrc={css} altText="CSS" skillName="CSS" bgColor="bg-blue-600" />
              <SkillItem imgSrc={javascript} altText="JavaScript" skillName="JavaScript" bgColor="bg-yellow-500" />
              <SkillItem imgSrc={jquery} altText="jQuery" skillName="jQuery" bgColor="bg-gray-700" />
              <SkillItem imgSrc={scss} altText="SCSS" skillName="SCSS" bgColor="bg-white" />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category">
            <div className="space-y-4">
              <SkillItem imgSrc={node} altText="Node.js" skillName="Node.js" bgColor="bg-green-700" />
              <SkillItem imgSrc={express} altText="Express.js" skillName="Express.js" bgColor="bg-white" />
              <SkillItem imgSrc={mongodb} altText="MongoDB" skillName="MongoDB" bgColor="bg-black" />
              <SkillItem imgSrc={redux} altText="Redux" skillName="Redux" bgColor="bg-pink-600" />
              <SkillItem imgSrc={firebase} altText="Firebase" skillName="Firebase" bgColor="bg-yellow-400" />
            </div>
          </div>

          {/* Design Skills */}
          <div className="skill-category">
            <div className="space-y-4">
              <SkillItem imgSrc={figma} altText="Figma" skillName="Figma" bgColor="bg-blue-500" />
              <SkillItem imgSrc={material} altText="Material UI" skillName="Material UI" bgColor="bg-gray-600" />
              <SkillItem imgSrc={antd} altText="Ant Design" skillName="Ant Design" bgColor="bg-blue-600" />
              <SkillItem imgSrc={styledComponents} altText="Styled Components" skillName="Styled Components" bgColor="bg-cyan-400" />
              <SkillItem imgSrc={framerMotion} altText="Framer Motion" skillName="Framer Motion" bgColor="bg-violet-500" />
            </div>
          </div>

          {/* Miscellaneous Skills */}
          <div className="skill-category">
            <div className="space-y-4">
              <SkillItem imgSrc={reactHookForm} altText="React Hook Form" skillName="React Hook Form" bgColor="bg-white" />
              <SkillItem imgSrc={reactQuery} altText="React Query" skillName="React Query" bgColor="bg-white" />
              <SkillItem imgSrc={git} altText="Git" skillName="Git" bgColor="bg-black" />
              <SkillItem imgSrc={github} altText="GitHub" skillName="GitHub" bgColor="bg-white" />
              <SkillItem imgSrc={notion} altText="Notion" skillName="Notion" bgColor="bg-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills