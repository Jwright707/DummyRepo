import React, { Component } from "react";
import "../templates/projects.css";
import tripQuest from "../pictures/tripQuestPic.PNG";
import personalW from "../pictures/personalW.PNG";

class Projects extends Component {
  render() {
    return (
      <div className="projectsPage">
        <h2 className="titles">Sac-Hack's Project</h2>
        <br />
        <p>
          <b>Developer Role: </b>Created React components and design of web
          application
          <br />
          <b>Project Description: </b> A web application revolved around getting
          people out and adventuring with quests. These quests are either
          created by a user or already existing.
        </p>
        <a
          href="https://polar-mesa-35819.herokuapp.com/"
          target="_blank"
          className="tripQuestHover"
        >
          <img src={tripQuest} className="tripQuest" />
        </a>
        <hr />
        <h2 className="titles">Personal Website</h2>
        <br />
        <p>
          <b>Developer Role: </b>Created and designed entire web application
          <br />
          <b>Project Description: </b>A web application designed for the
          intention of allowing users to create a quest and meetup or go on
          existing quests with others
        </p>
        <a
          href="https://jdwportfolio.herokuapp.com/"
          target="_blank"
          className="tripQuestHover"
        >
          <img src={personalW} className="tripQuest" />
        </a>
      </div>
    );
  }
}

export default Projects;
