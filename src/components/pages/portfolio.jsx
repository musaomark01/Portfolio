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
    return (
        <div>
            <h2>Portfolio</h2>
            <div style={{ 
                height: '600px',
                width: '600px',
                backgroundImage: `url('/Screenshot 2023-09-23 222526.png')`,
            }}
            // Add event listeners for mouse enter and leave
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            >
                <h3 onClick={itineraryPlannerDeploy} style={{opacity: 0, transition: 'opacity 3s'}}> itinerary Planner</h3>
                <img src="/github-mark.png" alt="link to GitHub" onClick={itineraryPlannerRepo} style={{opacity: 0, transition: 'opacity 3s'}} />
                <p style={{opacity: 0, transition: 'opacity 3s'}}>
                    test
                </p>
            </div>
            <div style={{ 
                height: '600px',
                width: '600px',
                backgroundImage: `url('/Screenshot 2023-11-20 213217.png')`,
            }}
            // Add event listeners for mouse enter and leave
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            >
                <h3 onClick={albumReviewSiteDeploy} style={{opacity: 0, transition: 'opacity 3s'}}> itinerary Planner</h3>
                <img src="/github-mark.png" alt="link to GitHub" onClick={albumReviewSiteRepo} style={{opacity: 0, transition: 'opacity 3s'}} />
                <p style={{opacity: 0, transition: 'opacity 3s'}}>
                    test
                </p>
            </div>
        </div>
    );
}