export const questionsData = [
  { session: "Science", stream: "Engineering", branch: "Computer Science / IT",
    interest: [
      "Do you enjoy building small apps or automations?",
      "Do you like debugging and improving code logic?",
      "Would you prefer a job that involves continual learning of libraries/tools?"
    ],
    aptitude: [
      { text: "What comes next in the sequence: 2, 4, 8, 16, ___?", options: ["24","32","20"], answer: "32" },
      { text: "If 3 + (2 × 4) = ?", options: ["11","14","10"], answer: "11" },
      { text: "Puzzle: Spot the odd code snippet (image)", options: ["A","B","C"], answer: "B", image: "https://via.placeholder.com/520x260?text=Code+Puzzle+CS" }
    ] },
  { session: "Science", stream: "Engineering", branch: "Mechanical",
    interest: [
      "Do you enjoy designing and testing mechanical parts?",
      "Do you like working hands-on with tools and prototypes?",
      "Would you prefer a career focused on machines and mechanisms?"
    ],
    aptitude: [
      { text: "Gear problem: Gear A (10 teeth) at 60 rpm drives Gear B (20 teeth). RPM of B is?", options: ["30","120","60"], answer: "30" },
      { text: "If distance = 30 m and time = 5 s, speed = ?", options: ["6 m/s","150 m/s","0.16 m/s"], answer: "6 m/s" },
      { text: "Puzzle: Identify the correct mechanism (image)", options: ["A","B","C"], answer: "A", image: "https://via.placeholder.com/520x260?text=Mech+Puzzle" }
    ] },
  { session: "Science", stream: "Engineering", branch: "Electrical",
    interest: [
      "Do you enjoy experimenting with circuits and sensors?",
      "Are you curious about power systems and signal flow?",
      "Would you like to build electronic gadgets and prototypes?"
    ],
    aptitude: [
      { text: "Ohm's law: V = ?", options: ["I × R","I / R","R / I"], answer: "I × R" },
      { text: "Unit of current is?", options: ["Volts","Amps","Ohms"], answer: "Amps" },
      { text: "Puzzle: Which circuit gives desired output? (image)", options: ["X","Y","Z"], answer: "Y", image: "https://via.placeholder.com/520x260?text=Elec+Puzzle" }
    ] },
  { session: "Science", stream: "Engineering", branch: "Civil",
    interest: [
      "Do you enjoy planning structures and surveying sites?",
      "Do you like solving practical building problems?",
      "Would you prefer a field-oriented role in construction/infrastructure?"
    ],
    aptitude: [
      { text: "Stress = Force ÷ Area. If F=200N, A=10m², stress = ?", options: ["20","2000","0.05"], answer: "20" },
      { text: "If a simply supported beam has a 100N midspan load, reaction per support is?", options: ["50N","100N","25N"], answer: "50N" },
      { text: "Puzzle: Which shape fits the truss? (image)", options: ["1","2","3"], answer: "2", image: "https://via.placeholder.com/520x260?text=Civil+Puzzle" }
    ] },
  { session: "Science", stream: "Medical", branch: "MBBS (Medicine)",
    interest: [
      "Do you enjoy helping people with their health problems?",
      "Are you interested in human anatomy and clinical cases?",
      "Would you like a career with direct patient care responsibilities?"
    ],
    aptitude: [
      { text: "Which blood group is the universal donor?", options: ["A","B","AB","O-"], answer: "O-" },
      { text: "Which organ produces insulin?", options: ["Liver","Pancreas","Kidney"], answer: "Pancreas" },
      { text: "Puzzle: Identify the anatomical structure (image)", options: ["A","B","C"], answer: "C", image: "https://via.placeholder.com/520x260?text=Medical+Puzzle" }
    ] },
  { session: "Commerce", stream: "Commerce", branch: "Accounting & Finance",
    interest: [
      "Do you enjoy working with numbers and ledgers?",
      "Do financial statements and audits interest you?",
      "Would you prefer a career focusing on bookkeeping or analysis?"
    ],
    aptitude: [
      { text: "Profit = Revenue - Cost. If R=200, C=150, profit?", options: ["50","350","150"], answer: "50" },
      { text: "If 5 items cost 250, cost per item?", options: ["50","25","75"], answer: "50" },
      { text: "Puzzle: Spot the balancing error in accounts (image)", options: ["A","B","C"], answer: "A", image: "https://via.placeholder.com/520x260?text=Commerce+Puzzle" }
    ] },
  { session: "Commerce", stream: "Commerce", branch: "Business Management (BBA)",
    interest: [
      "Do you enjoy planning, leading teams and strategy?",
      "Are you curious about marketing and business operations?",
      "Would you like a role that involves communication and leadership?"
    ],
    aptitude: [
      { text: "If revenue increases from 100 to 150, percent increase?", options: ["50%","15%","30%"], answer: "50%" },
      { text: "Which is a core P of marketing?", options: ["Product","Price","Both"], answer: "Both" },
      { text: "Puzzle: Match the org chart to roles (image)", options: ["X","Y","Z"], answer: "Z", image: "https://via.placeholder.com/520x260?text=BBA+Puzzle" }
    ] },
  { session: "Arts", stream: "Arts", branch: "Psychology",
    interest: [
      "Do you enjoy understanding human behavior and counseling?",
      "Are you curious about mental processes and research?",
      "Would you prefer a career involving observation and analysis?"
    ],
    aptitude: [
      { text: "Which term refers to the study of mind & behavior?", options: ["Sociology","Psychology","Biology"], answer: "Psychology" },
      { text: "Logic: If all A are B, and some B are C, are some A definitely C?", options: ["Yes","No"], answer: "No" },
      { text: "Puzzle: Identify the illusion type (image)", options: ["A","B","C"], answer: "B", image: "https://via.placeholder.com/520x260?text=Psych+Puzzle" }
    ] },
  { session: "Arts", stream: "Arts", branch: "Fine Arts / Literature",
    interest: [
      "Do you enjoy creating visual or literary works?",
      "Are you passionate about storytelling and expression?",
      "Would you like a career focused on creative output and critique?"
    ],
    aptitude: [
      { text: "Which is a figure of speech: 'Time is a thief'?", options: ["Metaphor","Simile","Hyperbole"], answer: "Metaphor" },
      { text: "Pick the correct past tense of 'go'.", options: ["goed","went","gone"], answer: "went" },
      { text: "Puzzle: Solve the rebus (image)", options: ["A","B","C"], answer: "A", image: "https://via.placeholder.com/520x260?text=Arts+Puzzle" }
    ] }
];

export const branchOrder = questionsData.map(q => q.branch);


