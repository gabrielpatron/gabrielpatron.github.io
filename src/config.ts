export const siteConfig = {
  name: "Advanced Process Intelligence Laboratory (APIL🍏)",
  title: "@University of Toronto, Department of Chemical Engineering and Applied Chemistry",
  titleLink: "https://chem-eng.utoronto.ca/",
  description: "APIL Site",
  accentColor: "#B5ED74",
  social: {
    email: "gabriel.patron17@imperial.ac.uk",
    linkedin: "https://scholar.google.com/citations?user=r1Rw2nQAAAAJ&hl=en&oi=ao",
  },
  aboutMe:
    "The Advanced Process Intelligence Laboratory (APIL to friends) works at the intersection of process systems engineering (PSE) and interpretable machine learning (ML) to: \n \n 1. mathematically model novel process systems. \n \n 2. develop algorithms for autonomous process operation. \n \n 3. computationally design new processes and chemicals. \n \n We are primarily focused on sustainability, energy systems, electrification, and nanomedicine applications.",
  Research: [
  {
   text: "Our group seeks to employ interpretable ML to answer some of the most pressing questions in sustainability. We take a scaled approach to the sustainable supply chain.",
  },
  {
    subtitle: "Process Scale: Hybrid Real-Time Optimization",
    textBeforeBold: "Given a partial understanding of the mathematical models that govern new sustainable chemical processes, can their underlying phenomena be learned from data to determine optimal operating policies? ",
    boldText: "We take a real-time approach to solve this problem, where plant inputs are optimized using learned models that adapt as the plant evolves dynamically.",
    textAfterBold:"\n \n Related works:",
   papers: [
     {
	title: "Deep-learning-aided modifier adaptation: synergies with process intensification",
        link: "https://doi.org/10.1016/j.cep.2025.110581",
      },
     {
	title: "Meta-learning for sample-efficient Bayesian optimisation of fed-batch processes",
        link: "https://doi.org/10.48550/arXiv.2605.05382",
      },]
  },
  {
    subtitle: "System Scale: End-to-End Demand Response Scheduling",
    textBeforeBold: "What non-market factors can be used to predict the markets involved in sustainable chemical and energy systems? Can these predictions be efficiently embedded into system models to achieve optimal performance while satisfying consumer demand? ",
    boldText: "We use neural network surrogates to model these markets and embed the learned markets into optimal system scheduling problems.",
    textAfterBold: "\n \n Related works:",
   papers: [
     {
	title: "Integrated Design and Scheduling of Hydrogen Processes under Uncertainty: A Quantile Neural Network Approach",
        link: "https://doi.org/10.1021/acs.iecr.5c03288",
      },
     {
	title: "Risk-aware stochastic scheduling of multi-market energy storage systems",
        link: "https://doi.org/10.48550/arXiv.2510.27528",
      },]
  },
  {
    subtitle: "Nation scale: Learned Heuristics for Investment Planning",
    textBeforeBold: "What are the key decisions that influence the uptake of new sustainable and intensified chemical projects over time? Can heuristics be learned from data to inform future technological investment and policy?",
  },
],
  projects: [
    {
      name: "Meta-learning for sample-efficient Bayesian optimisation of fed-batch processes",
      description:
        "Langdon et al. 2026. Preprint: arXiv",
      link: "https://doi.org/10.48550/arXiv.2605.05382",
      skills: ["Optimization", "Machine Learning"],
    },
    {
      name: "Risk-constrained stochastic scheduling of multi-market energy storage systems",
      description:
        "Patrón et al. 2025. Preprint: arXiv",
      link: "https://doi.org/10.48550/arXiv.2510.27528",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "Integrated Design and Scheduling of Hydrogen Processes under Uncertainty: A Quantile Neural Network Approach",
      description:
        "Ghilardi, Patrón, Alcántara and Tsay, 2025. Journal paper: Industrial & Engineering Chemistry Research",
      link: "https://doi.org/10.1021/acs.iecr.5c03288",
      skills: ["Machine Learning", "Optimization", "Sustainability"],
    },
    {
      name: "Deep-learning-aided modifier adaptation: synergies with process intensification",
      description:
        "Patrón, Tsay and Ricardez-Sandoval, 2025. Journal paper: Chemical Engineering and Processing - Process Intensification",
      link: "https://doi.org/10.1016/j.cep.2025.110581",
      skills: ["Control", "Machine Learning", "Optimization"],
    },
      {
      name: "The Binding Affinities of Serum Proteins to Nanoparticles",
      description:
        "Stordy et al. 2025. Journal paper: Journal of the American Chemical Society",
      link: "https://doi.org/10.1021/jacs.5c02576",
      skills: ["Modelling", "Nanomedicine"],
    },
      {
      name: "Bootstrapped Gross Error Detection for Efficient and Fault-Tolerant Real-Time Optimization",
      description:
        "Patrón and Ricardez-Sandoval, 2024. Conference paper: 2024 American Control Conference",
      link: "https://ieeexplore.ieee.org/document/10644302",
      skills: ["Control", "Optimization"],
    },
    {
      name: "Economically optimal operation of recirculating aquaculture systems under uncertainty",
      description:
        "Patrón and Ricardez-Sandoval, 2024. Journal paper: Computers and Electronics in Agriculture",
      link: "https://doi.org/10.1016/j.compag.2024.108856",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "Economic model predictive control for packed bed chemical looping combustion",
      description:
        "Patrón, Toffolo and Ricardez-Sandoval, 2024. Journal paper: Chemical Engineering and Processing - Process Intensification",
      link: "https://doi.org/10.1016/j.cep.2024.109731",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "Directional modifier adaptation based on input selection for real-time optimization",
      description:
        "Patrón and Ricardez-Sandoval, 2023. Journal paper: Computers & Chemical Engineering",
      link: "https://doi.org/10.1016/j.compchemeng.2023.108351",
      skills: ["Control", "Optimization"],
    },
    {
      name: "Robust real-time optimization and parameter estimation of post-combustion CO₂ capture under economic uncertainty",
      description:
        "Patrón and Ricardez-Sandoval, 2023. Journal paper: Chemical Engineering Science",
      link: "https://doi.org/10.1016/j.ces.2023.119124",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "Economic Model Predictive Control of a Recirculating Aquaculture System",
      description:
        "Patrón and Ricardez-Sandoval, 2023. Conference paper: 2023 IFAC World Congress",
      link: "https://doi.org/10.1016/j.ifacol.2023.10.723",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "Low-Variance Parameter Estimation Approach for Real-Time Optimization of Noisy Process Systems",
      description:
        "Patrón and Ricardez-Sandoval, 2022. Journal paper: Industrial & Engineering Chemistry Research",
      link: "https://doi.org/10.1021/acs.iecr.2c02897",
      skills: ["Control", "Optimization"],
    },
    {
      name: "An integrated real-time optimization, control, and estimation scheme for post-combustion CO₂ capture",
      description:
        "Patrón and Ricardez-Sandoval, 2022. Journal paper: Applied Energy",
      link: "https://doi.org/10.1016/j.apenergy.2021.118302",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "A robust nonlinear model predictive controller for a post-combustion CO2 capture absorber unit",
      description:
        "Patrón and Ricardez-Sandoval, 2020. Journal paper: Fuel",
      link: "https://doi.org/10.1016/j.fuel.2019.116932",
      skills: ["Control", "Optimization", "Sustainability"],
    },
    {
      name: "Real-Time Optimization and Nonlinear Model Predictive Control for a Post-Combustion Carbon Capture Absorber",
      description:
        "Patrón and Ricardez-Sandoval, 2020. Conference paper: 2020 IFAC World Congress",
      link: "https://doi.org/10.1016/j.ifacol.2020.12.639",
      skills: ["Control", "Optimization", "Sustainability"],
    },  
  ],
  people: [
  {
    name: "Gabriel D. Patrón",
    role: "Assistant Professor",
    bio: "Postdoc, Computing, Imperial College London \n PhD, Chemical Engineering, University of Waterloo \n MSc, Chemical Engineering, Imperial College London \n BASc, Chemical Engineering, University of Toronto",
    image: "/images/PAT_1839-2.JPG",
    cv: "/images/Gabriel_Patron_CV.pdf",
    links: {
      linkedin: "https://www.linkedin.com/in/gabriel-patrón-03a35597/",
      scholar: "https://scholar.google.com/citations?user=r1Rw2nQAAAAJ&hl=en",
    },
  },
],
  
joinUs: {
  title: "Work With Us",
  sections: [
    {
      heading: "Graduate Students",
      textBeforeEmail: "We are looking for up to two graduate students (PhD, MASc) to join our group in Fall 2026. Prospective students with a strong interest in computation, machine learning, and control should apply to the Chemical Engineering & Applied Chemistry graduate studies program. Please reach out to ",
      emailText: "Prof. Patrón",
      textAfterEmail: " if you are planning to apply and are interested in joining our group! \n \n  ",
      link: "https://chem-eng.utoronto.ca/graduate-studies/applications-and-admissions/",
      linkText: "More information for prospective graduate students.",
    },
    {
      heading: "Undergraduate Students",
      textBeforeEmail: "We are excited to support motivated undergraduate students interested in conducting thesis research or summer research projects. Those interested should reach out to ",
      emailText: "Prof. Patrón",
      textAfterEmail: " with a short statement describing your interest in the group and any previous research or professional work experience.",
    },  
    {
      heading: "Postdoctoral Researchers",
      textBeforeEmail: "We do not currently have funding to support postdoctoral positions. Applicants with independent funding are encouraged to reach out about possible research projects. Please email ",
      emailText: "Prof. Patrón",
      textAfterEmail: " a copy of your CV and a cover letter describing your interest in the group and your research experience.",
    },
    {
      heading: "Collaborators",
      textBeforeEmail: "We are always open to collaborations with academic, industry, and public-sector partners. We are actively looking to develop computational methods with applications in the chemical, energy, and financial industries. Please reach out to ",
      emailText: "Prof. Patrón",
      textAfterEmail: " to explore potential collaborations. ",
    },

  ],
},
};
