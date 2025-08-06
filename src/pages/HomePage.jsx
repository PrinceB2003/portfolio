import NavBar from "../components/NavBar"; 
import ProfileImg from "../assets/profile-500x500.png";

function HomePage(){ 
    return (  
    <> 
    <NavBar/>  
    <section id="main" className="bg-[#070707] min-h-screen w-full flex justify-center items-center gap-10 pt-3">  
        <div id="main-container flex">
        <h1 className="text-[#F9F4F4] text-5xl text-center">Hi, my name is Prince Barua</h1>  
        <div className="w-2xl text-wrap"> 
        <h2 className="text-[#F9F4F4] text-3xl text-center">I am an aspiring front-end developer with a strong interest in cybersecurity. </h2> 
       </div>  
       <div className="flex justify-center gap-3 p-2"> 
            <button className="bg-[#00A8E8] text-[#F9F4F4] rounded-full h-8 w-32">Contact Me</button> 
            <button className="bg-[#00A8E8] text-[#F9F4F4] rounded-full h-8 w-32">View Resume </button>
        </div> 
        </div>  
        <div> 
        <img src={ProfileImg} img className="rounded-full h-100 w-100 "></img> 
        </div>
    </section> 
    <section id="about" className="bg-[#070707] min-h-screen w-full flex flex-col justify-center items-center gap-3"> 
         
            <h2 className="text-5xl text-center text-[#F9F4F4]">About Me</h2> 
            <div className="text-xl w-3xl text-[#F9F4F4] text-center text-wrap">   
            <p>I'm a computer science student at Queens College with a strong passion for front-end development and cybersecurity.  
                As a technology intern at theHIPE, I designed and developed a community web page focused on cybersecurity using React and Tailwind CSS.  
                I’ve also built responsive web apps and gained hands-on experience through cybersecurity fellowships, working with tools like Splunk, Wireshark, and Kali Linux. 
                 I enjoy creating secure, user-friendly digital experiences that blend strong design with technical depth.  
                 </p>
            </div>

    </section>
    </> 

    )    
}

export default HomePage