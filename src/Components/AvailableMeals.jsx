import './AvailableMeals.css';
import DUMMY_MEALS from './Menu';
import MealList from './MealList';

const AvailableMeals = () => {
  return (
    <div className="available-meals">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealList
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default AvailableMeals;
