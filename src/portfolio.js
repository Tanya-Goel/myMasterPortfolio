/* Change this file to get your personal Porfolio */
 
// Website related settings
const settings = {
	isSplash: false,  // Change this to false if you don't want Splash screen.
   };
	
	
   //Home Page
   const greeting = {
	  title: "Tanya Goel",
	  logo_name: "Tanya Goel",
	  nickname: "Software Engineer",
	  subTitle:
		  "A passionate individual who always seeks to work in a challenging environment for the sake of applying knowledge gained during engineering towards the success of an organisation.",
	  resumeLink:
		  "https://drive.google.com/file/d/15TgrlXQkuyWroUz8KxqdebwS2o78Rut9/view?usp=drivesdk",
	  portfolio_repository: "https://github.com/Tanya-Goel/myPortfolio",
   };
	
   const socialMediaLinks = {
	  /* Your Social Media Link */
	  github: "https://github.com/Tanya-Goel",
	  linkedin: "https://www.linkedin.com/in/tanya-goel-3a9b61167/",
	  gmail: "goeltanya01@gmail.com",
	  // gitlab: "https://gitlab.com/ashutoshhathidara98",
	  facebook: "https://www.facebook.com/tanya.goel.771282",
	  twitter: "https://twitter.com/TanyaGo24319454",
	  instagram: "https://www.instagram.com/tanya_goel_1/"
   };
	
   const skills = {
	data: [
	  // {
	  //   title: "Data Science & AI",
	  //   fileName: "DataScienceImg",
	  //   skills: [
	  //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
	  //     "⚡ Experience of working with Computer Vision and NLP projects",
	  //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
	  //   ],
	  //   softwareSkills: [
	  //     {
	  //       skillName: "Tensorflow",
	  //       fontAwesomeClassname: "logos-tensorflow",
	  //       style: {
	  //         backgroundColor: "transparent"
	  //       }
	  //     },
	  //     {
	  //       skillName: "Keras",
	  //       fontAwesomeClassname: "simple-icons:keras",
	  //       style: {
	  //         backgroundColor: "white",
	  //         color: "#D00000"
	  //       }
	  //     },
	  //     {
	  //       skillName: "PyTorch",
	  //       fontAwesomeClassname: "logos-pytorch",
	  //       style: {
	  //         backgroundColor: "transparent"
	  //       }
	  //     },
	  //     {
	  //       skillName: "Python",
	  //       fontAwesomeClassname: "ion-logo-python",
	  //       style: {
	  //         backgroundColor: "transparent",
	  //         color: "#3776AB"
	  //       }
	  //     }
	  //   ]
	  // },
	  {
		title: "Full Stack Development",
		fileName: "FullStackImg",
		skills: [
		  "⚡ Building resposive website front end using React-Redux",
		  "⚡ Developing mobile applications using  React Native and solo android apps",
		  "⚡ Creating application backend in Spring MVC,Spring Boot"
		],
		softwareSkills: [
		  {
			skillName: "HTML5",
			fontAwesomeClassname: "simple-icons:html5",
			style: {
			  color: "#E34F26"
			}
		  },
		  {
			skillName: "CSS3",
			fontAwesomeClassname: "fa-css3",
			style: {
			  color: "#1572B6"
			}
		  },
		  // {
		  //   skillName: "Java",
		  //   fontAwesomeClassname: "simple-icons:sass",
		  //   style: {
		  //     color: "#CC6699"
		  //   }
		  // },
		  {
			skillName: "JavaScript",
			fontAwesomeClassname: "simple-icons:javascript",
			style: {
			  backgroundColor: "#000000",
			  color: "#F7DF1E"
			}
		  },
		  {
			skillName: "ReactJS",
			fontAwesomeClassname: "simple-icons:react",
			style: {
			  color: "#61DAFB"
			}
		  },
		  {
			skillName: "NodeJS",
			fontAwesomeClassname: "simple-icons:node-dot-js",
			style: {
			  color: "#339933"
			}
		  },
		  // {
		  //   skillName: "NPM",
		  //   fontAwesomeClassname: "simple-icons:npm",
		  //   style: {
		  //     color: "#CB3837"
		  //   }
		  // },
		  // {
		  //   skillName: "Yarn",
		  //   fontAwesomeClassname: "simple-icons:yarn",
		  //   style: {
		  //     color: "#2C8EBB"
		  //   }
		  // },
		  // {
		  //   skillName: "Gatsby",
		  //   fontAwesomeClassname: "simple-icons:gatsby",
		  //   style: {
		  //     color: "#663399"
		  //   }
		  // },
		  // {
		  //   skillName: "Flutter",
		  //   fontAwesomeClassname: "simple-icons:flutter",
		  //   style: {
		  //     color: "#02569B"
		  //   }
		  // }
		]
	  },
	  // {
	  //   title: "Cloud Infra-Architecture",
	  //   fileName: "CloudInfraImg",
	  //   skills: [
	  //     "⚡ Experience working on multiple cloud platforms",
	  //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
	  //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
	  //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
	  //   ],
	  //   softwareSkills: [
	  //     {
	  //       skillName: "GCP",
	  //       fontAwesomeClassname: "simple-icons:googlecloud",
	  //       style: {
	  //         color: "#4285F4"
	  //       }
	  //     },
	  //     {
	  //       skillName: "AWS",
	  //       fontAwesomeClassname: "simple-icons:amazonaws",
	  //       style: {
	  //         color: "#FF9900"
	  //       }
	  //     },
	  //     {
	  //       skillName: "Azure",
	  //       fontAwesomeClassname: "simple-icons:microsoftazure",
	  //       style: {
	  //         color: "#0089D6"
	  //       }
	  //     },
	  //     {
	  //       skillName: "Firebase",
	  //       fontAwesomeClassname: "simple-icons:firebase",
	  //       style: {
	  //         color: "#FFCA28"
	  //       }
	  //     },
	  //     {
	  //       skillName: "PostgreSQL",
	  //       fontAwesomeClassname: "simple-icons:postgresql",
	  //       style: {
	  //         color: "#336791"
	  //       }
	  //     },
	  //     {
	  //       skillName: "MongoDB",
	  //       fontAwesomeClassname: "simple-icons:mongodb",
	  //       style: {
	  //         color: "#47A248"
	  //       }
	  //     },
		  // {
		  //   skillName: "Docker",
		  //   fontAwesomeClassname: "simple-icons:docker",
		  //   style: {
		  //     color: "#1488C6"
		  //   }
		  // },
		  // {
		  //   skillName: "Kubernetes",
		  //   fontAwesomeClassname: "simple-icons:kubernetes",
		  //   style: {
		  //     color: "#326CE5"
		  //   }
		  // }
	  //   ]
	  // },
	  {
		title: "UI/UX Design",
		fileName: "DesignImg",
		skills: [
		  "⚡ Designing highly attractive user interface for mobile and web applications",
		  "⚡ Customizing logo designs",
		  "⚡ Creating the flow of application functionalities to optimize user experience"
		],
		softwareSkills: [
		  // {
		  //   skillName: "Adobe XD",
		  //   fontAwesomeClassname: "simple-icons:adobexd",
		  //   style: {
		  //     color: "#FF2BC2"
		  //   }
		  // },
		  // {
		  //   skillName: "Figma",
		  //   fontAwesomeClassname: "simple-icons:figma",
		  //   style: {
		  //     color: "#F24E1E"
		  //   }
		  // },
		  // {
		  //   skillName: "Adobe Illustrator",
		  //   fontAwesomeClassname: "simple-icons:adobeillustrator",
		  //   style: {
		  //     color: "#FF7C00"
		  //   }
		  // },
		  // {
		  //   skillName: "Inkscape",
		  //   fontAwesomeClassname: "simple-icons:inkscape",
		  //   style: {
		  //     color: "#000000"
		  //   }
		  // }
		]
	  }
	]
   };
	
	
   // Education Page
   const competitiveSites = {
	competitiveSites: [
	  {
		siteName: "HackerRank",
		iconifyClassname: "simple-icons:hackerrank",
		style: {
		  color: "#2EC866"
		},
	  //   profileLink: "https://www.hackerrank.com/layman_brother"
	  },
	  {
		siteName: "Codechef",
		iconifyClassname: "simple-icons:codechef",
		style: {
		  color: "#5B4638"
		},
	  //   profileLink: "https://www.codechef.com/users/ashutosh_1919"
	  },
	  // {
	  //   siteName: "Codeforces",
	  //   iconifyClassname: "simple-icons:codeforces",
	  //   style: {
	  //     color: "#1F8ACB"
	  //   },
	  //   profileLink: "http://codeforces.com/profile/layman_brother"
	  // },
	  {
		siteName: "Hackerearth",
		iconifyClassname: "simple-icons:hackerearth",
		style: {
		  color: "#323754"
		},
		profileLink: "https://www.hackerearth.com/@ashutosh391"
	  },
	  // {
	  //   siteName: "Kaggle",
	  //   iconifyClassname: "simple-icons:kaggle",
	  //   style: {
	  //     color: "#20BEFF"
	  //   },
	  //   profileLink: "https://www.kaggle.com/laymanbrother"
	  // }
	]
   }
	
   const memories = {
	memoriesSection:[
		{
			title:"hi",
		}
	]
   };
	
	
   const degrees = {
	degrees : [
	  {
		title: "Dr. APJ Abdul Kalam Technical University,Lucknow",
		subtitle: "B.Tech. in Computer Engineering",
	  //   logo_path: "iiitk_logo.png",
	  //   alt_name: "IIITDM Kurnool",
		duration: "2016 - 2020",
		descriptions: [
		  "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
		  "⚡ Apart from this, I have done courses on Full Stack Development.",
		  "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics."
		],
	  //   website_link: "http://iiitk.ac.in"
	  }
	]
   }
	
   const certifications = {
	  certifications: [
		  {
			  title: "The React Web Developer Course ",
			  // subtitle: "- Andrew Ng",
			  logo_path: "React-icon.svg",
			  // certificate_link:
			  //  "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
			  // alt_name: "Stanford University",
			  color_code: "#8C151599"
		  },
		  {
			  title: "MicroServices with Spring Boot",
			  // subtitle: "- Andrew Ng",
			  logo_path: "spring.png",
			  // certificate_link:
			  //  "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
			  // alt_name: "deeplearning.ai",
			  color_code: "#00000099"
		  },
		  {
			  title: "The Complete Java Masterclass by Udemy",
			  // subtitle: "- GCP Training",
			  logo_path: "java.jpg",
			  // certificate_link:
			  //  "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			  // alt_name: "Google",
			  color_code: "#0C9D5899"
		  },
		  // {
		  //  title: "Data Science",
		  //  subtitle: "- Alex Aklson",
		  //  logo_path: "ibm_logo.png",
		  //  certificate_link:
		  //      "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
		  //  alt_name: "IBM",
		  //  color_code: "#1F70C199"
		  // },
		  // {
		  //  title: "Big Data",
		  //  subtitle: "- Kim Akers",
		  //  logo_path: "microsoft_logo.png",
		  //  certificate_link:
		  //      "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
		  //  alt_name: "Microsoft",
		  //  color_code: "#D83B0199"
		  // },
		  // {
		  //  title: "Master ",
		  //  subtitle: "- Romeo Kienzler",
		  //  logo_path: "ibm_logo.png",
		  //  certificate_link:
		  //      "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
		  //  alt_name: "IBM",
		  //  color_code: "#1F70C199"
		  // },
		  // {
		  //  title: "Advanced ML on GCP",
		  //  subtitle: "- GCP Training",
		  //  logo_path: "google_logo.png",
		  //  certificate_link:
		  //      "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
		  //  alt_name: "Google",
		  //  color_code: "#0C9D5899"
		  // },
		  // {
		  //  title: "DL on Tensorflow",
		  //  subtitle: "- Laurence Moroney",
		  //  logo_path: "deeplearning_ai_logo.png",
		  //  certificate_link:
		  //      "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
		  //  alt_name: "deeplearning.ai",
		  //  color_code: "#00000099"
		  // },
		  {
			  title: "Fullstack Development",
			  // subtitle: "- Jogesh Muppala",
			  logo_path: "coursera_logo.png",
			  // certificate_link:
			  //  "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
			  // alt_name: "Coursera",
			  color_code: "#2A73CC"
		  },
		  // {
		  //  title: "Kuberenetes on GCP",
		  //  subtitle: "- Qwiklabs",
		  //  logo_path: "gcp_logo.png",
		  //  certificate_link:
		  //      "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
		  //  alt_name: "GCP",
		  //  color_code: "#4285F499"
		  // },
		  // {
		  //  title: "Cryptography",
		  //  subtitle: "- Saurabh Mukhopadhyay",
		  //  logo_path: "nptel_logo.png",
		  //  certificate_link:
		  //      "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
		  //  alt_name: "NPTEL",
		  //  color_code: "#FFBB0099"
		  // },
		  // {
		  //  title: "Cloud Architecture",
		  //  subtitle: "- Qwiklabs",
		  //  logo_path: "gcp_logo.png",
		  //  certificate_link:
		  //      "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
		  //  alt_name: "GCP",
		  //  color_code: "#4285F499"
		  // }
	  ]
   };
	
	
   // Experience Page
   const experience = {
	  title: "Experience",
	  subtitle: "Work, Internship and Volunteership",
	  description:
		  "I have worked with many evolving startups as Developer, Designer and Software Architect. I have also worked with some well established companies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	  header_image_path: "experience.svg",
	  sections: [
		  {
			  title: "Work",
			  experiences: [
				  {
					  title: "Full Stack Developer",
					  company: "Avis e solutions",
					  // company_url: "https://legatohealthtech.com/",
					  logo_path: "avis.png",
					  // duration: "May 2018 - July 2018",
					  location: "Noida",
					  description:
						  "Avis e Solutions Pvt Ltd is a leading Telecom Products and Software solutions company providing solutions to the ITES, Corporates & Service Sectors. ",
					  color: "#0879bf",
				  },
				  // {
				  //  title: "Android and ML Developer",
				  //  company: "Muffito Incorporation",
				  //  company_url: "https://www.linkedin.com/company/muffito-inc/about/",
				  //  logo_path: "muffito_logo.png",
				  //  duration: "May 2018 - Oct 2018",
				  //  location: "Pune, Maharashtra",
				  //  description:
				  //      "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
				  //  color: "#9b1578",
				  // },
				  // {
				  //  title: "Android Developer",
				  //  company: "FreeCopy Pvt. Ltd.",
				  //  company_url: "https://www.linkedin.com/company/freecopy/about/",
				  //  logo_path: "freecopy_logo.png",
				  //  duration: "Nov 2017 - Dec 2017",
				  //  location: "Ahmedabad, Gujarat",
				  //  description:
				  //      "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
				  //  color: "#fc1f20",
				  // },
			  ],
		  },
		  {
			  title: "Internships",
			  experiences: [
				  {
					  title: "React Developer",
					  company: "Trinity App Labs",
					  company_url: "https://www.trinityapplab.com/",
					  logo_path: "trinity.png",
					  duration:  "Feb 2019 - July 2019",
					  // location: "Gurgaon, Haryana",
					  description:
								  "Trinity Mobile Lab is a Software Company engaged in developing end-to-end web and mobile based solutions serving Android and iOS platforms since 2013. As an expert mobile solution developer, the company architects web and mobile solutions and applications that help businesses grow primarily start-ups looking to build a tech-enabled business, medium and large brands looking for innovative mobile solutions to meet their business requirements. ",
					  color: "#ee3c26",
				  },
				  {
					  title: "Java Developer",
					  company: "Qandle:Smart HR for the Modern Workplace",
					  company_url:
						  "https://www.qandle.com/",
					  logo_path: "qandle.png",
					  duration: "May 2018 - July 2018",
					  // location: "Work From Home",
					  description:
						  "Qandle is a pure tech partner of 200+ forward looking organizations and it provides end to end HRMS solution for medium to large scale companies . It is amongst best 20 HR software solutions globally.",
					  color: "#0071C5",
				  },
			  ],
		  },
		  {
			  title: "Volunteerships",
			  experiences: [
				  {
					  title: "Google Explore ML Facilitator",
					  company: "Google",
					  company_url: "https://about.google/",
					  logo_path: "google_logo.png",
					  duration: "June 2019 - April 2020",
					  location: "Bangalore",
					  description:
						  "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
					  color: "#4285F4",
				  },
				  {
					title: "GHCI'20 SCHOLAR",
					company: "Anita B.org",
					company_url: "https://ghcindia.anitab.org/",
					logo_path: "education.svg",
					duration: "June 2019 - April 2020",
					// location: "Bangalore",
					description:
						"Grace Hopper Celebration India (GHCI) is the largest gathering of women technologists in Asia. At GHCI, the best minds and leaders in the industry come together to share their knowledge and shape the careers of thousands of women in technology.",
					color: "#4285F4",
				},

				  // {
				  //  title: "Microsoft Student Partner",
				  //  company: "Microsoft",
				  //  company_url: "https://www.microsoft.com/",
				  //  logo_path: "microsoft_logo.png",
				  //  duration: "Aug 2019 - May 2020",
				  //  location: "Hyderabad, Telangana",
				  //  description:
				  //      "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
				  //  color: "#D83B01",
				  // },
				  // {
				  //  title: "Mozilla Campus Captain",
				  //  company: "Mozilla",
				  //  company_url: "https://www.mozilla.org/",
				  //  logo_path: "mozilla_logo.png",
				  //  duration: "Oct 2019 - May 2020",
				  //  location: "Kurnool, Andhra Pradesh",
				  //  description:
				  //      "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
				  //  color: "#000000",
				  // },
				  // {
				  //  title: "Developer Students Club Member",
				  //  company: "DSC IIITDM Kurnool",
				  //  company_url:
				  //      "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
				  //  logo_path: "dsc_logo.png",
				  //  duration: "Jan 2018 - May 2020",
				  //  location: "Kurnool, Andhra Pradesh",
				  //  description:
				  //      "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
				  //  color: "#0C9D58",
				  // },
				  // {
				  //  title: "Developer Program Member",
				  //  company: "Github",
				  //  company_url: "https://github.com/",
				  //  logo_path: "github_logo.png",
				  //  duration: "July 2019 - PRESENT",
				  //  location: "Work From Home",
				  //  description:
				  //      "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
				  //  color: "#181717",
				  // },
			  ],
		  },
	  ],
   };
	
   // Projects Page
   const projectsHeader = {
	  title: "Projects",
	  description:
		  "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications.",
	  avatar_image_path: "projects_image.svg",
   };
	
	
   // Contact Page
   const contactPageData = {
	  contactSection: {
		  title: "Contact Me",
		  profile_image_path: "mee.jpg",
		  description:
			  "I am available on almost every social media. You can message me, I will try to reply within 24 hours.",
	  },
	  // blogSection: {
	  //  title: "Blogs",
	  //  subtitle:
	  //      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
	  //  link: "https://ashutoshhathidara.wordpress.com",
	  //  avatar_image_path: "blogs_image.svg",
	  // },
	  // addressSection: {
	  //  title: "Address",
	  //  subtitle:
	  //      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
	  //  avatar_image_path: "address_image.svg",
	  //  // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
	  // },
	
	  phoneSection: {
		  title: "Phone Number",
		  subtitle: "+91 8958596659",
	  },
	  emailSection: {
		  title:"Email-id",
		  subtitle:"goeltanya01@gmail.com",
	  },
	
   };
	
   export {
	  settings,
	  greeting,
	  socialMediaLinks,
	  skills,
	  competitiveSites,
	  degrees,
	  certifications,
	  experience,
	  projectsHeader,
	  contactPageData,
	  memories,
   };
   