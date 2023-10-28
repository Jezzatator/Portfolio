export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jérémie</p>
          <h1 className="heor--section--title">
            <span className="hero--section-title--color">
              Mobile / Full Stack
            </span>
            {""}
            <br />
            Developpeur
          </h1>
          <p className="hero--section--description">
            <span className="hero--section--description--underline">
              Recherche d’alternance,
              <br />
              Rythme 4 jours / 1 jour à partir du 12/02/24
            </span>
            <br />
            En formation pour devenir Concepteur et Développeur d'Applications,
            je me spécialise en développement mobile natif pour iOS et en
            développement Fullstack.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
