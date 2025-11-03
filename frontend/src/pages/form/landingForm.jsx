import { useState } from "react";

const agentList = ['Nico','Ben','G','Elay'];
export default function LandingForm() {
    const [agentName, setAgentName] = useState("");
    return (<div className="p-6 flex justify-center">
        <div>
        <label htmlFor="AgentList" className="block mb-2 font-medium">Select Agent</label>
        <input list = "agentList" name="AgentName" id="AgentName" value={agentName} onChange={(e) => setAgentName(e.target.value)} className="border rounded p-2 w-64" />
        <datalist id="agentList">
           {agentList.map((agent, index) => (
            <option key={index} value={agent} />
            ))}
        </datalist>
        </div>
    </div>)
}