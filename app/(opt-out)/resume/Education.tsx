const content = {
  name: "Noshirvani Institue Of Technology",
  location: "Babol, Iran",
  degree: "BSc. Computer Engineering",
  date: "2019 - 2023",
  list: [
    "Developed and maintained NIT Academy",
    "Wrote a thesis on the topic of MicroVMs and firecracker",
    "TA for web programming course",
    "Read a bunch of books about compilers and developed one with Rust",
  ],
};

export default function Education() {
  return (
    <div>
      <h2 className="font-bold text-xl mt-4 mb-2">EDUCATION</h2>
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">{content.name}</h3>
          <p className="italic">{content.degree}</p>
          <ul className="list-disc ml-5">
            {content.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="text-right">
          <p>{content.location}</p>
          <p>{content.date}</p>
        </div>
      </div>
    </div>
  );
}
