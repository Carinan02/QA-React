import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import TopNavigation from "../topNavigation/TopNavigation";
import AuditeeDetails from "./AuditeeDetails";

export default function FormPage() {
  const { agentName, formName } = useParams();
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get(`/api/forms/getAreas/${formName}`);
        setAreas(response.data);
      } catch (error) {
        console.error("An error occurred while fetching areas:", error);
      }
    };

    fetchAreas();
  }, [formName]); // runs only when formName changes

  return (
    <div className="grid grid-cols-1 grid-rows-[3vw_1fr] gap-0 h-screen w-full">
      <TopNavigation view="Audit" />

      <div className="row-start-2 -row-end-1 col-span-full overflow-hidden">
        <div className="grid grid-cols-[25vw_1fr] h-full">
          <AuditeeDetails agentName={agentName} />
          <div
            className="row-span-full col-start-2 -col-end-1 bg-offwhite overflow-y-auto 
           "
          >
            <div className="h-[200vh] p-4">Scrollable content only here</div>
          </div>
        </div>
      </div>
    </div>
  );
}
