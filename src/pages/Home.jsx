import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
function Home({projects}) {
  return (
    <>
      <Header />
      <Hero />
      <ProjectList projects={projects} />
      <Footer />
    </>
  );
}

export default Home;
