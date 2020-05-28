let base = {
   homeTitle: 'Enhance your software quality without losing momentum',
   logos: 4,
   serviceTitle: 'Recommended Testing Services for Healthcare Companies',
   services: 4,
   whyAbstracta: 'Why Abstracta?',
   whyAbstractaElems: 4,
   ourToolbelt: 'Our Toolbelt',
   ourToolbeltLogos: 15,
   featuredInsights: 'Featured Insights',
   featuredInsightsElems: 3,
   featuredCaseStudies: 'Featured Case Studies',
   featuredCaseStudiesElems: 3,
   whatOthersSay: 'What Others Say',
   contact: "Contact Us",
   formTitle: 'Get in Touch',
   solutions: 'Solutions',
   solutionsElems: 6,
   whyUs: "Why Abstracta?",
   whyUsElems: 4,
   awards: 4,
   backgroundsImgs: 2
};

exports.home_data = Object.assign({},base,{
   homeButton: 'LEARN MORE',
   homeSubheader: 'We provide holistic, end-to-end testing solutions that reduce costs & increase efficiency to uphold business continuity',
});

exports.solutions_data = Object.assign({},base,{
   homeTitle: 'Software Testing Solutions Overview',
   homeSubheader: 'Achieve end-to-end testing by applying proven methodologies to reduce risks and increase user satisfaction.'
});

let softTest = Object.assign({},base,{
   homeTitle: 'End-to-End Software Testing Services',
   homeSubheader: 'Deliver high quality software at the speed of Agile',
   serviceTitle:'Key Service Areas',
   services: 6,
   homeIcon: true
});

exports.solutions_softwareTesting_data = softTest;

exports.solutions_performanceTesting_data = Object.assign({},softTest,{
   homeTitle: 'Performance Testing Services',
   homeSubtitle: "Ensure your system is robust and reliable enough to handle peak loads",
   services: 4,
   whyAbstractaElems: 6,
   testSystem: 'Why Test System Performance and How?',
   testSystemElems: 4
});

exports.solutions_accesibility_data = Object.assign({},softTest,{
   homeTitle: 'Accessibility Testing Services',
   homeSubtitle: "Take a proactive approach to make sure your website is accessible for those with disabilities and meet your compliance goals.",
   services: 4,
   ourToolbelt: 'Tools We Utilize',
   ourToolbeltLogos: 8,
   whyUs: "Why is Accessibility\nTesting Important?",
   whyUsElems: 4
});

exports.solutions_mobileTesting_data = Object.assign({},softTest,{
   homeTitle: 'Mobile Testing Services',
   homeSubtitle: "Let’s get your app a 5-star rating!",
   services: 4,
   whyAbstractaElems: 3,
   apptim: 'Try Our Game-Changing Tool: Apptim',
   apptimElems: 2
});

exports.solutions_testAutomation_data = Object.assign({},softTest,{
   homeTitle: 'Test Automation Services',
   homeSubtitle: "Increase testing ROI while improving test effectiveness and maintainability",
   services: 4,
   automation: 'Our Test Automation Approach',
   automationElems: 2
});

exports.solutions_toolDevelopment_data = Object.assign({},softTest,{
   homeTitle: 'Testing Tool Development',
   homeSubtitle: 'We can create a custom software testing tool for your needs',
   serviceTitle: 'Core Capabilities',
   services: 4
});
