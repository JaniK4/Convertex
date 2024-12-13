
import PropTypes from 'prop-types';
const About = (props) => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // const accordionStyle = {
  //   backgroundColor: darkMode ? '#343a40' : '#f8f9fa',
  //   color: darkMode ? 'white' : 'black',
  //   borderRadius: '5px',
  // };
  let accordionStyle ={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#343a40' : '#f8f9fa',
    borderRadius: '8px',
  }

  return (
    <>
      <div className="container my-5 pb-5" style={accordionStyle}>
        <h3 className="mb-3 pt-3 text-center">About Us</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button font-weight-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={accordionStyle}
              >
                What is Covertex?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body p-5" style={accordionStyle}>
                Covertex is a cutting-edge platform offering innovative solutions for all your textile needs, 
                from sourcing to production. Whether you&apos;re a designer or a manufacturer, Covertex provides you 
                with the tools and resources to streamline your process
              </div>
            </div>
          </div>

          <div className="accordion-item font-weight-bold">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={accordionStyle}
              >
                 Our Services
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body p-5" style={accordionStyle}>
              We offer a range of services including bespoke textile designs, on-demand manufacturing, and 
              high-quality material sourcing. Whether you need small runs or large-scale production, Covertex 
              ensures top-notch service and quality.
              </div>
            </div>
          </div>
          <div className="accordion-item font-weight-bold">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={accordionStyle}
              >
                Why Choose Us?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body p-5" style={accordionStyle}>
              Covertex stands out for its commitment to quality, sustainability, and innovation. We use 
              state-of-the-art technology and eco-friendly materials to help you create high-quality products 
              while minimizing environmental impact.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-4 pb-4">
          <button
            className="btn btn-primary"
            onClick={toggleMode}
          >
            Toggle to {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div> */}
      </div>
    </>
  );
};

About.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default About;
