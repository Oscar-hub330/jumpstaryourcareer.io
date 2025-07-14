// utils/storyGenerator.js
const locations = ['Limpopo', 'Eastern Cape', 'KwaZulu-Natal', 'Free State', 'Mpumalanga', 'North West'];
const names = ['Thabo', 'Nomsa', 'Sipho', 'Lerato', 'Mpho', 'Bongani', 'Zanele', 'Tshepo', 'Amahle', 'Kagiso'];
const businessTypes = ['tech startup', 'agricultural business', 'e-commerce store', 'digital marketing agency', 'coding school'];
const skills = ['web development', 'digital marketing', 'graphic design', 'data analysis', 'mobile app development'];
const impacts = [
  'created 3 local jobs', 
  'increased income by 200%', 
  'trained 50 community members',
  'won a youth innovation award',
  'expanded to 2 new locations'
];

export const generateSuccessStories = (count = 6) => {
  const stories = [];
  
  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const business = businessTypes[Math.floor(Math.random() * businessTypes.length)];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    const impact = impacts[Math.floor(Math.random() * impacts.length)];
    
    const templates = [
      `${name} from ${location} launched a ${business} after completing our ${skill} program`,
      `After learning ${skill}, ${name} started a ${business} that ${impact}`,
      `${name}'s ${business} ${impact} after joining our entrepreneurship program`,
      `From ${location}, ${name} now runs a successful ${business} that ${impact}`,
      `Our ${skill} training helped ${name} build a ${business} that ${impact}`
    ];
    
    const title = `${name}'s ${business.split(' ')[0]} ${impact.split(' ')[0]}`;
    const description = templates[Math.floor(Math.random() * templates.length)];
    
    stories.push({
      title: title.charAt(0).toUpperCase() + title.slice(1),
      description: description.charAt(0).toUpperCase() + description.slice(1),
      impact: impact.charAt(0).toUpperCase() + impact,
      icon: '🌟' // You can add more icons if desired
    });
  }
  
  return stories;
};