import './App.css';
import RecipeList from './RecipeList';

export default function App() {
const list = [
  {
    id: "sweet",
  title: "Sweet",
},
{
  id:"savory",
  title: "Savory"
},
{
  id: "experimental",
  title: "Experimental"
}
];

  return (
    <div className="App">
      <h1>Happy Pancake Day</h1>
      <p>Select the tabs below for different pancake topping ideas!</p>
      <div className='recipieList'>
      <ul>
        {list.map((item) => (
          <RecipeList />
        ))}
      </ul>
      <div className='container'> 
      <div className='item'>
      <img src="https://media.istockphoto.com/photos/pancakes-picture-id96430985?k=20&m=96430985&s=612x612&w=0&h=lgPzugJRc70yM9EP4NV0DoNaDJQuQ1bJ-x5bjpDmLI4=" />
      <h3>Chocolate</h3>
      </div>
      <div className='item'>
      <img src="https://media.istockphoto.com/photos/pancakes-picture-id96430985?k=20&m=96430985&s=612x612&w=0&h=lgPzugJRc70yM9EP4NV0DoNaDJQuQ1bJ-x5bjpDmLI4=" />
      <h3>Chocolate</h3>
      </div>
      <div className='item'>
      <img src="https://media.istockphoto.com/photos/pancakes-picture-id96430985?k=20&m=96430985&s=612x612&w=0&h=lgPzugJRc70yM9EP4NV0DoNaDJQuQ1bJ-x5bjpDmLI4=" />
      <h3>Chocolate</h3>
      </div>
      <div className='item'>
      <img src="https://media.istockphoto.com/photos/pancakes-picture-id96430985?k=20&m=96430985&s=612x612&w=0&h=lgPzugJRc70yM9EP4NV0DoNaDJQuQ1bJ-x5bjpDmLI4=" />
      <h3>Chocolate</h3>
      </div>
      </div>
      </div>
    </div>
  );
}


