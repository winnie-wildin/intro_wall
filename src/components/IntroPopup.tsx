import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const IntroPopup = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !intro) return;

    await addDoc(collection(db, "introductions"), {
      name,
      intro,
      timestamp: Timestamp.now(),
    });

    setShowPopup(false); // close popup after submit
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg space-y-4 w-80">
        <h2 className="text-xl font-bold">Introduce Yourself</h2>
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
      </div>
    </div>
  );
};

export default IntroPopup;
