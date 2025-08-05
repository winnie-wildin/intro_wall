import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import IntroCard from "./IntroCard";

interface Intro {
  id: string;
  name: string;
  intro: string;
}

const IntroWall = () => {
  const [intros, setIntros] = useState<Intro[]>([]);

  useEffect(() => {
    const q = query(collection(db, "introductions"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setIntros(
        snapshot.docs.map((doc, i) => ({
          id: doc.id,
          ...(doc.data() as Omit<Intro, "id">),
          index: i, // for CSS variable
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {intros.map((intro, i) => (
        <div key={intro.id} style={{ "--i": i } as React.CSSProperties}>
          <IntroCard name={intro.name} intro={intro.intro} />
        </div>
      ))}
    </div>
  );
};

export default IntroWall;
