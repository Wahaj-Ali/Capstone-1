const mainMenu = document.querySelector('.main-menu');
const hamburgerIcon = document.querySelector('.ham');

hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
  hamburgerIcon.classList.toggle('cross');
});

const speakers = [{
  id: 1,
  name: 'Prof. Zairin Noor',
  workPlace: 'Professor of Orthopaedic and Head of Research Centre for Osteoporosis, (Indonesia)',
  introduction: 'He finished his orthopedic in Padjajaran University. Then he advanced his program in spine orthopaedic consultant in University of Indonesia.',
  imgsrc: 'images/common/speaker1.png',
  uniqueClass: '',
},
{
  id: 2,
  name: 'Prof. Max Aebi',
  workPlace: 'Professor Emeritus University of Bern & McGill University, Montreal (CND), (Switzerland)',
  introduction: 'Prof Max Aebi is a highly experienced Spine Surgeon and a key member of the eccElearning Spine Surgery Education Programme faculty.',
  imgsrc: 'images/common/speaker2.jpg',
  uniqueClass: '',
},
{
  id: 3,
  name: 'Dr. Mustafa Javed Bhalli',
  workPlace: 'Previous Consultant Orthopaedic Surgeon UK. Current Consultant Orthopaedic Surgeon in Islamabad, (Pakistan)',
  introduction: 'Co-Chairman: Scientiﬁc Committee',
  imgsrc: 'images/common/speaker3.png',
  uniqueClass: 'speaker3',
},
{
  id: 4,
  name: 'Dr. Farid Zimri',
  workPlace: 'Dr. Faridullah Khan Zimri is a competent and experienced PMDC Verified Orthopedic Surgeon. He has Done FCPS, MBBS.',
  introduction: 'Chairman: Scientiﬁc Committee',
  imgsrc: 'images/common/speaker4.png',
  uniqueClass: 'speaker3',
},
{
  id: 5,
  name: 'Dr. Ali Shami',
  workPlace: 'Consultant Orthopaedic & Trauma SurgeonConsultant Orthopaedic & Trauma Surgeon OGDCL,(Pakistan)',
  introduction: 'Chairman: Audio Visual Committee',
  imgsrc: 'images/common/speaker5.png',
  uniqueClass: 'speaker3',
},
{
  id: 6,
  name: 'Dr. Asfandyar Khan',
  workPlace: 'Dr.Asfandyar Khan is one of the top certified Orthopedic Surgeon in Islamabad, having a degree of . Currently, he is practising at Rehman Medical Services(RMS).',
  introduction: 'Chairman: Accommodation Committee',
  imgsrc: 'images/common/speaker6.png',
  uniqueClass: 'speaker3',
},
];

function displaySpeakers() {
  let result = '';
  speakers.filter((speaker) => speaker.id > 0).forEach((speaker) => {
    result += `<div class="speaker ${speaker.uniqueClass}">
    <img src="${speaker.imgsrc}" alt="">
    <div>
        <h3>${speaker.name}</h3>
        <p>${speaker.workPlace}</p>
        <hr>
        <p class="speaker-info">${speaker.introduction}</p>
    </div>

</div>`;
  });
  document.querySelector('.speaker-s').innerHTML = result;
}

displaySpeakers();