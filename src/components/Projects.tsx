const TraineraidLogo = require("../logos/traineraid_logo.png");

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div>
        <h3 className="row">
          <a
            href="https://apps.apple.com/us/app/traineraid/id1547198868"
            className="col"
          >
            Traineraid
          </a>
          <img alt="Traineraid Logo" src={TraineraidLogo} />
        </h3>
        <p>
          An app for keeping track of workouts and general goals, as well as
          guiding you through each exercise and set. It allows you to view your
          workouts in a calendar list view split between your past and upcoming
          workouts, undated and recurring groups.
        </p>
        <p>
          You can edit your workout as you go through it featuring a step view
          that allows you to focus on one exercise at a time. Finished workouts
          are saved with their duration. Workouts can be moved to different
          dates or given a recurring theme.
        </p>
        <p>
          A major component of this app is the ability to share your workouts
          with friends, or save what they’ve made to your list! All you have to
          do is create a chat by adding them by email or phone number, and click
          on the workout they send!
        </p>

        <p>
          This app was made to make lives easier in people’s attempts for a
          healthier life. The most important thing is to have a fun and easy
          time while using Traineraid!
        </p>
      </div>
    </div>
  );
};

export default Projects;
