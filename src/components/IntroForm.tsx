import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const IntroForm = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !intro) return;

    await addDoc(collection(db, "introductions"), {
      name,
      intro,
      timestamp: Timestamp.now(),
    });

    setName("");
    setIntro("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Your Intro"
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default IntroForm;
