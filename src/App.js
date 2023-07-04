import Post from "./Post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png"
          alt=""
        />
      </div>
      <h1>Hai yaswanth</h1>
      <Post
        profile_dp="https://avatars.githubusercontent.com/u/72020268?v=4"
        imageurl="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
        username="yaswanth_kakatiya"
        caption="Nature ♥"
      />

      <Post
        profile_dp="https://media.licdn.com/dms/image/D5603AQFfoeuCY_vpdQ/profile-displayphoto-shrink_400_400/0/1684278627984?e=1693440000&v=beta&t=mJcm2z5c3Qfu1NEJg8BpMKejjsiXTyq3qGnsYfE1IWA"
        imageurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQml5ZS9sfGYP_QnjXIyQdl_PcuCysZEJ9-Gg&usqp=CAU"
        username="themurahari"
        caption="My new car"
      />

      <Post
        profile_dp="https://media.licdn.com/dms/image/D5603AQFXiisG4BMUQQ/profile-displayphoto-shrink_800_800/0/1678853378281?e=2147483647&v=beta&t=M4zQ7ExxLwsVROTOwn701F9CzG_RVy7CNcjsB1pJCzU"
        imageurl="https://images.unsplash.com/photo-1600352712371-15fd49ca42b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
        username="Kalyan_Chakravarthi"
        caption="good morning"
      />
    </div>
  );
}

export default App;
