import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="resume">

        <div className="row ">
        <div className="three columns">
            <h1><span>{"<Certifications />"}</span></h1>
         </div>
          <div className="twelve columns collapsed" style={{textAlign:'center'}}>
          
            <h6>Check Out Some of My Certifications.</h6>
            
            <div className="six columns main-col zoom">
              <img  src='/images/bootstrapCert.PNG' alt='safsafBootstrap' style={{ borderRadius: '2%' }} />
            </div>
            <div className="six columns main-col zoom">
              <img  src='/images/reactcert.PNG' alt='safsafReact' style={{ borderRadius: '2%' }} />
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
