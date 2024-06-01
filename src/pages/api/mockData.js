// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const overview = [

];

export const galleries = [
  {
    image: "/placeholders/gamedev.jpg",
    href: "/developer",
    title: "CodeMadness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?",
    fontFamily: "Anton",
    fontSize: "22px",
  },
  {
    href: "/podcaster",
    image: "/placeholders/podcastoffice.png",
    title: "Talking Sh*t",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?",
    fontFamily: "Righteous",
  },
  {
    href: "/illustrator",
    image: "/placeholders/nicedraw.jpg",
    title: "Magnum Opus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?",
    fontFamily: "Lobster Two",
  },
];
