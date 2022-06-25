import React, { Component } from 'react';
import ParticlesBg from "particles-bg";
import Sound from "react-sound";
import Mario from './Extra/MarioBros.mp3'
import musicButton from './Extra/musicButton.svg'
import './Extra/customCss.css'
const headerStyles = {
   musicbutton: {
      color: 'black'
   },
   musicImg: {
      paddingLeft: '10px'
   }
}
class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         playing: false,
         name: 'custombtn',
      }
      this.playSound = this.playSound.bind(this)
   }
   playSound() {


      this.setState({
         playing: !this.state.playing,
         name: 'custombtn custombtn--wut is-active'
      })


   }
   descriptionDisplay = (des) => {
      if (des) {
         return des.split('\n').map((item) => <div>{item}<br /></div>)
      }
   }
   render() {

      if (this.props.data) {
         var project = this.props.data.project;
         var github = this.props.data.github;
         var name = this.props.data.name;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">
            <Sound url={Mario}
               playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
               playFromPosition={1200}
            />
            {/*  <div className="psy"></div> */}
            <ParticlesBg type="cobweb" bg={true} color="#ff0000" />
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>

            <div className="row banner" >

               <div className="banner-text">
                  <h1 className="animate-charcter " style={{fontSize:"80px"}} >{name}</h1>
                  <h3>{this.descriptionDisplay(description)}</h3>



                  <button className={this.state.playing ? this.state.name : 'custombtn'} onClick={this.playSound} style={headerStyles.musicbutton}>
                    <b>{this.state.playing ? 'Stop Me !' : 'Play Me ! '} </b> 
                     <img className={this.state.playing ? 'image' : ''}  src={musicButton} alt='SafsafPortfolio' width='25px' height='25px' style={headerStyles.musicImg} />
                  </button>
                  <hr />
                  <ul className="social">
                     <a href={project} className="button btn project-btn"><i className="fa fa-linkedin"></i>Linkedin</a>
                     <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>


         </header>
      );
   }
}

export default Header;
