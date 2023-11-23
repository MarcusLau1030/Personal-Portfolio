
import Card from '../../components/Card.jsx'
import FilterBox from '../../components/FilterBox.jsx';
import React, { useState } from 'react';


function Project() {

    const projectData = [
        {
          id: 1,
          title: "Marcplace",
          description: "An Ecommerce Website that features account creation, personalized shops, and shop/item searching",
          image_name: "shopping",
          link: "https://github.com/BabyDinos/Ecommerce-Website",
          category: "Elixir",
        },
        {
          id: 2,
          title: "Hit!Hit",
          description: "A desktop game where you control a box to acquire points while simultaneously dodging enemies",
          image_name: "hit!hit",
          link: "https://github.com/BabyDinos/Hit-Hit",
          category: "C++",
        },
        {
          id: 3,
          title: "Manga Recommender",
          description: "A manga recommender that suggests new manga based on your past manga preference, taking into account your ratings, genre, and plots",
          image_name: "crunchyroll",
          link: "https://github.com/BabyDinos/Manga-Recommender",
          category: "Python",
        },
        {
          id: 4,
          title: "Portfolio Optimization",
          description: "Created a model that optimizes a portfolio daily, chosen from a selection of over 500 stocks",
          image_name: "po",
          category: "Python",
        },
        {
          id: 5,
          title: "Algorithmic Trading Bot",
          description: "A bot created to submit daily orders based on historical stock data, news, and sentiment analysis",
          image_name: "tb",
          category: "Python",
        },
      ];

      
    const [buttonStates, setButtonStates] = useState({
        "All": true,
        "Python": false,
        "C++": false,
        "Elixir": false,
    })

    const handleButtonClick = (selectedButton) => {
        // Create a new object based on the current state
        const newButtonStates = { ...buttonStates };
      
        // Set the selected button to true and all others to false
        Object.keys(newButtonStates).forEach((button) => {
          newButtonStates[button] = button === selectedButton;
        });
      
        // Update the state with the new button states
        setButtonStates(newButtonStates);
    };

    const filteredProjects = projectData.filter((project) => {
        if (buttonStates["All"]) {
        return true; // Show all projects if "All" is true
        }
    
        return buttonStates[project.category];
    });

    return(
        <section id="Projects" className="w-screen h-screen bg-page_background ">
            <div className='flex min-h-fit w-full bg-page_background'>
                <div className='flex flex-col w-full h-full gap-5 mx-auto items-center'>
                    <div className='mt-[20%] lg:mt-[10%]'></div>
                    <FilterBox handleButtonClick={handleButtonClick} buttonStates={buttonStates}></FilterBox>
                    <div className='mt-[5%]'></div>
                    <div className="w-full flex flex-col gap-4 items-center">
                      {filteredProjects.map((project) => (
                      <Card
                          title={project.title}
                          description={project.description}
                          image_name={project.image_name}
                          link={project.link}
                      />
                      ))}
                    </div>

                    <div className='mb-[30%]'></div>
                </div>
            </div>
        </section>
    );

}


export default Project