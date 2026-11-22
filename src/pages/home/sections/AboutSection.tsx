import aboutImage from '../../../assets/images/about-conference.png'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-title"
    >
      <div className="page-container about-layout">
        <div className="about-copy">
          <h2 id="about-title">About the Conference</h2>

          <p>
            The First Damanhour International Conference on Intelligent Computing
            and Digital Innovation brings together researchers, postgraduate
            students, industry, specialists, and public-sector representatives to
            present original research and discuss practical applications of
            intelligent computing and digital innovation. The conference explores
            emerging technologies and their impact on healthcare, education, the
            environment, public services, and industry, with particular attention
            to secure, accessible, and sustainable digital systems.
          </p>

          <div className="about-actions">
            <button type="button" className="about-discover" disabled>
              Discover the conference
            </button>

            <button type="button" className="about-committee" disabled>
              View Scientific Committee
              <span className="about-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>

        <img
          className="about-image"
          src={aboutImage}
          alt="Researchers working with digital displays in a computing lab"
          width={519}
          height={495}
        />
      </div>
    </section>
  )
}