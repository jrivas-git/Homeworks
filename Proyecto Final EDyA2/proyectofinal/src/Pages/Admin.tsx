import { useMemo, useState } from "react";
import { seedGames } from "../Helpers/seedGames";
import { useGames } from "../Hooks/useGames";
import type { GameInput } from "../Types/Game";
import Loader from "../Components/Shared/Loader";

const emptyForm: GameInput = {
  title: "",
  genre: "",
  platform: "",
  price: 0,
  image: "",
  popularity: 0,
  description: "",
};

export default function Admin() {
  const { games, loading, addGame, updateGame, deleteGame } = useGames();
  const [form, setForm] = useState<GameInput>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (field: keyof GameInput, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    if (editingId) {
      await updateGame(editingId, form);
    } else {
      await addGame(form);
    }
    resetForm();
  };

  const handleEdit = (id: string) => {
    const game = games.find((item) => item.id === id);
    if (!game) return;

    setForm({
      title: game.title,
      genre: game.genre,
      platform: game.platform,
      price: game.price,
      image: game.image,
      popularity: game.popularity,
      description: game.description,
    });

    setEditingId(id);
  };

  const handleSeed = async () => {
    for (const game of seedGames) {
      await addGame(game);
    }
  };

  const totalGames = useMemo(() => games.length, [games]);

  if (loading) return <Loader />;

  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <p className="muted">Total games: {totalGames}</p>

      <div className="admin-form">
        <input
          className="input"
          placeholder="Title"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <input
          className="input"
          placeholder="Genre"
          value={form.genre}
          onChange={(e) => handleChange("genre", e.target.value)}
        />
        <input
          className="input"
          placeholder="Platform"
          value={form.platform}
          onChange={(e) => handleChange("platform", e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => handleChange("price", Number(e.target.value))}
        />
        <input
          className="input"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => handleChange("image", e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Popularity"
          value={form.popularity}
          onChange={(e) => handleChange("popularity", Number(e.target.value))}
        />
        <textarea
          className="input"
          placeholder="Description"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <div className="card-actions">
          <button className="btn" onClick={handleSubmit}>
            {editingId ? "Update" : "Create"}
          </button>
          <button className="btn btn-secondary" onClick={resetForm}>
            Clear
          </button>
          <button className="btn btn-secondary" onClick={handleSeed}>
            Load sample games
          </button>
        </div>
      </div>

      <div className="admin-list">
        {games.map((game) => (
          <div key={game.id} className="admin-row">
            <span>{game.title}</span>
            <div className="card-actions">
              <button className="btn btn-secondary" onClick={() => handleEdit(game.id)}>
                Edit
              </button>
              <button className="btn btn-secondary" onClick={() => deleteGame(game.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}