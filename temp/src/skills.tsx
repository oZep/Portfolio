import React from 'react';

interface SkillsProps {
    title: string;
    children: React.ReactNode;
}

const Skills = (props: SkillsProps) => {
    return (
        <div>
            <div className="skills-title-container">
                {props.title}
            </div>
            <div >
                {props.children}
            </div>
        </div>
    );
};

export default Skills;