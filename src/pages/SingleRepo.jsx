import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleRepo = () => {
  const [repo, setRepo] = useState(null);
  const { repoName } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const repoUrl = "https://api.github.com/repos/abiolayoung";
        const repoEndPoint = `${repoUrl}/${repoName}`;

        const response = await fetch(repoEndPoint);
        const data = await response.json();
        console.log(data);
        setRepo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card mx-auto col-md-6 my-5 p-3">
  <h2 className="text-center mb-4">{repo.name}</h2>
  <p> <b>Description:</b> {repo.description}</p>
  <p> <b>Language:</b> {repo.language}</p>
  <p> <b>Stars:</b> {repo.stargazers_count}</p>
  <p> <b>Forks:</b> {repo.forks_count}</p>
  <p> <b>Open Issues:</b> {repo.open_issues_count}</p>
  <p> <b>Watchers:</b> {repo.watchers_count}</p>
  <p> <b>Created at:</b> {repo.created_at}</p>
  <p> <b>Updated at:</b> {repo.updated_at}</p>
  <p> <b>Pushed at:</b> {repo.pushed_at}</p>
  <div className="text-center">
    <Link to="/">
      <button className="btn btn-secondary m-2">Go back</button>
    </Link>
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-secondary m-2">View on GitHub</button>
    </a>
    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-secondary m-2">View Live</button>
    </a>
  </div>
</div>

    </>
  );
};

export default SingleRepo;
