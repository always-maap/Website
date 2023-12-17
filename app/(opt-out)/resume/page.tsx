import Education from "./Education";
import Header from "./Header";
import Work from "./Work";

export default function Resume() {
  return (
    <div className="bg-white p-8 container max-w-6xl mx-auto">
      <Header />
      <hr className="my-4" />
      <Work />
      <Education />
    </div>
  );
}
