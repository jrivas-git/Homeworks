import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { db } from "../Firebase/config";
import type { Game, GameInput } from "../Types/Game";

const gamesRef = collection(db, "games");

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      gamesRef,
      (snapshot) => {
        const list = snapshot.docs.map((item) => ({
          id: item.id,
          ...(item.data() as Omit<Game, "id">),
        }));

        setGames(list);
        setLoading(false);
      },
      (err) => {
        console.error("Firestore error:", err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const addGame = async (game: GameInput) => {
    await addDoc(gamesRef, game);
  };

  const updateGame = async (id: string, game: Partial<GameInput>) => {
    await updateDoc(doc(db, "games", id), game);
  };

  const deleteGame = async (id: string) => {
    await deleteDoc(doc(db, "games", id));
  };

  return {
    games,
    loading,
    error,
    addGame,
    updateGame,
    deleteGame,
  };
};