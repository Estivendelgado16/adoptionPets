
import { useState, useEffect } from "react";

import PageShell from "../../components/common/PageShell";

import HeroVideo from "../../components/HeroVideo/HeroVideo";
import SuccessGallery from "../../components/SuccessGallery/SuccessGallery";

import "./Home.css";

function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((s) => ({ ...s, accent: s.accentColor }));
        setStories(mapped);
      })
      .catch(console.error);
  }, []);

  return (
    <PageShell className="home">
      <HeroVideo />
      <SuccessGallery stories={stories} />
    </PageShell>
  );
}

export default Home;
