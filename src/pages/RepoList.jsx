import { useState, useEffect } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Pagination } from "react-bootstrap";
import AB from "../assets/AB.jpg";
import axios from "axios";

const RepoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([""]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = () => {
    const filteredRepos = repos.filter((repo) => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setRepos(filteredRepos);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/abiolayoung/repos?page=${page}&per_page=9`
      )
      .then((response) => {
        setRepos(response.data);
        setTotalPages(Math.ceil(response.headers["x-total-count"] / 9));
      });
  }, [page]);

  return (
    <div>
      <Header />

      <Container style={{ marginTop: "9%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="row"
        >
          <div
            className="col-md-6 mb-4 mb-md-0"
            style={{ marginTop: "70px", textAlign: "left" }}
          >
            <h1 className="primary-text-color secondary-font">
              As a motivated software engineer, I've dedicated myself to
              continuous learning and implementation to hone my skills in
              frontend development.
            </h1>
            <h6 className="secondary-text-color my-4">
              Find information about my recent project by searching my Github
              Repositories
            </h6>
            <motion.div whileTap={{ scale: 0.95 }}>
              <input
                type="search"
                placeholder="Search"
                className="form-control-lg col-md-5"
                onChange={handleSearch}
                style={{
                  background: "#fff",
                  color: "#000",
                  marginRight: "1rem",
                }}
              />

              <button className="primary-btn btn-lg" onClick={handleFilter}>
                Filter
              </button>
            </motion.div>
          </div>
          <div className="col-md-6 text-center" style={{ textAlign: "right" }}>
            <img
              src={AB}
              alt="Abiola Image"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
      </Container>

      <div
        className="container text-center"
        style={{ width: "100%", margin: "0 auto", marginTop: "4%" }}
      >
        <div className="row row-cols-1 row-cols-md-3">
          {repos.map((repo) => (
            <div className="col mb-4" key={repo.id}>
              <div
                className="card p-4"
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  transition: "0.3s",
                }}
              >
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
                <Link to={`/repos/${repo.name}`}>
                  <button className="btn btn-secondary">View Repo</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination>
          <Pagination.First onClick={() => setPage(1)} />
          <Pagination.Prev onClick={() => setPage(page - 1)} />
          <Pagination.Item active={page}>{page}</Pagination.Item>
          <Pagination.Next onClick={() => setPage(page + 1)} />
          <Pagination.Last onClick={() => setPage(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
};

export default RepoList;
