import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import SectionTitle from "../../components/sectionTitle/sectionTitle";

const Projects = ({ theme, onToggle }) => {
  const [repos, setRepos] = useState([]);
  const username = "jayamiko"; // Ganti dengan username Anda

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();

        // Format data agar sesuai dengan struktur yang diinginkan
        const formattedData = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          createdAt: repo.created_at,
          url: repo.html_url,
          description: repo.description,
          isFork: repo.fork,
          languages: [], // Bahasa akan diambil dalam langkah terpisah
        }));

        setRepos(formattedData);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects-main">
      <Header theme={theme} />

      {/* Projects Section */}
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Project & Publication
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I develop innovative projects using the latest technologies and
                contribute to research through publications, focusing on
                impactful solutions and advancements in tech.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* Publications Section */}
      {publications.data.length > 0 && (
        <SectionTitle
          title={publicationsHeader.title}
          description={publicationsHeader.description}
          data={publications.data}
          theme={theme}
        />
      )}


      {/* Publications Cards */}
      <div className="repo-cards-div-main">
        {publications.data.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} theme={theme} />
        ))}
      </div>

      {/* Project Section */}
      {repos?.length > 0 && (
        <SectionTitle
          title={projectsHeader.title}
          description={projectsHeader.description}
          data={repos}
          theme={theme}
        />
      )}

      {/* GitHub Repo Cards */}
      <div className="repo-cards-div-main">
        {repos.map((repo) => (
          <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
        ))}
      </div>

      {/* More Projects Button */}
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />

      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Projects;
