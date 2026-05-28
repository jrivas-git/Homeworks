import { useMemo, useState } from "react";
import GameGrid from "../Components/Games/GameGrid";
import SearchBar from "../Components/Shared/SearchBar";
import Loader from "../Components/Shared/Loader";
import { useGames } from "../Hooks/useGames";
import { SearchTrie } from "../Structures/Trie/SearchTrie";
import { filterGames } from "../Helpers/filterGames";

export default function Store() {
  const { games, loading, error } = useGames();
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const trie = useMemo(() => {
    const t = new SearchTrie();
    games.forEach((game) => t.insert(game.title, game));
    return t;
  }, [games]);

  const searchedGames = useMemo(() => {
    if (!search.trim()) return games;
    return trie.search(search);
  }, [search, games, trie]);

  const visibleGames = useMemo(() => {
    return filterGames(searchedGames, {
      genre: genre || undefined,
      platform: platform || undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  }, [searchedGames, genre, platform, maxPrice]);

  if (loading) return <Loader />;
  if (error) return <p className="muted">Error cargando juegos: {error}</p>;

  const genres = [...new Set(games.map((game) => game.genre))];
  const platforms = [...new Set(games.map((game) => game.platform))];

  return (
    <div className="store">
      <h1>Store</h1>

      <div className="filters">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by prefix..."
        />

        <select
          className="select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All genres</option>
          {genres.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          className="select"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="">All platforms</option>
          {platforms.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          className="input"
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <GameGrid games={visibleGames} />
    </div>
  );
}