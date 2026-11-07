export interface SlideItem {
  id: string;
  index: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  locationNote: string;
}

export const HERO_SLIDES: SlideItem[] = [
  {
    id: "main-campus",
    index: "01",
    image: "/images/campus/main-building.jpg",
    category: "Established 1965 • Shine and Let Shine",
    title: "Six Decades of Academic Distinction in Tirupur",
    subtitle:
      "Guided by our motto 'Shine and Let Shine', St. Joseph's Matriculation Higher Secondary School nurtures intellectual excellence, moral clarity, and purposeful leadership from Kindergarten through Grade XII.",
    locationNote: "Main Academic Block, Kangayam Road Campus",
  },
  {
    id: "auditorium",
    index: "02",
    image: "/images/campus/auditorium.jpg",
    category: "Modern Infrastructure",
    title: "Contemporary Spaces Designed for Assembly and Culture",
    subtitle:
      "Purpose-built architectural spaces supporting academic seminars, cultural symposiums, and holistic student development.",
    locationNote: "Centenary Auditorium & Convention Plaza",
  },
  {
    id: "athletics",
    index: "03",
    image: "/images/campus/sports-grounds.jpg",
    category: "Sports & Recreation",
    title: "Vast Playground for Track, Field, and Outdoor Athletics",
    subtitle:
      "An expansive on-site sports complex accommodating track and field events, basketball courts, and structured physical education.",
    locationNote: "Outdoor Sports Complex & Track",
  },
  {
    id: "indoor-arena",
    index: "04",
    image: "/images/campus/indoor-court.jpg",
    category: "All-Weather Facilities",
    title: "Covered Indoor Sports Hall and Assembly Pavilion",
    subtitle:
      "Spacious multi-court indoor facilities enabling year-round badminton, physical training, and disciplined student gatherings.",
    locationNote: "Indoor Sports Pavilion",
  },
  {
    id: "academic-wing",
    index: "05",
    image: "/images/campus/academic-wing-wide.jpg",
    category: "Expansive Campus",
    title: "Spacious Academic Wings Overlooking the Main Grounds",
    subtitle:
      "Three-story ventilated classroom blocks designed to provide a calm, sunlit learning atmosphere across all grade levels.",
    locationNote: "Academic Wing & Assembly Portico",
  },
];

export const CAMPUS_GALLERY_PHOTOS = [
  {
    id: "entrance-arch",
    index: "01",
    image: "/images/campus/main-entrance-gate.jpg",
    title: "Main Entrance Archway on Kangayam Road",
    subtitle:
      "The welcoming gateway to St. Joseph's Matriculation Higher Secondary School, standing as a trusted landmark in Tirupur since 1965.",
    locationNote: "Main Entrance Arch & Gate",
  },
  {
    id: "golden-jubilee",
    index: "02",
    image: "/images/campus/golden-jubilee-wall.jpg",
    title: "Golden Year of Excellence Commemorative Wall",
    subtitle:
      "Celebrating over five decades of academic legacy (1965 - 2015 and beyond), honoring generations of scholars and educators.",
    locationNote: "Golden Jubilee Monument (1965 - 2015)",
  },
  {
    id: "campus-avenue",
    index: "03",
    image: "/images/campus/campus-avenue.jpg",
    title: "Tree-Lined Campus Avenue & Classroom Corridor",
    subtitle:
      "Landscaped walkways and expansive multi-story classroom blocks providing a serene, disciplined environment for daily learning.",
    locationNote: "East Academic Corridor & Driveway",
  },
  {
    id: "auditorium-plaza",
    index: "04",
    image: "/images/campus/auditorium.jpg",
    title: "Modern Auditorium & Convention Plaza",
    subtitle:
      "Purpose-built architectural venue hosting school convocations, seminars, cultural programmes, and parent gatherings.",
    locationNote: "Centenary Auditorium & Plaza",
  },
  {
    id: "academic-wing-view",
    index: "05",
    image: "/images/campus/academic-wing-wide.jpg",
    title: "Main Academic Block & Playground View",
    subtitle:
      "Full panoramic view of the classroom block and central portico overlooking the vast outdoor playground.",
    locationNote: "Academic Block & Grounds",
  },
];

export const SCHOOL_INFO = {
  name: "St. Joseph's Matriculation Higher Secondary School",
  shortName: "St. Joseph's MHSS",
  motto: "Shine and Let Shine",
  established: 1965,
  logo: "/images/logo.png",
  board: "Tamil Nadu State Board / Matriculation",
  levels: "Kindergarten (LKG & UKG) to Higher Secondary (Grade XII)",
  address: {
    street: "35, Kangayam Road",
    locality: "Tirupur",
    pincode: "641604",
    state: "Tamil Nadu",
    country: "India",
    full: "35, Kangayam Road, Tirupur, Tamil Nadu 641604, India",
  },
  phones: {
    landline1: "0421-2420895",
    landline2: "0421-2421895",
    mobile: "+91 94429 90895",
    mobileRaw: "+919442990895",
  },
  email: "office@sjmhss.org",
  website: "sjmhss.org",
  hours: "Monday to Saturday: 8:30 AM to 4:30 PM",
};

export const KEY_METRICS = [
  {
    value: "Est. 1965",
    label: "Six Decades of Excellence",
    detail: "Serving Tirupur families with trusted educational excellence since 1965",
  },
  {
    value: "KG to XII",
    label: "State Board & Matriculation",
    detail: "Complete academic continuum from Kindergarten through Higher Secondary",
  },
  {
    value: "3 + IT",
    label: "Dedicated Science & Tech Labs",
    detail: "Distinct Physics, Chemistry, and Biology labs plus an A/C Computer Lab",
  },
  {
    value: "100%",
    label: "CCTV, RO Water & Transit",
    detail: "Active campus-wide CCTV monitoring, RO purification, and regulated bus routes",
  },
];

export const ACADEMIC_TIERS = [
  {
    level: "01",
    stage: "Foundational Wing",
    grades: "Kindergarten (LKG & UKG)",
    image: "/images/academics/stage-01-kindergarten.jpg",
    summary:
      "A warm, structured environment focused on early literacy, numeracy, phonetic awareness, sensorimotor development, and joyful discovery.",
    highlights: [
      "Activity-based Montessori & Matriculation readiness",
      "Multimedia-assisted early learning classrooms",
      "Focus on communication and social confidence",
    ],
  },
  {
    level: "02",
    stage: "Primary & Middle School",
    grades: "Grades I to VIII",
    image: "/images/academics/stage-02-primary-middle.jpg",
    summary:
      "Building strong conceptual foundations across Mathematics, General Science, Languages, and Social Studies under the Matriculation framework.",
    highlights: [
      "Digital learning systems and smartboard instruction",
      "Dedicated reading corner and library literacy hours",
      "Regular computational classes in the A/C IT Lab",
    ],
  },
  {
    level: "03",
    stage: "High School",
    grades: "Grades IX & X",
    image: "/images/academics/stage-03-high-school.jpg",
    summary:
      "Rigorous preparation for the Tamil Nadu SSLC State Board examinations with individualized mentoring, laboratory practicals, and analytical training.",
    highlights: [
      "Hands-on practicals in Physics, Chemistry, and Biology labs",
      "Periodic assessment and faculty mentorship",
      "Bharat Scouts & Guides, athletics, and aptitude guidance",
    ],
  },
  {
    level: "04",
    stage: "Higher Secondary",
    grades: "Grades XI & XII",
    image: "/images/academics/stage-04-higher-secondary.jpg",
    summary:
      "Specialized academic streams preparing senior students for university admissions, professional entrance examinations, and leadership roles.",
    highlights: [
      "Science Streams (Mathematics, Physics, Chemistry, Biology / Computer Science)",
      "Commerce, Accountancy, Economics & Business Mathematics",
      "Advanced laboratory research and board examination mastery",
    ],
  },
];

export const TESTIMONIALS = [
  {
    index: "01",
    name: "Sakthi Vel",
    role: "Parent • Local Guide",
    quote:
      "Excellent performance from this school. The teaching is so good for everything. My son is very lucky to study at this school.",
  },
  {
    index: "02",
    name: "Yasmeen Feroz Khan",
    role: "Alumni (Josephine)",
    quote:
      "I am an old student of this school and I am proud to be a Josephine. As the motto says, the students of my school are shining. Grateful for choosing such a right school.",
  },
  {
    index: "03",
    name: "Haseena M",
    role: "Local Guide",
    quote:
      "Excellent school in the city. Gives plenty of opportunities for all the students with friendly faculty members and a positive environment.",
  },
  {
    index: "04",
    name: "Mahendran",
    role: "Alumni",
    quote:
      "Fantastic school. This school changed my total life and taught me to speak fluent English with confidence.",
  },
  {
    index: "05",
    name: "Pavithra B",
    role: "Community Member",
    quote:
      "It is a very good school and a true place of knowledge, supported by excellent faculty members and good administration.",
  },
  {
    index: "06",
    name: "Shivakkumar E S",
    role: "Parent • Local Guide",
    quote:
      "Best school for obedience, studies, teaching, and dignity. My daughter is studying here now. Thanks and salute to the school and teachers.",
  },
  {
    index: "07",
    name: "Senthil Kumar",
    role: "Parent / Alumni",
    quote:
      "Most friendly school that guides you to study the right and important concepts. The experience of the teachers is far ahead of other schools.",
  },
  {
    index: "08",
    name: "Malathi D",
    role: "Second-Generation Student",
    quote:
      "I am studying in this school and my father also studied in this school. He became a wonderful person because of this institution. I am proud to study here.",
  },
  {
    index: "09",
    name: "Sankar Charu",
    role: "Alumni",
    quote:
      "I like this school very much. I am shining in my life today because I studied in this school.",
  },
  {
    index: "10",
    name: "Suresh",
    role: "Local Guide",
    quote:
      "Reasonable fees and a genuinely good place for students to improve their knowledge and character.",
  },
];

export const SCHOOL_EVENTS = {
  sectionLabel: "Annual Day & Cultural Extravaganza",
  headline: "Celebrations, Stagecraft, and Creative Expression.",
  subtitle:
    "Beyond the classroom, St. Joseph's comes alive with grand annual day celebrations, patriotic pageants, and musical showcases that nurture stage confidence and artistic talent.",
  events: [
    {
      index: "01",
      tag: "Annual Day Grand Stage",
      title: "Patriotic Formation & Open-Air Stage Pageant",
      description:
        "Held beneath the illuminated St. Joseph's portico, students present synchronized acrobatic formations and patriotic tributes before a gathering of parents, dignitaries, and faculty.",
      image: "/images/events/annual-day-main-stage.jpg",
    },
    {
      index: "02",
      tag: "Foundational & Primary Showcase",
      title: "Junior Cultural Fest & Ensemble Dance",
      description:
        "Young scholars from Kindergarten and Primary wings take center stage in vibrant costumes, building early public-speaking and performance confidence.",
      image: "/images/events/junior-cultural-fest.jpg",
    },
    {
      index: "03",
      tag: "Senior Student Showcase",
      title: "Contemporary Choreography & Stage Productions",
      description:
        "High school and higher secondary students collaborate on high-energy group choreography, theatrical productions, and multimedia stage performances.",
      image: "/images/events/senior-choreography.jpg",
    },
  ],
};

export const CAMPUS_FACILITIES = [
  {
    title: "Digital Learning Environments",
    category: "Smart Classrooms",
    description:
      "Classrooms are integrated with modern digital learning systems and interactive smartboards to facilitate engaging, multimedia-driven education across all subjects.",
    image: "/images/facilities/smart-classroom.jpg",
    specs: ["Interactive Smartboards", "Audio-Visual Modules", "Ventilated Classrooms"],
  },
  {
    title: "Scientific Laboratories",
    category: "Physics • Chemistry • Biology",
    description:
      "The campus features three distinct, fully equipped laboratories for Physics, Chemistry, and Biology to support hands-on experimentation and practical curriculum requirements.",
    image: "/images/facilities/science-labs.jpg",
    specs: ["Physics Lab", "Chemistry Lab", "Biology Lab"],
  },
  {
    title: "Computer Science Lab",
    category: "Information Technology",
    description:
      "A fully air-conditioned IT laboratory equipped with modern workstations and high-speed internet connectivity for regular computational, programming, and digital literacy classes.",
    image: "/images/facilities/computer-lab.jpg",
    specs: ["Fully Air-Conditioned", "High-Speed Internet", "1:1 Practical Sessions"],
  },
  {
    title: "Resourceful Central Library",
    category: "Literacy & Research",
    description:
      "Houses an expansive collection of academic reference books, encyclopedias, educational journals, and a dedicated reading corner designed to cultivate lifelong reading habits.",
    image: "/images/facilities/central-library.jpg",
    specs: ["Reference Collection", "Educational Journals", "Dedicated Reading Corner"],
  },
  {
    title: "Sports & Recreation Complex",
    category: "Track, Field & Indoor Courts",
    description:
      "A vast on-site playground built to accommodate track and field events, basketball, and outdoor athletics, complemented by a covered multi-court indoor sports pavilion.",
    image: "/images/campus/sports-grounds.jpg",
    specs: ["Track & Field Ground", "Outdoor Basketball Courts", "Covered Indoor Arena"],
  },
  {
    title: "Safety, RO Water & School Bus Fleet",
    category: "Student Well-Being & Logistics",
    description:
      "The entire campus operates under active 24/7 CCTV surveillance, providing clean RO drinking water systems and a well-regulated school bus facility covering major transit routes across Tirupur.",
    image: "/images/facilities/school-bus-safety.jpg",
    specs: ["Active CCTV Monitoring", "Clean RO Drinking Water", "Tirupur Bus Network"],
  },
];

export const BOARD_ACHIEVEMENTS = {
  academicYear: "2025 - 2026",
  headline: "A Milestone Achieved: State Board Examination Toppers",
  subtitle:
    "Celebrating the dedication, disciplined scholarship, and centum laurels of our Class XII and Class X board examination rank holders.",
  toppersPoster: "/images/achievements/class-toppers-2026.jpg",
  subjectPoster: "/images/achievements/subject-achievers-2026.jpg",
  classXII: [
    { rank: "01", name: "Netra E J", score: "592 / 600", percentage: "98.67%" },
    { rank: "02", name: "Subbha Harini K", score: "586 / 600", percentage: "97.67%" },
    { rank: "03", name: "Shiny Sherlin J", score: "585 / 600", percentage: "97.50%" },
  ],
  classX: [
    { rank: "01", name: "Sri Vanchinathan S", score: "498 / 500", percentage: "99.60%" },
    { rank: "02", name: "Sanjana G M", score: "496 / 500", percentage: "99.20%" },
    { rank: "03", name: "Isanth J", score: "494 / 500", percentage: "98.80%" },
  ],
  subjectCentumsX: [
    { name: "Sri Vanchinathan S", subject: "Maths, Science & Social Science" },
    { name: "Sanjana G M", subject: "Maths & Science" },
    { name: "Bhavatarani M", subject: "Science" },
    { name: "Dhatchayani S", subject: "Science" },
    { name: "Iniya M", subject: "Science" },
    { name: "Nidarshana K S", subject: "Science" },
    { name: "Indrajith P M", subject: "Science" },
    { name: "Ishanth J", subject: "Science" },
    { name: "Leelai Ganapathy", subject: "Science" },
    { name: "Tansera M B", subject: "Science" },
    { name: "Thamarai E", subject: "Science" },
    { name: "Janani S", subject: "Science" },
  ],
  subjectCentumsXII: [
    { name: "Netra E J", subject: "Commerce & Business Maths" },
    { name: "Sudhiksha", subject: "Accountancy & Business Maths" },
    { name: "Subbha Harini K", subject: "French" },
    { name: "Anjali R", subject: "Computer Science" },
    { name: "Dharshini Silviya R J", subject: "Computer Science" },
    { name: "Deeraj J", subject: "Computer Science" },
    { name: "Sarvesh M S", subject: "Computer Science" },
    { name: "Senthilnathan T", subject: "Computer Science" },
    { name: "Mehasree S", subject: "Computer Science" },
    { name: "Inigha Sree", subject: "Computer Application" },
    { name: "Suvetha P", subject: "Computer Application" },
    { name: "Manthra S K", subject: "Computer Application" },
    { name: "Jenifer Raju", subject: "Accountancy" },
    { name: "Shiny Sherlin J", subject: "Accountancy" },
    { name: "Nitharhana", subject: "Accountancy" },
    { name: "Sreejaa", subject: "Accountancy" },
  ],
};

export const JOSATS_ALUMNI = {
  acronym: "JOSATS",
  fullName: "St. Joseph's Old Students' Association, Tirupur",
  motto: "Reunited to Serve",
  logo: "/images/alumni/josats-logo.jpg",
  description:
    "JOSATS (St. Joseph's Old Students' Association, Tirupur) is our vibrant alumni body uniting graduates across generations. Guided by the spirit of 'Reunited to Serve', alumni actively give back to their alma mater and community through healthcare outreach, annual homecomings, and continuous institutional support.",
  initiatives: [
    {
      index: "01",
      tag: "Healthcare & Community Outreach",
      title: "Annual Eye & Dental Medical Camps",
      description:
        "JOSATS regularly organizes comprehensive Eye and Dental Care Camps on campus in collaboration with leading medical specialists, providing free screenings and preventive checkups for students, staff, and the community.",
      image: "/images/alumni/medical-camp.jpg",
    },
    {
      index: "02",
      tag: "Brotherhood & Homecoming",
      title: "Annual Alumni Reunion",
      description:
        "Every year, JOSATS brings together former batches and respected faculty on campus to celebrate lifelong friendships, mentor current students, and strengthen the bond across six decades of St. Joseph's graduates.",
      image: "/images/alumni/annual-reunion.jpg",
    },
    {
      index: "03",
      tag: "Alma Mater Support",
      title: "Holistic Contribution to the School",
      description:
        "From honoring educators and sponsoring student merit awards to supporting campus infrastructure, scholarships, and academic resources, JOSATS contributes to the growth of the school in every possible way.",
      image: "/images/alumni/alumni-honours.jpg",
    },
  ],
};

export const ANNOUNCEMENTS = [
  {
    date: "Academic Year 2026 - 2027",
    tag: "Admissions",
    title: "Registration Open for Kindergarten to Grade XI",
    description:
      "Parents seeking admission for LKG, UKG, Primary, Middle, and Higher Secondary streams may collect the prospectus from the school administrative office on Kangayam Road.",
  },
  {
    date: "Campus Amenities",
    tag: "Transport & Safety",
    title: "School Bus Routes & Campus Safety Protocol",
    description:
      "Regulated school bus routes covering major transit corridors across Tirupur are open for student registration. The campus remains under active CCTV monitoring.",
  },
  {
    date: "Academic Infrastructure",
    tag: "Laboratories & Smart Classes",
    title: "Practical Schedules for Science & A/C Computer Labs",
    description:
      "Updated laboratory schedules for Physics, Chemistry, Biology, and the air-conditioned Computer Science lab are now in effect for the current term.",
  },
];
