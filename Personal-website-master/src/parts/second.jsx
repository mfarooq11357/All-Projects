import { useState } from "react";
import { ChevronLeft, ChevronRight, Building2, GraduationCap, Users } from "lucide-react"; // Assuming you installed lucide-react icons
// import "./Component.css"; 

const cards = [
  {
    link:"https://cyberspara.com/wp-content/uploads/S3-Inclusive-768x576.jpg",
    title: "Inclusive Path to Cyberawareness",
    description: "With practical, hands-on training, anyone can learn the fundamentals of cybersecurity and protect themselves and their assets from cyber threats.",
  },
  {
    link:"https://cyberspara.com/wp-content/uploads/S1-Security-Awareness-768x576.jpg",
    title: "Comprehensive Coverage",
    description: "Our curriculum covers all aspects of cybersecurity, from basic online safety to advanced threat detection techniques.",
  },
  {
    link:"https://cyberspara.com/wp-content/uploads/S2-immersive-768x576.jpg",
    title: "Interactive Learning",
    description: "Engage with our platform through simulations and real-world scenarios to better understand and combat cyber threats.",
  },
];

function Component() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h3 className="text-sm font-medium tracking-wide uppercase text-teal-500">Our Approach</h3>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0a2540]">
                To Empower Individuals
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 text-sm md:text-base">
                With a series of engaging games, we'll help your team adopt the mindset of a hacker and understand the risks of online communication. By raising awareness of cybercrime, your team will be better equipped to spot and prevent potential threats. Plus, our fun and interactive approach ensures that your team will stay engaged and actually enjoy the learning process.
              </p>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <div className="relative rounded-lg px-16">
                <div className="flex justify-center items-center mb-6">
                <img src={cards[currentCard].link} alt="" height={500}/>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-2">{cards[currentCard].title}</h2>
                  <p className="text-gray-600 text-sm md:text-base">{cards[currentCard].description}</p>
                </div>
                <button 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-teal-500 border-teal-500 rounded-full p-2"
                  onClick={prevCard}
                >
                  <ChevronLeft className="h-12 w-12" />
                </button>
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-teal-500 border-teal-500 rounded-full p-2"
                  onClick={nextCard}
                >
                  <ChevronRight className="h-12 w-12" />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {cards.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${index === currentCard ? 'bg-teal-500' : 'bg-gray-300'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-[#00093d] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-start items-start space-y-4 ">
              <h3 className="text-sm font-medium tracking-wide uppercase text-teal-500">Who we help</h3>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Created For All
              </h2>
              <p className=" max-w-[700px] text-gray-300 text-sm md:text-base">
                Over 90% of individuals in the US (and 60%+ of the global population) have access to & use the internet at home, school or work. With those percentages, that rounds out to around 300 million targets for hackers in the United States alone!
              </p>
              <p className=" max-w-[700px] text-gray-300 text-sm md:text-base">
                Even more surprising, in the US in 2019, 95% of children between the ages of 3 and 18 had access to the Internet from their homes or devices.
              </p>
              <button className="green-bg-color text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">DigitalPASS Solutions</button>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Building2 className="w-12 h-12 mb-4 text-teal-500" />
                <h3 className="text-xl font-bold">For Business</h3>
                <p className="text-sm text-gray-300 mt-2">
                  DigitalPASS is a valuable training tool for industries that need to educate their employees about the risks posed by hackers. It is beneficial for any industry that requires such a training tool.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="w-12 h-12 mb-4 text-teal-500" />
                <h3 className="text-xl font-bold">For Students</h3>
                <p className="text-sm text-gray-300 mt-2">
                  K-12 students are at risk of being targeted by cyber-attacks. Equipping students with knowledge of cybersecurity benefits our educational institutions and prepares our students for the future job market.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 mb-4 text-teal-500" />
                <h3 className="text-xl font-bold">For Individuals</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Every day, the internet is being used by over 60% of the global population, with 93% of Americans being part of this group. As a result, a great majority of us are vulnerable to cyberattacks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Component;
