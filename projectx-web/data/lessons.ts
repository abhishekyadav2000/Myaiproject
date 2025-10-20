import { Lesson } from '@/lib/schemas/lesson';

/**
 * Sample lessons - 12 lessons linked to kits and standards
 */
export const SAMPLE_LESSONS: Lesson[] = [
  {
    id: 'lesson-001',
    slug: 'intro-color-mixing',
    title: 'Introduction to Color Mixing',
    description: 'Explore how colors combine to create new hues using simple experiments.',
    kitId: 'kit-002',
    objectives: [
      'Understand primary and secondary colors',
      'Perform color mixing experiments',
      'Document observations',
    ],
    materials: [
      'Paints or food coloring',
      'White paper',
      'Brushes or droppers',
      'Water containers',
    ],
    steps: [
      {
        title: 'Prepare your workspace',
        duration: 5,
        instructions: 'Set up paint or food coloring in separate containers, with water for mixing.',
        tips: 'Use newspaper or plastic covering to protect surfaces.',
      },
      {
        title: 'Mix primary colors',
        duration: 10,
        instructions: 'Mix red + yellow to create orange, yellow + blue for green, and red + blue for purple.',
        tips: 'Use equal amounts for consistent results.',
      },
      {
        title: 'Create a color wheel',
        duration: 15,
        instructions: 'Arrange your colors in a circle to see the relationships between hues.',
        tips: 'Take photos of your results for the lab notebook.',
      },
      {
        title: 'Document findings',
        duration: 10,
        instructions: 'Write down your observations and any unexpected color combinations.',
        tips: 'Sketch the colors you created.',
      },
    ],
    durationMinutes: 40,
    difficulty: 'Beginner',
    ageBands: ['5-10', '10-15'],
    streamsPlus: ['Arts', 'Science'],
    downloads: [
      {
        name: 'Color Mixing Guide',
        type: 'pdf',
        url: '/downloads/color-mixing-guide.pdf',
      },
      {
        name: 'Lab Notebook Template',
        type: 'pdf',
        url: '/downloads/lab-notebook.pdf',
      },
    ],
    teacherNotes: 'This lesson works great as a standalone activity or as part of the Maker Basics kit. Students often enjoy experimenting beyond the suggested combinations.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Color Accuracy',
          description: 'Correctness of color mixing and combinations',
          levels: [
            { level: 'Novice', points: 1 },
            { level: 'Proficient', points: 2 },
            { level: 'Advanced', points: 3 },
          ],
        },
        {
          name: 'Documentation',
          description: 'Quality of observations and sketches',
          levels: [
            { level: 'Incomplete', points: 0 },
            { level: 'Adequate', points: 1 },
            { level: 'Excellent', points: 2 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Science:Class-7',
    ],
    tags: ['colors', 'art', 'science', 'beginner'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-002',
    slug: 'build-a-bridge',
    title: 'Build a Bridge Challenge',
    description: 'Design and test a bridge structure using engineering principles.',
    kitId: 'kit-006',
    objectives: [
      'Apply structural engineering concepts',
      'Test bridge load capacity',
      'Iterate on designs',
      'Present findings',
    ],
    materials: [
      'Building blocks or wood pieces',
      'String',
      'Weights (books)',
      'Ruler',
      'Notebook',
    ],
    steps: [
      {
        title: 'Design phase',
        duration: 15,
        instructions: 'Sketch your bridge design. Consider span, support, and materials.',
        tips: 'Look at real bridge photos for inspiration.',
      },
      {
        title: 'Build',
        duration: 20,
        instructions: 'Construct your bridge model using provided materials.',
        tips: 'Make sure supports are secure.',
      },
      {
        title: 'Test load capacity',
        duration: 15,
        instructions: 'Add weight gradually until the bridge fails. Record the maximum weight.',
        tips: 'Use standard weights or books.',
      },
      {
        title: 'Analyze and iterate',
        duration: 10,
        instructions: 'Identify failure points and improve your design.',
        tips: 'Document what changes improved strength.',
      },
    ],
    durationMinutes: 60,
    difficulty: 'Intermediate',
    ageBands: ['5-10', '10-15'],
    streamsPlus: ['Engineering', 'Science'],
    downloads: [
      {
        name: 'Bridge Design Template',
        type: 'pdf',
        url: '/downloads/bridge-template.pdf',
      },
    ],
    teacherNotes: 'This is a fantastic group activity. Students can compare designs and learn from each other\'s approaches.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Design Quality',
          description: 'How well the bridge meets structural requirements',
          levels: [
            { level: 'Poor', points: 1 },
            { level: 'Satisfactory', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
        {
          name: 'Testing',
          description: 'Thoroughness of testing and documentation',
          levels: [
            { level: 'Incomplete', points: 1 },
            { level: 'Complete', points: 2 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Science:Class-6',
      'NGSS:1-PS4-1',
    ],
    tags: ['engineering', 'structures', 'challenge'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-003',
    slug: 'python-hello-world',
    title: 'Python: Hello World and Variables',
    description: 'Your first steps in programming with Python. No experience needed!',
    kitId: undefined, // Paper-only lesson
    objectives: [
      'Set up Python environment',
      'Write your first program',
      'Understand variables and data types',
    ],
    materials: [
      'Computer with Python installed',
      'Text editor (VS Code, Thonny, etc.)',
      'Internet access for setup',
    ],
    steps: [
      {
        title: 'Install Python',
        duration: 10,
        instructions: 'Download Python from python.org and follow installation instructions.',
        tips: 'Choose Python 3.9 or newer.',
      },
      {
        title: 'Write Hello World',
        duration: 5,
        instructions: 'Type: print("Hello, World!") and run it.',
        tips: 'This simple program shows programming basics.',
      },
      {
        title: 'Learn about variables',
        duration: 15,
        instructions: 'Create variables like name = "Alice" and age = 15. Print them.',
        tips: 'Experiment with different data types.',
      },
      {
        title: 'Create your first program',
        duration: 20,
        instructions: 'Write a program that collects user input and displays personalized messages.',
        tips: 'Use input() to get data from users.',
      },
    ],
    durationMinutes: 50,
    difficulty: 'Beginner',
    ageBands: ['10-15', '15-20'],
    streamsPlus: ['Technology'],
    downloads: [
      {
        name: 'Python Setup Guide',
        type: 'pdf',
        url: '/downloads/python-setup.pdf',
      },
      {
        name: 'Code Examples',
        type: 'docx',
        url: '/downloads/code-examples.docx',
      },
    ],
    teacherNotes: 'This is an excellent introduction to programming. Many students find Python very accessible.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Code Functionality',
          description: 'Does the code run without errors?',
          levels: [
            { level: 'No', points: 0 },
            { level: 'Yes', points: 3 },
          ],
        },
        {
          name: 'Comments',
          description: 'Is the code well-commented?',
          levels: [
            { level: 'Missing', points: 0 },
            { level: 'Adequate', points: 1 },
            { level: 'Excellent', points: 2 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Math:Class-9',
    ],
    tags: ['programming', 'python', 'beginner', 'coding'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-004',
    slug: 'robot-line-following',
    title: 'Robot Line-Following Challenge',
    description: 'Program a robot to follow a line using sensors and logic.',
    kitId: 'kit-003',
    objectives: [
      'Understand sensor inputs',
      'Write conditional logic',
      'Debug robot behavior',
      'Optimize performance',
    ],
    materials: [
      'Robot from Robotics 101 Kit',
      'Line-following tape or marker',
      'Smooth floor space',
      'Computer with programming interface',
    ],
    steps: [
      {
        title: 'Set up the track',
        duration: 10,
        instructions: 'Create a line path on the floor using tape or marker.',
        tips: 'Make it curvy to test different sensor responses.',
      },
      {
        title: 'Program basic logic',
        duration: 20,
        instructions: 'Write code to read sensor values and move the robot based on line position.',
        tips: 'Test with simple if-else statements first.',
      },
      {
        title: 'Test and calibrate',
        duration: 15,
        instructions: 'Run the robot and observe its behavior. Adjust sensor thresholds if needed.',
        tips: 'Different floor colors may require calibration.',
      },
      {
        title: 'Optimize speed',
        duration: 15,
        instructions: 'Gradually increase robot speed while maintaining accuracy.',
        tips: 'Document the maximum speed at 100% accuracy.',
      },
    ],
    durationMinutes: 60,
    difficulty: 'Intermediate',
    ageBands: ['10-15', '15-20'],
    streamsPlus: ['Robotics', 'Technology'],
    downloads: [
      {
        name: 'Programming Guide',
        type: 'pdf',
        url: '/downloads/line-following-guide.pdf',
      },
      {
        name: 'Code Template',
        type: 'docx',
        url: '/downloads/code-template.docx',
      },
    ],
    teacherNotes: 'A classic robotics challenge. Students learn debugging quickly through this hands-on exercise.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Line Following Accuracy',
          description: 'Does robot stay on line?',
          levels: [
            { level: 'Poor', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
        {
          name: 'Code Quality',
          description: 'Is code efficient and well-structured?',
          levels: [
            { level: 'Needs work', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Science:Class-8',
      'NGSS:MS-ETS1-2',
    ],
    tags: ['robotics', 'programming', 'challenge', 'sensors'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-005',
    slug: 'data-visualization-basics',
    title: 'Data Visualization with Charts',
    description: 'Learn to create meaningful visualizations from raw data.',
    kitId: 'kit-007',
    objectives: [
      'Understand data visualization principles',
      'Create various chart types',
      'Interpret data stories',
      'Choose appropriate visualizations',
    ],
    materials: [
      'Dataset (provided)',
      'Spreadsheet software (Excel/Google Sheets)',
      'Tableau public (free)',
      'Computer',
    ],
    steps: [
      {
        title: 'Explore the dataset',
        duration: 15,
        instructions: 'Load the dataset and understand its structure, columns, and data types.',
        tips: 'Look for patterns and outliers.',
      },
      {
        title: 'Create bar charts',
        duration: 20,
        instructions: 'Create bar charts for categorical comparisons.',
        tips: 'Label axes clearly and add titles.',
      },
      {
        title: 'Build line charts',
        duration: 20,
        instructions: 'Visualize trends over time using line charts.',
        tips: 'Use multiple lines to compare categories.',
      },
      {
        title: 'Design a dashboard',
        duration: 25,
        instructions: 'Combine multiple visualizations into a cohesive dashboard.',
        tips: 'Tell a story with your data.',
      },
    ],
    durationMinutes: 80,
    difficulty: 'Intermediate',
    ageBands: ['10-15', '15-20'],
    streamsPlus: ['Technology', 'Mathematics'],
    downloads: [
      {
        name: 'Visualization Best Practices',
        type: 'pdf',
        url: '/downloads/viz-best-practices.pdf',
      },
    ],
    teacherNotes: 'Students find data visualization very engaging. Real-world datasets make this very relevant.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Chart Accuracy',
          description: 'Are charts created correctly from data?',
          levels: [
            { level: 'Incorrect', points: 0 },
            { level: 'Mostly Correct', points: 2 },
            { level: 'Correct', points: 3 },
          ],
        },
        {
          name: 'Interpretation',
          description: 'Understanding of what data shows',
          levels: [
            { level: 'Weak', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Math:Class-9',
      'NGSS:MS-ETS1-2',
    ],
    tags: ['data', 'visualization', 'charts', 'analysis'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-006',
    slug: 'machine-learning-basics',
    title: 'Machine Learning: Classification Basics',
    description: 'Build your first machine learning model using real datasets.',
    kitId: 'kit-004',
    objectives: [
      'Understand ML concepts',
      'Prepare data',
      'Train a model',
      'Evaluate performance',
    ],
    materials: [
      'Jupyter Notebook environment',
      'Python with scikit-learn',
      'Dataset (iris or similar)',
    ],
    steps: [
      {
        title: 'Load and explore data',
        duration: 15,
        instructions: 'Load the iris dataset and explore its features.',
        tips: 'Use pandas for data manipulation.',
      },
      {
        title: 'Split train/test data',
        duration: 10,
        instructions: 'Divide data into training (80%) and testing (20%) sets.',
        tips: 'Use train_test_split from scikit-learn.',
      },
      {
        title: 'Train a decision tree',
        duration: 15,
        instructions: 'Create and train a decision tree classifier.',
        tips: 'Experiment with max_depth parameter.',
      },
      {
        title: 'Evaluate the model',
        duration: 20,
        instructions: 'Calculate accuracy, precision, recall, and F1-score.',
        tips: 'Use classification_report for comprehensive metrics.',
      },
    ],
    durationMinutes: 60,
    difficulty: 'Advanced',
    ageBands: ['15-20', '20-25'],
    streamsPlus: ['Technology', 'Mathematics'],
    downloads: [
      {
        name: 'ML Concepts Guide',
        type: 'pdf',
        url: '/downloads/ml-concepts.pdf',
      },
      {
        name: 'Jupyter Notebook',
        type: 'docx',
        url: '/downloads/ml-notebook.docx',
      },
    ],
    teacherNotes: 'An excellent introduction to machine learning. Students often find ML very exciting!',
    assessmentRubric: {
      criteria: [
        {
          name: 'Model Accuracy',
          description: 'Test set accuracy of the model',
          levels: [
            { level: '< 80%', points: 1 },
            { level: '80-90%', points: 2 },
            { level: '> 90%', points: 3 },
          ],
        },
        {
          name: 'Code Quality',
          description: 'Code organization and documentation',
          levels: [
            { level: 'Poor', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Math:Class-10',
      'NGSS:HS-ETS1-1',
    ],
    tags: ['machine-learning', 'ai', 'python', 'data-science'],
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-007',
    slug: 'design-thinking-workshop',
    title: 'Design Thinking Workshop',
    description: 'Apply design thinking methodology to solve real problems.',
    kitId: undefined, // Paper-only lesson
    objectives: [
      'Apply empathy in problem-solving',
      'Ideate creative solutions',
      'Prototype quickly',
      'Test with users',
    ],
    materials: [
      'Paper and markers',
      'Post-it notes',
      'Cardboard for prototyping',
      'User feedback forms',
    ],
    steps: [
      {
        title: 'Empathize',
        duration: 30,
        instructions: 'Interview 2-3 users to understand their problem deeply.',
        tips: 'Ask open-ended questions and listen carefully.',
      },
      {
        title: 'Define',
        duration: 20,
        instructions: 'Synthesize insights and create a clear problem statement.',
        tips: 'Frame it as "How might we...?"',
      },
      {
        title: 'Ideate',
        duration: 30,
        instructions: 'Brainstorm 20+ solutions without judgment. Go wild!',
        tips: 'Quantity over quality at this stage.',
      },
      {
        title: 'Prototype & Test',
        duration: 40,
        instructions: 'Build a quick prototype and get feedback from users.',
        tips: 'Failing fast is learning fast!',
      },
    ],
    durationMinutes: 120,
    difficulty: 'Intermediate',
    ageBands: ['15-20', '20-25'],
    streamsPlus: ['Engineering', 'Arts'],
    downloads: [
      {
        name: 'Design Thinking Guide',
        type: 'pdf',
        url: '/downloads/design-thinking.pdf',
      },
      {
        name: 'User Interview Template',
        type: 'docx',
        url: '/downloads/interview-template.docx',
      },
    ],
    teacherNotes: 'This workshop approach really engages students. Best done in groups.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Problem Understanding',
          description: 'Depth of empathy for users',
          levels: [
            { level: 'Shallow', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Deep', points: 3 },
          ],
        },
        {
          name: 'Solution Quality',
          description: 'Creativity and feasibility of solutions',
          levels: [
            { level: 'Derivative', points: 1 },
            { level: 'Novel', points: 2 },
            { level: 'Novel & Feasible', points: 3 },
          ],
        },
      ],
    },
    standards: [],
    tags: ['design', 'thinking', 'workshop', 'creativity'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-008',
    slug: 'web-development-html-css',
    title: 'Web Development: HTML & CSS Basics',
    description: 'Create your first website with HTML and CSS.',
    kitId: 'kit-008',
    objectives: [
      'Understand HTML structure',
      'Style with CSS',
      'Create a multi-page site',
      'Deploy to the web',
    ],
    materials: [
      'Code editor (VS Code)',
      'Browser',
      'GitHub account',
      'Hosting (Vercel/Netlify - free)',
    ],
    steps: [
      {
        title: 'Learn HTML basics',
        duration: 30,
        instructions: 'Create an HTML file with headings, paragraphs, links, and images.',
        tips: 'Use semantic HTML5 elements.',
      },
      {
        title: 'Style with CSS',
        duration: 40,
        instructions: 'Add CSS for colors, fonts, layouts, and responsive design.',
        tips: 'Use flexbox and grid for layouts.',
      },
      {
        title: 'Build multiple pages',
        duration: 30,
        instructions: 'Create a 3-page site (home, about, portfolio) with navigation.',
        tips: 'Link pages together properly.',
      },
      {
        title: 'Deploy online',
        duration: 20,
        instructions: 'Push to GitHub and deploy to Vercel or Netlify.',
        tips: 'Your site is now live on the internet!',
      },
    ],
    durationMinutes: 120,
    difficulty: 'Beginner',
    ageBands: ['10-15', '15-20'],
    streamsPlus: ['Technology'],
    downloads: [
      {
        name: 'HTML Tag Reference',
        type: 'pdf',
        url: '/downloads/html-reference.pdf',
      },
      {
        name: 'CSS Cheatsheet',
        type: 'pdf',
        url: '/downloads/css-cheatsheet.pdf',
      },
      {
        name: 'Project Template',
        type: 'docx',
        url: '/downloads/web-template.docx',
      },
    ],
    teacherNotes: 'Students love seeing their sites live on the internet. This is very motivating!',
    assessmentRubric: {
      criteria: [
        {
          name: 'HTML Structure',
          description: 'Correct and semantic HTML',
          levels: [
            { level: 'Incorrect', points: 1 },
            { level: 'Mostly Correct', points: 2 },
            { level: 'Perfect', points: 3 },
          ],
        },
        {
          name: 'Visual Design',
          description: 'Aesthetics and user experience',
          levels: [
            { level: 'Poor', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
      ],
    },
    standards: [],
    tags: ['web', 'development', 'html', 'css', 'beginner'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-009',
    slug: 'environmental-impact-assessment',
    title: 'Environmental Impact Assessment',
    description: 'Learn to evaluate the environmental footprint of products and systems.',
    kitId: 'kit-005',
    objectives: [
      'Understand life cycle assessment (LCA)',
      'Calculate carbon footprints',
      'Compare product impacts',
      'Design sustainable alternatives',
    ],
    materials: [
      'LCA software (provided)',
      'Product data sheets',
      'Calculation worksheets',
      'Case studies',
    ],
    steps: [
      {
        title: 'Learn LCA framework',
        duration: 20,
        instructions: 'Understand the 4 phases: goal, inventory, impact, interpretation.',
        tips: 'Review the provided case studies.',
      },
      {
        title: 'Choose a product',
        duration: 10,
        instructions: 'Select a common product to analyze (e.g., smartphone, cotton shirt).',
        tips: 'Pick something you use daily.',
      },
      {
        title: 'Calculate impacts',
        duration: 40,
        instructions: 'Use LCA software to calculate energy, water, and emissions across product lifecycle.',
        tips: 'Gather data from manufacturers when possible.',
      },
      {
        title: 'Design improvements',
        duration: 30,
        instructions: 'Identify 3 ways to reduce environmental impact and recalculate.',
        tips: 'Consider materials, manufacturing, packaging, transport, end-of-life.',
      },
    ],
    durationMinutes: 100,
    difficulty: 'Advanced',
    ageBands: ['15-20', '20-25'],
    streamsPlus: ['Sustainability', 'Science', 'Engineering'],
    downloads: [
      {
        name: 'LCA Guide',
        type: 'pdf',
        url: '/downloads/lca-guide.pdf',
      },
      {
        name: 'Case Studies',
        type: 'pdf',
        url: '/downloads/case-studies.pdf',
      },
    ],
    teacherNotes: 'This lesson really opens students\' eyes to environmental considerations in design.',
    assessmentRubric: {
      criteria: [
        {
          name: 'LCA Accuracy',
          description: 'Correctness of impact calculations',
          levels: [
            { level: '< 50%', points: 1 },
            { level: '50-80%', points: 2 },
            { level: '> 80%', points: 3 },
          ],
        },
        {
          name: 'Solutions Quality',
          description: 'Feasibility and impact of proposed improvements',
          levels: [
            { level: 'Unrealistic', points: 1 },
            { level: 'Possible', points: 2 },
            { level: 'Excellent', points: 3 },
          ],
        },
      ],
    },
    standards: [
      'NGSS:HS-ETS1-1',
    ],
    tags: ['sustainability', 'environment', 'design', 'impact'],
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-010',
    slug: 'creative-writing-storytelling',
    title: 'Creative Writing & Storytelling',
    description: 'Develop narrative skills through project-based storytelling.',
    kitId: undefined, // Paper-only lesson
    objectives: [
      'Develop character and plot',
      'Write compelling narratives',
      'Use dialogue effectively',
      'Share stories with audiences',
    ],
    materials: [
      'Notebook or computer',
      'Story templates',
      'Character worksheets',
      'Presentation tools',
    ],
    steps: [
      {
        title: 'Brainstorm ideas',
        duration: 20,
        instructions: 'Use story prompts or personal experiences to generate story ideas.',
        tips: 'Write down at least 5 potential stories.',
      },
      {
        title: 'Develop characters',
        duration: 20,
        instructions: 'Create detailed character profiles with backgrounds and motivations.',
        tips: 'Make characters believable and relatable.',
      },
      {
        title: 'Outline the plot',
        duration: 20,
        instructions: 'Structure your story with setup, conflict, and resolution.',
        tips: 'Use a three-act structure.',
      },
      {
        title: 'Write and revise',
        duration: 40,
        instructions: 'Write your first draft, then edit for clarity, grammar, and impact.',
        tips: 'Read aloud to catch awkward sentences.',
      },
      {
        title: 'Share your story',
        duration: 20,
        instructions: 'Present your story to the class or upload to a platform.',
        tips: 'Get feedback and learn from peer responses.',
      },
    ],
    durationMinutes: 120,
    difficulty: 'Intermediate',
    ageBands: ['5-10', '10-15'],
    streamsPlus: ['Arts'],
    downloads: [
      {
        name: 'Story Template',
        type: 'docx',
        url: '/downloads/story-template.docx',
      },
      {
        name: 'Character Worksheet',
        type: 'pdf',
        url: '/downloads/character-sheet.pdf',
      },
    ],
    teacherNotes: 'A wonderful way to encourage creativity and self-expression.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Character Development',
          description: 'Depth and believability of characters',
          levels: [
            { level: 'Flat', points: 1 },
            { level: 'Adequate', points: 2 },
            { level: 'Rich', points: 3 },
          ],
        },
        {
          name: 'Plot Structure',
          description: 'Clear beginning, middle, end',
          levels: [
            { level: 'Unclear', points: 1 },
            { level: 'Clear', points: 2 },
            { level: 'Compelling', points: 3 },
          ],
        },
      ],
    },
    standards: [
      'CBSE:Science:Class-6',
    ],
    tags: ['writing', 'storytelling', 'creativity', 'arts'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-011',
    slug: 'entrepreneurship-101',
    title: 'Entrepreneurship 101: From Idea to Launch',
    description: 'Learn the fundamentals of starting a business or social enterprise.',
    kitId: undefined, // Paper-only lesson
    objectives: [
      'Identify market opportunities',
      'Develop a business model',
      'Create a pitch deck',
      'Plan for launch',
    ],
    materials: [
      'Business model template',
      'Market research guide',
      'Pitch deck template',
      'Financial planning worksheet',
    ],
    steps: [
      {
        title: 'Identify the problem',
        duration: 30,
        instructions: 'Find a problem you\'re passionate about solving.',
        tips: 'Interview potential customers to validate the problem.',
      },
      {
        title: 'Design your solution',
        duration: 30,
        instructions: 'Create your product or service MVP (Minimum Viable Product).',
        tips: 'Keep it simple for version 1.0.',
      },
      {
        title: 'Develop business model',
        duration: 40,
        instructions: 'Define how you\'ll make money, who your customers are, and key resources.',
        tips: 'Use the Business Model Canvas.',
      },
      {
        title: 'Create a pitch',
        duration: 30,
        instructions: 'Build a 10-slide pitch deck for potential investors or customers.',
        tips: 'Tell your story, show the problem, present your solution.',
      },
      {
        title: 'Plan your launch',
        duration: 30,
        instructions: 'Outline first steps, milestones, and metrics for success.',
        tips: 'Be specific about the first 90 days.',
      },
    ],
    durationMinutes: 160,
    difficulty: 'Advanced',
    ageBands: ['15-20', '20-25'],
    streamsPlus: ['Technology'],
    downloads: [
      {
        name: 'Business Model Canvas',
        type: 'pdf',
        url: '/downloads/bmc.pdf',
      },
      {
        name: 'Pitch Deck Template',
        type: 'docx',
        url: '/downloads/pitch-template.docx',
      },
    ],
    teacherNotes: 'This lesson can be combined with the Sustainable Design kit for social enterprises.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Problem Validation',
          description: 'Evidence that problem is real and significant',
          levels: [
            { level: 'Weak', points: 1 },
            { level: 'Good', points: 2 },
            { level: 'Strong', points: 3 },
          ],
        },
        {
          name: 'Business Model Viability',
          description: 'Realistic and sustainable revenue model',
          levels: [
            { level: 'Unrealistic', points: 1 },
            { level: 'Possible', points: 2 },
            { level: 'Viable', points: 3 },
          ],
        },
      ],
    },
    standards: [],
    tags: ['entrepreneurship', 'business', 'planning', 'pitch'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'lesson-012',
    slug: 'data-ethics-privacy',
    title: 'Data Ethics & Privacy in the Digital Age',
    description: 'Understand the ethical and legal considerations around data collection and use.',
    kitId: undefined, // Paper-only lesson
    objectives: [
      'Understand data privacy rights',
      'Analyze ethical dilemmas',
      'Apply privacy best practices',
      'Advocate for ethical data use',
    ],
    materials: [
      'Case studies',
      'Privacy policy templates',
      'Ethical frameworks guide',
      'Data security checklist',
    ],
    steps: [
      {
        title: 'Learn privacy regulations',
        duration: 20,
        instructions: 'Understand GDPR, CCPA, and local privacy laws.',
        tips: 'Compare regulations from different countries.',
      },
      {
        title: 'Analyze ethical scenarios',
        duration: 40,
        instructions: 'Discuss real-world data ethics dilemmas (social media, tracking, AI bias).',
        tips: 'Consider multiple stakeholder perspectives.',
      },
      {
        title: 'Review privacy practices',
        duration: 30,
        instructions: 'Evaluate privacy policies and data practices of popular apps/sites.',
        tips: 'Identify red flags and best practices.',
      },
      {
        title: 'Design ethical data practices',
        duration: 30,
        instructions: 'Create privacy-first design for a hypothetical application.',
        tips: 'Apply consent, transparency, and security principles.',
      },
    ],
    durationMinutes: 120,
    difficulty: 'Advanced',
    ageBands: ['15-20', '20-25'],
    streamsPlus: ['Technology'],
    downloads: [
      {
        name: 'Privacy Regulations Summary',
        type: 'pdf',
        url: '/downloads/privacy-regs.pdf',
      },
      {
        name: 'Case Studies Collection',
        type: 'pdf',
        url: '/downloads/case-studies-ethics.pdf',
      },
    ],
    teacherNotes: 'An important lesson for digital literacy. Very relevant to student interests.',
    assessmentRubric: {
      criteria: [
        {
          name: 'Ethical Reasoning',
          description: 'Quality of ethical analysis',
          levels: [
            { level: 'Superficial', points: 1 },
            { level: 'Thoughtful', points: 2 },
            { level: 'Nuanced', points: 3 },
          ],
        },
        {
          name: 'Solution Design',
          description: 'Practical and ethical data practices',
          levels: [
            { level: 'Incomplete', points: 1 },
            { level: 'Adequate', points: 2 },
            { level: 'Comprehensive', points: 3 },
          ],
        },
      ],
    },
    standards: [],
    tags: ['ethics', 'privacy', 'data', 'security', 'digital-citizenship'],
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
