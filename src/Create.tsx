const Create = () => {
  return (
    <div className="create">
      <h2>+ Add new blog</h2>
      <form action="">
        <label htmlFor="">Title:</label>
        <input type="text" required />

        <label htmlFor="">Author:</label>
        <input type="text" required />

        <label htmlFor="">Blog content:</label>
        <textarea name="" id="" cols="30" rows="10" required></textarea>

        <select name="" id="">
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>

        <button>Save blog</button>
      </form>
    </div>
  );
};

export default Create;
