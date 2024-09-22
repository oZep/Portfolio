import React from 'react';
import Skills from './skills';

const Right = () => {
    return (
        <div className="block w-[250px]">
            <div className='h-full'>
                <div className="pt-[80px] sticky top-0">
                    <div>
                        <Skills title={"Languages"}>
                            <div className="flex flex-wrap">
                                <div className="flex flex-wrap p-5 skills-container">
                                    {[
                                        { src: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg", alt: "arduino logo" },
                                        { src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", alt: "bash logo" },
                                        { src: "https://download.blender.org/branding/community/blender_community_badge_white.svg", alt: "blender logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "bootstrap logo" },
                                        { src: "https://www.chartjs.org/media/logo-title.svg", alt: "chartjs logo" },
                                        { src: "https://cdn.worldvectorlogo.com/logos/django.svg", alt: "django logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", alt: "docker logo" },
                                        { src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", alt: "figma logo" },
                                        { src: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg", alt: "flask logo" },
                                        { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg", alt: "go logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", alt: "java logo" },
                                        { src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg", alt: "jenkins logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", alt: "linux logo" },
                                        { src: "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg", alt: "materialize logo" },
                                        { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", alt: "matlab logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "mysql logo" },
                                        { src: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg", alt: "opencv logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", alt: "pandas logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "php logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", alt: "postgresql logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "python logo" },
                                        { src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", alt: "pytorch logo" },
                                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "react logo" },
                                        { src: "https://reactnative.dev/img/header_logo.svg", alt: "reactnative logo" },
                                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "tailwindcss" },
                                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "typescript logo" },
                                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "javascript logo" },
                                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "html5 logo" }
                                    ].map((icon, index) => (
                                        <div key={index} className="icon flex items-center justify-center w-[48px] h-[48px] m-1">
                                            <img src={icon.src} alt={icon.alt} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Skills>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;
