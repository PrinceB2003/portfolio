import LargeCard from "../components/LargeCard";
import { CircleUser } from 'lucide-react';
import { Button } from "flowbite-react";
import { motion } from "motion/react"
import AutoCarousel from "../components/AutoCarousel";

function LandingPage() { 
    return ( 
            <> 
                <header className="flex justify-between bg-[#02010a] pt-8 pb-8 pl-8 pr-8"> 
                    <div> 
                        <h1 className="font-Header font-semibold text-[#f3eff5] text-4xl">Prince Barua</h1>
                    </div> 
                    <div className="flex gap-8 font-Text font-bold text-xl"> 
                        <a href="#about" className="text-[#f3eff5] hover:scale-125">About</a>
                        <a href="#education" className="text-[#f3eff5] hover:scale-125">Education</a>  
                        <a href="#skills" className="text-[#f3eff5] hover:scale-125">Skills</a>
                        <a href="#experience" className="text-[#f3eff5] hover:scale-125">Experience</a>
                        <a href="#projects" className="text-[#f3eff5] hover:scale-125">Projects</a>
                        <a href="#contact" className="text-[#f3eff5] hover:scale-125">Contact Me</a>
                    </div>
                </header>

                <section id="hero" className="bg-[#02010a] pt-16 pb-16 min-h-[90vh] w-[100%]"> 
                    <div id="hero-content-container" className="flex justify-center items-center gap-16"> 
                        <div className="w-[35rem]">
                            <div className="mt-4 mb-4"> 
                                <h1 className=" font-Heading font-bold text-5xl text-[#f3eff5]">Hi, my name is Prince.</h1>
                            </div> 

                            <div className="mt-4 mb-4"> 
                                <h1 className=" font-Heading font-bold text-5xl text-[#f3eff5]" >Web Developer & Aspiring Cybersecurity Analyst </h1>
                            </div>

                            <div id="hero-btn-container" className="flex gap-4 mt-8 mb-8"> 
                                <div> 
                                    <Button >Contact Me</Button>
                                </div>

                                <div> 
                                    <a href="https://www.linkedin.com/in/prince-barua/" target="_blank"> 
                                        <img className="h-[2.5rem] w-[2.5rem]"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                                    </a>
                                </div>


                                <div> 
                                    <a href="https://github.com/PrinceB2003" target="_blank">                                                                                
                                        <img className="h-[2.5rem] w-[2.5rem] brightness-[50]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"/>
                                    </a>
                                </div>

                            </div>
                        </div>

                        

                        <div id="img-wrapper" className=" rounded-full flex justify-center items-center" > 
                            <div> 
                        
                                {/* <img className=" h-[450px] w-[450px] rounded-full flex justify-center items-center" > 
                            <div>  h-[400px] w-[400px] rounded-full" src="/src/assets/profile-500x500.png"></img> */}
                            </div>

                            <div className="flex flex-col "> 
                                    <div className="w-[50%]"> 

                                    </div> 

                                    <div className=""> 
                                        <img className="h-[40rem] w-[40rem]" src="/src/assets/undraw_programming_j1zw.svg"></img>
                                    </div>
                                </div>
                        </div>
                        
                    </div>   
                </section>
                
            <motion.div> 
                <section id="about" className="bg-[#02010a] pt-16 pb-16 min-h-[90vh] w-[100%]"> 
                    <div id="about-wrapper">
                
                            <div className="mb-8"> 
                                <h1 className="font-Heading font-bold text-5xl text-[#f3eff5] text-center"> About Me</h1>   
                            </div>

                        <div className="flex justify-center gap-8">
                            <div> 
                                {/* <CircleUser  size={256} color={"#FFFFFF"}/>  */}
                                <img className="h-[20rem] w-[18rem]" src="/src/assets/pb.jpeg"></img>
                            </div>
                            <LargeCard> 
                                <div className="w-[40rem] p-2"> 
                                    <p className="text-[#f3eff5] font-medium font-Text text-xl">  
                                    I'm a computer science student at Queens College with a strong passion for front-end development and cybersecurity.  
                                    As a technology intern at theHIPE, I designed and developed a community web page focused on cybersecurity using React and Tailwind CSS.  
                                    I’ve also built responsive web apps and gained hands-on experience through cybersecurity fellowships, working with tools like Splunk, Wireshark, and Kali Linux. 
                                    I enjoy creating secure, user-friendly digital experiences that blend strong design with technical depth.   </p>
                                </div>
                            </LargeCard>
                        </div>
                    </div>
                </section> 
        </motion.div>

                <section id="education" className="bg-[#02010a] min-h-[90vh] w-[100%]"> 
                    <div id="education" className="flex flex-col justify-center items-center gap-8"> 
                            <div> 
                                <h1 className="font-Heading font-bold text-5xl text-center text-[#f3eff5]">Education </h1>
                            </div> 

                            <div className="text-center text-[#f3eff5] w-[50%] bg-[#046307] h-fit p-2 rounded-xl bg-linear-to-b from-[#192BC2] to-[#0e0e52]"> 
                                <h2 className="font-SubHeading font-semibold text-2xl">Queens College</h2> 
                                <p className="text-[#f3eff5] font-medium font-Text"> Relevant Coursework: Data Structures, Algorithm Analysis, Database Management, Computer Architecture, Data
                                                          Communication, Post Quantum Cryptography, Operating Systems Principles
                                </p>
                            </div>  
                                
                                <div className="flex justify-center"> 
                                    <div className="w-[50%] bg-[#046307] h-fit p-2 rounded-xl bg-linear-to-b from-[#192BC2] to-[#0e0e52]"> 
                                        <h2 className="font-SubHeading font-semibold text-2xl text-center text-[#f3eff5] ">Codepath CYB 102 </h2>
                                        <p className="text-[#f3eff5] font-medium font-Text">  
                                            A 10-week intermediate course focused on Blue Team defense operations, covering endpoint and network monitoring, incident response, and threat intelligence using industry tools like Wireshark, Wazuh, and Splunk.  
                                            Completed hands-on projects in log analysis, intrusion detection, SIEM operations, and threat hunting, finishing with a team capstone demonstrating security operations skills.
                                        </p>
                                    </div>
                                </div>
                             
                                <div className="flex justify-center"> 
                                    <div className="w-[50%] bg-[#046307] h-fit p-2 rounded-xl bg-linear-to-b from-[#192BC2] to-[#0e0e52] ">  
                                        <h2 className="font-SubHeading font-semibold text-2xl text-center text-[#f3eff5] ">Codepath CYB 101</h2>
                                        <p className="text-[#f3eff5] font-medium font-Text"> 
                                            A 10-week foundational course covering core cybersecurity concepts including Linux systems, password security, network exploitation, malware detection, and social engineering through hands-on labs with tools like Metasploit and CyberChef.  
                                            Completed weekly projects in cryptography CTFs, SSH encryption, password cracking, DNS exploits, and threat analysis, finishing with a team capstone presenting cybersecurity investment proposals.
                                        </p>
                                    </div>
                                </div>   
                            

                        </div>
                </section>

                <section id="skills" className="bg-[#02010a] pt-16 pb-16 overflow-hidden "> 
                    <div className="mb-8"> 
                        <h1 className="font-Heading font-bold text-5xl text-[#f3eff5] text-center"> Skills</h1>
                    </div> 
{/* 
                    <div id="skills-carousel" className="">  */}
                      <AutoCarousel/>
                    {/* </div> */}
                    

                </section>

                <section id="experience" className="bg-[#02010a] pt-16 pb-16 min-h-screen w-[100%]">
                    <div className="mb-8 " > 
                        <h1 className="font-Heading font-bold text-5xl text-[#f3eff5] text-center"> My Experience</h1>
                        <div id="exp-1-container" className=" "> 
                            <div> 
                                <h2 className="font-SubHeading text-[#f3eff5]">Technology Intern at theHipe </h2>
                            </div> 
                            <div> 
                                <p className="font-Text text-[#f3eff5]">July 2025 - December 2025</p>
                            </div> 
                            <div> 
                                <h2 className="font-SubHeading text-[#f3eff5]"> What I worked on:</h2>
                            </div> 
                            <div> 
                                <p> </p>
                            </div>
                            <div> 
                                <ul> 
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </section> 

                <section id="projects" className="bg-[#02010a] pt-16 pb-16 min-h-screen w-[100%]"> 
                    <div className="mb-8"> 
                        <h1 className="font-Heading font-bold text-5xl text-[#f3eff5] text-center"> My Projects</h1>    
                    </div> 

                    <div id="project-container"> 
                        <div id="project-1"> 

                        </div> 

                        <div id="project-2"> 

                        </div>

                        <div id="project-3">

                        </div>
                    </div>
                    

                </section> 

                <section id="contact"> 

                </section>

                <footer  className="bg-[#02010a]  pt-8 pb-16"> 
                    <h1 className="font-Header font-bold text-5xl text-[#f3eff5] text-center">Prince Barua</h1>
                </footer>



            
            
            
            
            
            </>

    )


}

export default LandingPage;