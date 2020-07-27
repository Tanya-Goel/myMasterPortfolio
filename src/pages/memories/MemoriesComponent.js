import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { memories } from '../../portfolio';
import Button from '../../components/button/Button';
import React, { Component} from 'react';
import {Fade} from 'react-reveal';
import './MemoriesComponent.css';

const MemoriesData=memories.memoriesSection;

class Memories extends Component {
   
    render() {
        const theme = this.props.theme;
        return( 
            <div>
				<Header theme={theme} />
                <Fade bottom duration={2000} distance="20px">
						<div className="heading-div">
						<h1 className="heading-text" style={{ color: theme.text }}>Some Precious Moments</h1>
						</div>
						{/* <div className="heading-text-div">
							
								<h3 className="heading-sub-text" style={{ color: theme.text }}>
									Basic Qualification and Certifcations
								</h3>
								</div> */}
							    
								
								{/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
							
							
							{/* <div className="heading-img-div">
                                
								<img
									src={require("../../assests/images/Tanya Goel_CSE.jpeg")}
									alt=""
								/>
								</div> */}
								<div className="img-div">
								<img
									src={require("../../assests/images/n.jpg")}
									alt=""
								/>
						
									<img
									src={require("../../assests/images/m.jpg")}
									alt=""
								/>
								{/* <img
									src={require("../../assests/images/0.jpg")}
									alt=""
								/> */}
							</div>
							<div className="img-div">
								<img
									src={require("../../assests/images/bgl.jpg")}
									alt=""
								/>
						
									<img
									src={require("../../assests/images/mee.jpg")}
									alt=""
								/>
								{/* <img
									src={require("../../assests/images/0.jpg")}
									alt=""
								/> */}
							</div>
						
							<div className="heading-img-div">
							<img
									src={require("../../assests/images/1.jpeg")}
									alt=""
								/>
							</div> 
							<div className="heading-img-div">
							<img
									src={require("../../assests/images/0.jpg")}
									alt=""
								/>
							</div> 
							<div className="heading-img-div">
							<img
									src={require("../../assests/images/wow.jpg")}
									alt=""
								/>
							</div> 
							<div className="img-div">
							<img
									src={require("../../assests/images/a.jpg")}
									alt=""
								/>
								<img
									src={require("../../assests/images/x.jpg")}
									alt=""
								/>
							</div> 
							<div className="img-div">
							<img
									src={require("../../assests/images/2.JPG")}
									alt=""
								/>
								<img
									src={require("../../assests/images/Workshop.jpeg")}
									alt=""
								/>
							</div> 
							<div className="heading-img-div">
							<img
									src={require("../../assests/images/h.jpg")}
									alt=""
								/>
							</div>
					
							
							
						
					</Fade>
					<Footer theme={this.props.theme} onToggle={this.props.onToggle} />
            </div>
        );
    }
}

export default Memories;