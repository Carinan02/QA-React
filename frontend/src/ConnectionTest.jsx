import axios from "axios";
import { useEffect } from "react";

export default function ConnectionTest() {
  useEffect(() => {
    axios
      .get("/api/")
      .then((res) => alert(res.data))
      .catch((err) => console.error("❌ Connection error:", err));
  }, []);

  return <h1>Check console for connection test</h1>;
}
