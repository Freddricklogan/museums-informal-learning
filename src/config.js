/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Museums & Informal Learning',
  tagline: 'A graduate-level guide to learning in free-choice settings — museums, science centres, zoos, libraries and media: the Contextual Model of Learning, the NRC’s six strands, Falk’s visitor identities, exhibit design, facilitation, evaluation and equity, with a visitor identity explorer and an exhibit design self-check.',
  repo: 'https://github.com/Freddricklogan/museums-informal-learning',
  pagesUrl: 'https://freddricklogan.github.io/museums-informal-learning/',
  quizTitle: 'Five questions on informal learning',
  quiz: [
    {
      id: 'freechoice',
      prompt: 'Which feature does the resource treat as defining for informal learning?',
      options: ['It happens only in museums', 'It is free-choice: the learner controls what, when and whether to engage', 'It is assessed by a certificate', 'It follows a fixed sequence'],
      answer: 1,
      explanation: 'Informal learning is free-choice, self-directed and non-sequential, driven by the learner’s interests and identity; the resource notes it is where most of a person’s lifetime learning happens, far beyond the hours spent in classrooms.'
    },
    {
      id: 'cml',
      prompt: 'What are the three contexts in Falk and Dierking’s Contextual Model of Learning?',
      options: ['Cognitive, affective, psychomotor', 'Personal, sociocultural, physical — interacting over time', 'Formal, non-formal, informal', 'Entry, exhibit, exit'],
      answer: 1,
      explanation: 'The model frames a museum experience as the interaction of the personal context (who the learner already is), the sociocultural context (who they learn with) and the physical context (the setting), playing out cumulatively over time.'
    },
    {
      id: 'identity',
      prompt: 'A parent visits a science centre mainly so her children will have a good learning experience. Which of Falk’s visitor identities is she enacting?',
      options: ['Explorer', 'Facilitator', 'Professional/Hobbyist', 'Recharger'],
      answer: 1,
      explanation: 'Facilitators are socially motivated: the visit is for the learning and experience of someone they care about. Explorers follow their own curiosity, professionals and hobbyists come with specific expertise, and rechargers seek a restorative experience.'
    },
    {
      id: 'holding',
      prompt: 'Which two behavioural measures does the resource say dominate exhibit evaluation?',
      options: ['Ticket price and revenue', 'Attracting power and holding power, with dwell time as a proxy for engagement', 'Test scores before and after', 'Number of labels read'],
      answer: 1,
      explanation: 'Attracting power asks whether an exhibit stops people; holding power asks how long they stay. Dwell time stands in for engagement, and Active Prolonged Engagement pushes design toward visitors investigating rather than pressing one button.'
    },
    {
      id: 'evaluation',
      prompt: 'In what order do the three evaluation phases run in exhibit development?',
      options: ['Summative, formative, front-end', 'Front-end before design, formative during development, summative after opening', 'Formative, front-end, summative', 'Only summative, after opening'],
      answer: 1,
      explanation: 'Front-end evaluation studies what the audience brings before anything is built; formative evaluation tests prototypes as the exhibit develops; summative evaluation asks after opening whether it worked, with free-choice outcomes that resist tidy classroom measures.'
    }
  ]
};
