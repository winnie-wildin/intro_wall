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
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Intro, "id">),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 p-6 max-w-6xl mx-auto">


      {intros.map((intro) => (
        <div key={intro.id}>
          <IntroCard name={intro.name} intro={intro.intro} />
        </div>
      ))}
    </div>
  );


};

export default IntroWall;
