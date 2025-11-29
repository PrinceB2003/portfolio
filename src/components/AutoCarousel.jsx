import { Carousel } from "flowbite-react";

function AutoCarousel () { 
    
    return ( 
            <div className="relative"> 
            <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden" > 
                <Carousel indicators={false} slideInterval={1000}>
        
                        <img className="h-[15rem] w-[15rem] relative" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"  key={0} />

                        <img className="h-[15rem] w-[15rem] relative" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" key={1}/>
                        
                        <img className="h-[15rem] w-[15rem] relative" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" key={2} />
                        
                        <img className="h-[15rem] w-[15rem] relative" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" key={3}/>  

                        <img className="h-[15rem] w-[15rem] relative" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" key={4}/> 
    
                        <img className="h-[15rem] w-[15rem] relative" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" key={5}/>
   
                </Carousel>
            </div>


            </div>
    ); 
}; 

export default AutoCarousel;