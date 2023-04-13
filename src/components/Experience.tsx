const JobDescription = ({ title, location, company, descriptions }) => {
  return (
    <div className="job-description">
      <h3>{title}</h3>
      <h4>
        {company}, {location}
      </h4>
      {descriptions.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      <JobDescription
        company="ProposalTech"
        title="Frontend Software Engineer"
        descriptions={[
          "Working on creating an entirely new application involving hundreds of pages and complex data management to replace the current outdated software",
          "Introducing modern frameworks and practices into the development, including React and Apollo/GraphQL",
          "Collaborating with management and other ends of the development team to make decisive choices on design and implementation",
        ]}
        location="remote"
      />
      <JobDescription
        company="Traject"
        title="Software Engineer Intern"
        descriptions={[
          "Worked with a mentor to create a personal project using Reactjs and styled-components",
          "Scheduled weekly meetings for progress tracking and sat in on team and product sprints to observe workflow in a company environment",
          "Kept track of milestones and presented using a MVP to demonstrate progress",
        ]}
        location="remote"
      />
      <JobDescription
        company="Sanitarium Creative Agency"
        title="Software Engineer"
        descriptions={[
          "Developed React Components based on (Figma) design specifications utilizing Typescript and GatsbyJS",
          "Developed Content Management Systems (CMS) for clients including a site preview and customized inputs using Netlify CMS",
          "Participated in weekly sprints to stay up to date with the latest expectations of the clients",
        ]}
        location="remote"
      />
    </div>
  );
};

export default Experience;
