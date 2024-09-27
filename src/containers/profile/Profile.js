import React, { useState, useEffect, lazy, Suspense } from "react"; // Added useState, useEffect, and Suspense
import { openSource } from "../../portfolio"; // Importing openSource from portfolio
import Contact from "../contact/Contact"; // Importing Contact component
import Loading from "../loading/Loading"; // Importing Loading component

const renderLoader = () => <Loading />; // Defining renderLoader function
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard") // Lazy loading GithubProfileCard component
);

export default function Profile() {
  const [prof, setrepo] = useState([]); // useState hook defined

  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return prof !== "Error" ? <Contact /> : null; // Ensuring no empty string is returned
  }
}
