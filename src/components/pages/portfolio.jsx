export default function Portfolio() {
    const itineraryPlannerRepo = () => {
        window.open("https://github.com/JohnPaulZigterman/itinerary-planner.git");
    }
    const itineraryPlannerDeploy = () => {
        window.open("https://johnpaulzigterman.github.io/itinerary-planner/");
    }
    const  albumReviewSiteRepo = () => {
        window.open("https://github.com/JohnPaulZigterman/review-site.git");
    }
    const  albumReviewSiteDeploy = () => {
        window.open("https://album-review-site-715f772b98d0.herokuapp.com/");
    }
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
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'start',
        alignItems: 'center',
        warp: 'wrap',
        width: '40vw',
        height: '60vh',
        backgroundSize: 'cover',
        margin: 0,
        border: '3px solid black', // Add a black border
        borderRadius: '10px', // Make the corners round
        boxShadow: '5px 5px 10px', // Add a shadow
        minWidth: '300px', // Minimum width
        maxWidth: '900px', // Maximum width
    
    };
    const titleLogoStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        opacity: 0, 
        transition: 'opacity 3s',
        backgroundColor: 'darkgrey',
        margin: 0,
        textAlign: 'center',
        width: '100%',
        borderTopLeftRadius: '10px', // Make the top left corner round
        borderTopRightRadius: '10px', // Make the top right corner round
    };
    const gitHubLogoStyle = { 
            maxWidth: '20%',
            height: 'auto',
            objectFit: 'cover', 
            cursor: 'pointer',
            backgroundColor: 'white',
            margin: 0,
            textAlign: 'center',
            
    };
    const projectTitleStyle = {
        cursor: 'pointer',
        backgroundColor: 'grey',
        width: '100%',
        margin: 0,
        alignText: 'center',
    };
    const projectDescriptionStyle = {
            opacity: 0,    
            transition: 'opacity 3s',
            backgroundColor: 'lightgrey',
            margin: 0,
            textAlign: 'center',
            width: '100%',
            borderBottom: '3px solid black',
    };

    return (
        <div >

            <h2 style={{ 
                width: '100%',
                textAlign: 'center',
                marginBottom: '20px'
            }}>Portfolio</h2>

            <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            warp: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center'
            }}>

                <div style={{ ...backgroundImageStyle,
                    backgroundImage: `url('/Screenshot 2023-09-23 222526.png')`,
                }}
                // Add event listeners for mouse enter and leave
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                >
                    <div style={titleLogoStyle}>
                        <img src="/github-mark.png" alt="link to GitHub" onClick={itineraryPlannerRepo} 
                        style={gitHubLogoStyle} />

                        <h3 onClick={itineraryPlannerDeploy} 
                        style={projectTitleStyle}>  
                        Itinerary Planner</h3>
                    </div>

                    <p 
                    style={projectDescriptionStyle}>
                        HTML, CSS, JavaScript, API, PureCSS, Dayjs, and jquery
                    </p>

                </div>

                <div style={{ ...backgroundImageStyle,
                    backgroundImage: `url('/Screenshot 2023-11-20 213217.png')`,
                }}
                // Add event listeners for mouse enter and leave
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                >
                    <div style={titleLogoStyle}>
                        <img src="/github-mark.png" alt="link to GitHub" onClick={albumReviewSiteRepo} 
                        style={gitHubLogoStyle} />
                        <h3 onClick={albumReviewSiteDeploy} 
                        style={projectTitleStyle}> 
                        Album Review Site</h3>
                    </div>  

                    <p style={projectDescriptionStyle}>
                        MVC, nodejs, express, handlebars, MySQL, and sequelize
                    </p>
                </div>
            </div>
        </div>
    );
}