import { useState, useEffect } from "react";
import { UserRoundSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";

const agentList = [
  "Nico G. Carinan",
  "Ben St. John",
  "Gerard Diza",
  "Eliza Karunungan",
];
const formTypes = [
  "dodo_Salesv5",
  "iPrimus_Salesv5",
  "DPG_Servicev5",
  "dodo_Servicev5",
  "iPrimus_Servicev5",
  "dodo_Techv5",
  "iPrimus_Techv5",
  "dodo_Activationv5",
  "iPrimus_Activationsv5",
  "Hardshipv5",
  "Back_Of_Housev5",
  "Credit_Solutionsv5",
];

export default function LandingForm() {
  const navigate = useNavigate();
  const [formName, setFormName] = useState("");
  const [agentName, setAgentName] = useState("");
  const [flash, setFlash] = useState(""); // 🔔 flash message
  const [fade, setFade] = useState(false); // for fade-out animation

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agentName.trim() && !formName) {
      setFlash("Please enter agent name and select a form type.");
      return;
    }

    if (!agentName.trim()) {
      setFlash("Please enter agent name.");
      return;
    }

    if (!formName) {
      setFlash("Please select a form type.");
      return;
    }

    navigate(`/form/${agentName}/${formName}`);
  };

  // 🕒 Auto-hide after 5 seconds with fade-out effect
  useEffect(() => {
    if (flash) {
      setFade(false);
      const fadeTimer = setTimeout(() => setFade(true), 4500); // fade starts at 4.5s
      const clearTimer = setTimeout(() => setFlash(""), 5000); // remove at 5s
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [flash]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      {flash && (
        <div
          className={`absolute bottom-12 right-12 h-20 px-6 py-3 rounded-lg shadow-lg bg-red-100 text-red-700 
                flex items-center justify-center text-center transition-opacity duration-500
                ${fade ? "opacity-0" : "opacity-100"}`}
        >
          <span>{flash}</span>
        </div>
      )}
      <h1 className="text-5xl font-semibold mb-8 text-gray-800">Audit</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition pl-2"
      >
        <UserRoundSearch />
        <input
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus=""
          spellCheck="false"
          list="agentList"
          name="AgentName"
          id="AgentName"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          className="flex-grow px-6 py-3 rounded-l-full text-gray-700 focus:outline-none"
        />

        <datalist id="agentList">
          {agentList.map((agent, index) => (
            <option key={index} value={agent} />
          ))}
        </datalist>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 hover:cursor-pointer transition">
          Search
        </button>
      </form>
      <div className="flex flex-wrap gap-4 p-6 justify-center ">
        {formTypes.map((type) => (
          <div
            key={type}
            onClick={() => setFormName(type)}
            className={`bg-gray-50 border-blue-300  basis-[calc(20%-1rem)] cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all text-center w-40  
            ${
              formName === type
                ? "border-blue-500 bg-blue-50 text-blue-600 shadow-md"
                : "hover:border-blue-300 "
            }`}
          >
            <h3 className="font-medium text-lg">{type}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
