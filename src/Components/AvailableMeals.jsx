import './AvailableMeals.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Superfood Salad',
    description: 'Finest veggies with olive oil dressing',
    price: 150,
  },
  {
    id: 'm2',
    name: 'Paneer Tikka',
    description: 'A starter with green chutney',
    price: 170,
  },
  {
    id: 'm3',
    name: 'Dal Tadka',
    description: 'Indian special gravy',
    price: 180,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 140,
  },
  {
    id: 'm5',
    name: 'Veggie Pizza',
    description: 'Medium sized pizza with veggie,olives',
    price: 500,
  },
  {
    id: 'm6',
    name: 'Burger',
    description: 'American snack with cheese,patty',
    price: 250,
  },
];

const AvailableMeals = () => {
  return (
    <div className="available-meals">
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <li key={meal.id}>
              <strong>{meal.name}</strong>
              <p className="description"> {meal.description} </p>
              <p className="price">₹{meal.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableMeals;
