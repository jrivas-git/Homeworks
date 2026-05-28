import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useGames } from "../Hooks/useGames";
import Loader from "../Components/Shared/Loader";
import GameGrid from "../Components/Games/GameGrid";
import { PopularGamesHeap } from "../Structures/Heap/PopularGamesHeap";

export default function Home() {
  const { games, loading } = useGames();

  const topGames = useMemo(() => {
    const heap = new PopularGamesHeap(games);
    return heap.getTop(3);
  }, [games]);

  if (loading) return <Loader />;

  return (
    <div className="home">
      <section className="hero">
        <h1>Mini Game Store</h1>
        <p>Discover games, save favorites, and buy your next adventure.</p>
        <div className="hero-actions">
          <Link className="btn" to="/store">
            Go to store
          </Link>
          <Link className="btn btn-secondary" to="/login">
            Login
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Top games</h2>
        <GameGrid games={topGames} />
      </section>
    </div>
  );
}