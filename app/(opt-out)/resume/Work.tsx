const content = {
  zoomit: {
    name: "Zoomit",
    description: (
      <div>
        Zoomit (the parent company of Zoomit, Zoomg, Kojaro, and Pedal) is Iran's largest technology media group,
        receiving over 10 million monthly visits and millions of followers on various social media platforms(Instagram,
        Telegram, Twitter). We decided to rewrite the organization to achieve a unified design and ease the future
        development and maintainability.
      </div>
    ),
    location: "Tehran, Iran",
    position: "Technical Lead",
    date: "Apr 2021 - Present",
    list: ["Hiring manager, Code review, Technical decisions, etc."],
  },
  igap: {
    name: "iGap Messenger",
    description: <div>iGap is a free and partially open-source instant messaging application</div>,
    location: "Tehran, Iran",
    position: "Software Engineer",
    date: "Aug 2020 - Apr 2021",
    list: [
      "Rewriting the web client of iGap messenger with React, Typescript, Redux, WebSocket, and Material-Ui. I wrote around 40% of the codebase. Structure Redux and other Logics. Converting class components to functional, groups, channels, forward the message, iLand, authentication pages, setting tab, sticker, animated stickers, message boxes, reusable components, and utils are part of my job.",
      "Helping maintain Parisian-club",
      "Writing some part of iGap Doc with Docusaurus v2, MDX, React",
    ],
  },
  mineTaxi: {
    name: "MineTaxi",
    description: <div>MineTaxi is a ridesharing startup. Great first step as a developer</div>,
    location: "Tehran, Iran",
    position: "Software Engineer",
    date: "Apr 2020 - Jul 2020",
    list: [
      "Building an E-commerce website from the ground up",
      "React for building user interfaces and Sass for styling",
      "Using Redux for state management and cart functionality",
    ],
  },
};

export default function Work() {
  return (
    <div>
      <h2 className="font-bold text-xl mt-4 mb-2">WORK EXPERIENCE</h2>
      {Object.keys(content).map((key: keyof typeof content) => {
        const item = content[key];
        return (
          <div key={item.name} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-right">{item.location}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="italic">{item.position}</p>
              <p className="text-right italic">{item.date}</p>
            </div>
            {item.description && <div className="mb-2">{item.description}</div>}
            <ul className="list-disc ml-5">
              {item.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
