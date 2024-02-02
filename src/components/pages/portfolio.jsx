
export default function Portfolio() {
    // set up an array of objects to hold the project details
    const projects = [
        {
            title: 'Itinerary Planner',
            description: ' Crafted using HTML, CSS, JavaScript, Third Party API, PureCSS, Dayjs, and jquery to create a web application that allows users to plan their trips',
            repo: 'https://github.com/JohnPaulZigterman/itinerary-planner.git',
            gitHubLogo: '/github-mark.png',
            deploy: 'https://johnpaulzigterman.github.io/itinerary-planner/',
            backgroundImage: '/projectOneImage.png'
        },
        {
            title: 'Album Review Site',
            description: 'Using MVC Structure, Node.js, Express, MySQL, Sequelize, Handlebars, and Bootstrap to create a web application that allows users to review songs and albums',
            repo: 'https://github.com/JohnPaulZigterman/review-site.git',
            gitHubLogo: '/github-mark.png',
            deploy: 'https://album-review-site-715f772b98d0.herokuapp.com/',
            backgroundImage: '/projectTwoImage.png'
        },
        {
            title: 'ITINERATE',
            description: 'A full-stack application built on the MERN stack, using MongoDB, Express, React, node.js, graphql, apollo, and jwt to create a web application that allows users to plan their trips, and share their itineraries with others.',
            repo: 'https://github.com/JohnPaulZigterman/itinerary-site.git',
            gitHubLogo: '/github-mark.png',
            deploy: 'https://itinerate.onrender.com',
            backgroundImage: '/projectThreeImage.png '
        }
    ];

    // Function to handle hover event
    const handleHover = (e) => {
        // Get all children of the current target
        const children = e.currentTarget.children;
        // If mouse enters, set opacity to 1, else set to 0 for all children
        for (let i = 0; i < children.length; i++) {
            children[i].style.opacity = e.type === 'mouseenter' ? 1 : 0;
        }
    }

    const backgroundImageStyle = { 
        display: 'flex', // Make the div a flex container
        flexDirection: 'column', // Arrange children in a column
        flexWrap: 'wrap', // Allow children to wrap
        justifyContent: 'space-between', // Arrange children with space between them
        alignItems: 'center', // Center children horizontally
        warp: 'wrap', // Allow children to wrap
        width: '40vw', // Make the width 40% of the viewport width
        height: '50vh', // Make the height 50% of the viewport height
        backgroundSize: 'cover', // Cover the entire div with the background image
        margin: '10px', // Add a margin of 10px
        border: '3px solid black', // Add a black border
        borderRadius: '10px', // Make the corners round
        boxShadow: '5px 5px 10px', // Add a shadow
        minWidth: '300px', // Minimum width
        maxWidth: '900px', // Maximum width
    
    };
    const titleLogoStyle = {
        display: 'flex', // Make the div a flex container
        flexWrap: 'wrap', // Allow children to wrap
        flexDirection: 'row', // Arrange children in a row
        opacity: 0, // Set the opacity to 0
        transition: 'opacity 3s', // Add a transition effect to the opacity property that lasts 3 seconds
        textAlign: 'center', // Center the text
        width: '100%', // Make the width 100%
        maxHeight: '20%', // Make the maximum height 20%
        borderTopLeftRadius: '5px', // Make the top left corner round
        borderTopRightRadius: '5px', // Make the top right corner round
    };
    const gitHubLogoStyle = { 
            maxWidth: '20%', // Make the maximum width 20%
            maxHeight: '80%', // Make the maximum height 80%
            margin: '1%', // Add a margin of 1%
            objectFit: 'cover', // Cover the entire div with the image
            cursor: 'pointer', // Change the cursor to a pointer
            backgroundColor: 'white', // Make the background white
            borderRadius: '10px', // Make the top left corner round     
    };
    const projectTitleStyle = {
        cursor: 'pointer', // Change the cursor to a pointer
        maxWidth: '74%', // Make the maximum width 74%
        marginTop: '2%', // Add a margin of 2%
        width: '100%', // Make the width 100%
    };
    const projectDescriptionStyle = {
            opacity: 0, // Set the opacity to 0
            transition: 'opacity 3s', // Add a transition effect to the opacity property that lasts 3 seconds
            margin: 0, // set the margin to 0
            textAlign: 'center', // Center the text
            width: '100%', // Make the width 100%
            borderBottom: '3px solid black', // Add a black border
    };


    return (
        <div>
            <h2 style={{ 
                width: '100%', // Make the width 100%
                textAlign: 'center', // Center the text
                marginBottom: '20px' // Add a margin of 20 pixels
            }}>Portfolio</h2>
            <p
            style={
                {
                    width: '100%', // Make the width 100%
                    textAlign: 'center', // Center the text
                    marginBottom: '20px' // Add a margin of 20 pixels
                }
            }>
                {/*  Left a note for the user to hover over the images to see more information */}
                <strong> Hover over any of the images to see more information about the project. Click on the GitHub logo to see the repository, and click on the project title to see the deployed application.
                </strong></p>

            <div style={{ 
            display: 'flex', // Make the div a flex container
            flexDirection: 'row', // Arrange children in a row
            flexWrap: 'wrap', // Allow children to wrap
            warp: 'wrap', // Allow children to wrap
            justifyContent: 'space-evenly', // Arrange children with space between them
            alignItems: 'center', // Center children horizontally
            }}>
                {/*  Map over the projects array and create a div for each project */}
                {projects.map((project, index) => (
                    <div key={index} style={{ ...backgroundImageStyle,
                        backgroundImage: `url('${project.backgroundImage}')`,
                    }}
                    // Add event listeners for mouse enter and leave
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    >
                        {/*  Create a div to hold the project details */}
                        <div className="projectTitle projectText" style={titleLogoStyle}>
                            <img src={project.gitHubLogo} alt="link to GitHub" onClick={() => window.open(project.repo)} 
                            style={gitHubLogoStyle} />

                            <h3 onClick={() => window.open(project.deploy)} 
                            style={projectTitleStyle}>  
                            {project.title}</h3>
                        </div>

                        <p
                        style={projectDescriptionStyle} className="projectText">
                            <strong>{project.description}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}