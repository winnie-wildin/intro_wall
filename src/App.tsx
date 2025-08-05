import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import IntroCard from "./components/IntroCard";
import IntroForm from "./components/IntroForm";

interface Intro {
  id: string;
  name: string;
  intro: string;
}

function App() {
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
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">👋 Introduce Yourself</h1>
      <IntroForm />
      <div className="grid gap-3">
        {intros.map((intro) => (
          <IntroCard key={intro.id} name={intro.name} intro={intro.intro} />
        ))}
      </div>
    </div>
  );
}

export default App;
