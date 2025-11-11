import FormField from "./FormField";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import BasicDatePicker from "./DatePicker";

export default function AuditeeDetails({ agentName }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [duration, setDuration] = useState({
    hours: 0,
    minutes: 0,
  });

  const onChange = (duration) => {
    const { hours, minutes } = duration;
    setDuration({ hours, minutes });
  };

  return (
    <div className="row-span-full col-start-1 col-end-2  bg-softBlue border-r border-r-accent/20 borderoverflow-y-auto overflow-x-hidden px-[1vh] py-1.5">
      <div className="flex text-center flex-row justify-center mt-1 relative cursor-pointer">
        <div className=" font-bold ">
          <div className="text-lg text-textPrimary">{agentName}</div>
          <div className="text-sm text-textSecondary">Position Here</div>
        </div>
      </div>
      <div className="text-center text-textSecondary m-2 text-xs">LOB Here</div>
      <div className="p-2.5 text-lg ">
        <div className="flex flex-row items-end justify-between">
          <div className="text-center">
            <input
              className="w-28 text-4xl outline-none border-0 bg-transparent text-center text-textPrimary font-medium tracking-[2px] leading-3"
              type="text"
              id="qaScore"
              name="qaScore"
              value="0"
              readOnly
            />
            <div className="text-xs text-textSecondary">
              Customer Experience
            </div>
          </div>
          <div className="text-center">
            <input
              className="w-28 text-4xl outline-none border-0 bg-transparent text-center text-textPrimary font-medium tracking-[2px] leading-3"
              type="text"
              id="Compliance"
              name="Compliance"
              value="0"
              readOnly
            />
            <div className="text-xs text-textSecondary">Compliance</div>
          </div>
        </div>
      </div>
      <div className="border-b border-b-accent/20 text-textPrimary text-base font-medium pl-1 ">
        Audit Details
      </div>
      <div className="flex flex-col p-1">
        <Box className="w-full ">
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">
              Audit Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              className="h-12 text-sm"
              onChange={handleChange}
            >
              <MenuItem value={"TL - Regular"}>TL - Regular</MenuItem>
              <MenuItem value={"QA - Regular"}>QA - Regular</MenuItem>
              <MenuItem value={"QA Regular - 1P"}>QA Regular - 1P</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="border-b border-b-accent/20 text-textPrimary text-base font-medium pl-1 ">
        Account Details
      </div>
      <div className="flex flex-col p-1">
        <TextField
          id="filled-basic"
          label="CID / Account #"
          variant="filled"
          size="400px"
          color="secondary"
          className="w-full h-12"
        />
        <FormControl variant="filled" className="w-full">
          <InputLabel id="bizType-label">Account Type</InputLabel>
          <Select
            labelId="bizType-label"
            id="bizType"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={"Sole Trader"}>Sole Trader</MenuItem>
            <MenuItem value={"Company"}>Company</MenuItem>
            <MenuItem value={"Residential"}>Residential</MenuItem>
            <MenuItem value={"NA"}>NA</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="border-b border-b-accent/20 text-textPrimary text-base font-medium pl-1 ">
        Interaction Details
      </div>
      <div className="flex flex-col p-1 gap-1.5">
        <FormControl variant="filled" className="w-full">
          <InputLabel id="interactionType-label">Account Type</InputLabel>
          <Select
            labelId="interactionType-label"
            id="interactionType"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={"Call - inbound"}>Call - inbound</MenuItem>
            <MenuItem value={"Live Chat"}>Live Chat</MenuItem>
            <MenuItem value={"Email"}>Email</MenuItem>
            <MenuItem value={"Case Management"}>Case Management</MenuItem>
            <MenuItem value={"Call - Outbound"}>Call - Outbound</MenuItem>
            <MenuItem value={"Call & Chat"}>Call & Chat</MenuItem>
            <MenuItem value={"Call & Case management"}>
              Call & Case management
            </MenuItem>
            <MenuItem value={"Call back / follow up"}>
              Call back / follow up
            </MenuItem>
          </Select>
        </FormControl>

        <BasicDatePicker label={"interactionDate"} />
        <FormField
          label="Genesys Interaction ID: (if Applicable) "
          id="interactionID"
          name="interactionID"
        />
        <FormField
          label="Genesys External ID: "
          id="externalID"
          name="externalID"
        />

        <div className="inline-block rounded-sm text-gray-100"></div>
      </div>
    </div>
  );
}
