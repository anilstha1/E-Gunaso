const axios =require("axios")
const posts=[
    {
        title: 'Lack of Access to Primary Healthcare',
        post: 'Many rural areas lack access to basic healthcare services, leading to preventable health issues. Urgently requesting the health ministry to improve and expand primary healthcare facilities.',
        anonymous: false,
      },
      {
        title: 'Inadequate Medical Staff in Remote Areas',
        post: 'Remote areas suffer from a shortage of medical professionals, resulting in delayed medical attention. Advocating for initiatives to attract and retain healthcare professionals in underserved regions.',
        anonymous: true,
      },
      {
        title: 'Insufficient Medical Supplies and Equipment',
        post: 'Health facilities face shortages of essential medical supplies and equipment, hindering effective healthcare delivery. Requesting the health ministry to ensure a consistent supply chain for healthcare resources.',
        anonymous: false,
      },
      {
        title: 'High Cost of Medical Treatment',
        post: 'The high cost of medical treatment is a barrier to accessing healthcare services for many citizens. Seeking measures to make medical services more affordable and accessible.',
        anonymous: true,
      },
      {
        title: 'Limited Mental Health Support',
        post: 'Mental health issues are on the rise, yet there is limited support and awareness. Requesting the health ministry to prioritize mental health services and destigmatize seeking help.',
        anonymous: false,
      },
      {
        title: 'Inadequate Maternal and Child Health Programs',
        post: 'Maternal and child health programs need improvement to reduce maternal and infant mortality rates. Urgently calling for enhanced initiatives and resources in this critical area.',
        anonymous: true,
      },
      {
        title: 'Outdated Healthcare Infrastructure',
        post: 'Many healthcare facilities have outdated infrastructure, impacting the quality of patient care. Advocating for investments in modernizing healthcare infrastructure across the country.',
        anonymous: false,
      },
      {
        title: 'Challenges in Disease Prevention',
        post: 'Disease prevention programs face challenges, and there is a need for proactive measures to address emerging health threats. Requesting the health ministry to strengthen disease prevention efforts.',
        anonymous: true,
      },
      {
        title: 'Ineffective Emergency Response',
        post: 'The effectiveness of emergency response in health crises is questionable. Seeking improvements in the coordination and efficiency of emergency response services.',
        anonymous: false,
      },
      {
        title: 'Limited Public Health Education',
        post: 'Public awareness about health issues is insufficient, leading to preventable diseases. Requesting the health ministry to invest in public health education campaigns for disease prevention.',
        anonymous: true,
      },
]

const headers = {
    'Content-Type': 'application/json',
    'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg3YTllZWQ3YjljMWZjYjIwM2M5MjciLCJlbWFpbCI6InNhZGhhbmFAZ21haWwuY29tIiwicGhvbmVObyI6Ijk5ODg3NzY2NTUiLCJuYW1lIjoic2FkaGFuYSIsImlhdCI6MTcwMzM4OTY3OCwiZXhwIjoxNzAzNDc2MDc4fQ.hgv694fqeYwkgPIXbJDPs44z9okK6fLJxX1cypMf2lU",
  };

posts.forEach(async (post)=>{
    const res=await axios.post("http://localhost:3000/posts/add",post,{headers})
    console.log(res.data);
})
