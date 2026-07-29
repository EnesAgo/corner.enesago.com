export interface HateItem {
  thing: string;
  rant: string;
  emoji: string;
  rage: 1 | 2 | 3 | 4 | 5; // 🔥 scale
  color: string;
}

export const hateItems: HateItem[] = [
  {
    thing: 'GERMAN BUREAUCRACY',
    rant: 'you just need one simple thing. somehow it becomes 10 documents, 3 appointments, and a waiting time nobody can explain.',
    emoji: '🏛️',
    rage: 5,
    color: '#FFE500',
  },
  {
    thing: '"AI WILL TAKE YOUR JOB"',
    rant: "usually said by someone who doesn't know how anything works. using AI is easy. knowing what to build is the hard part.",
    emoji: '🤖',
    rage: 4,
    color: '#00C8FF',
  },
  {
    thing: 'LIARS',
    rant: 'just tell the truth. a bad reality is better than a fake story.',
    emoji: '🤥',
    rage: 5,
    color: '#FF2D78',
  },
  {
    thing: 'LOGIN TO READ ONE PAGE',
    rant: 'i came here for information, not to create another account (you will visit the site only once in your life).',
    emoji: '🔐',
    rage: 4,
    color: '#00FF88',
  },
  {
    thing: 'PEOPLE WHO PRETEND THEY KNOW EVERYTHING',
    rant: "confidence is great. pretending to understand something you don't is not.",
    emoji: '🧠',
    rage: 4,
    color: '#9B59FF',
  },
  {
    thing: 'GERMANY CLOSING EVERYTHING AT 8 PM',
    rant: 'finally remembered to buy something. arrived at 19:58. the door is already closed.',
    emoji: '🕗',
    rage: 4,
    color: '#FF6B00',
  },
  {
    thing: 'NO THANK YOU',
    rant: 'i helped you. it took you 2 seconds to say thanks. somehow that was still too difficult.',
    emoji: '🙏',
    rage: 3,
    color: '#00C8FF',
  },
  {
    thing: 'BORING GREY UI',
    rant: 'every app decided personality was a bad idea. everything is now a white background with rounded rectangles.',
    emoji: '🩶',
    rage: 4,
    color: '#888',
  },
  {
    thing: 'SKATEPARK TOURISTS',
    rant: 'the ramp is not a chair. the skatepark is not a walking path. please move.',
    emoji: '🛹',
    rage: 4,
    color: '#00FF88',
  },
  {
    thing: 'THE 100TH PIANO TAKE',
    rant: 'the whole song was perfect. one note was slightly wrong. time to record it another 50 times.',
    emoji: '🎹',
    rage: 3,
    color: '#9B59FF',
  },
  {
    thing: "NIGHTS WHEN YOU CAN'T SLEEP",
    rant: "you're exhausted all day. the moment your head touches the pillow, your brain suddenly wants to replay every conversation since 2014.",
    emoji: '🌙',
    rage: 3,
    color: '#00C8FF',
  },
  {
    thing: 'DEUTSCHE BAHN',
    rant: "the timetable is more of a suggestion. if you miss your train, don't worry — you'll catch the previous one.",
    emoji: '🚆',
    rage: 5,
    color: '#9B59FF',
  },
];
