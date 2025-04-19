
const Profile = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="border" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="name" name="name" className="border" required />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="border" required />
        </div>
        <div>
          <label htmlFor="photo">Photo</label>
          <input type="text" id="photo" name="photo" className="border" required />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" className="border" required />
        </div>
        <div>
          <label htmlFor="number">Contact number</label>
          <input type="number" id="number" name="number" className="border" required />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default Profile