import React from "react";
// import ModalImage from "react-modal-image";
import SimpleImageEnlarge from '../../components/utilities/simpleImageEnlarge'
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          {dataportfolio.map((data, i) => (
            <Row key={i} className="project-row mb-5">
              <Col sm="12" md="4" className="project-image">
                {data.img ? <SimpleImageEnlarge src={data.img} alt={data.title} /> : <video controls src={data.video} autoPlay style={{ width: '100%' }}>Your browser does not support the video tag.</video>}
                <Button className="site-link" variant="primary" href={data.link} target="_blank" rel="noopener noreferrer">{data.button}</Button>
              </Col>
              <Col sm="12" md="8" className="project-description">
                <h1>{data.title}</h1>
                <h2>Overview</h2>
                <p>{data.overview}</p>
                <h2>Learning Curve & Skills Acquired</h2>
                <ul>
                  {data.learnings.map((bullet, i)=>(
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <h2>Technologies Used</h2>
                <ul>
                  {data.technologies.map((bullet, i)=>(
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {
                  data.reference && (
                  <>
                    <h2>References</h2>
                    <p>{data.reference()}</p>
                  </>)
                }
              </Col>
            </Row>
          ))}
        </Container>
      {/* </Container> */}
    </HelmetProvider>
  );
};
