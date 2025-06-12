
  const kes = [
    { id: 1, name: 'Ketchup', type: 'condiment' },
    { id: 2, name: 'Mustard', type: 'condiment' },
    { id: 3, name: 'Relish', type: 'condiment' },
    { id: 4, name: 'Mayonnaise', type: 'condiment' },
    { id: 5, name: 'Hot Sauce', type: 'condiment' }
  ];

  
function ListsAndKes() {
  return (
    <div>
      <h1>Lists and Ketchup Example</h1>
      <ul>
        {kes.map(ke => (
          <li key={ke.id}>
            {ke.name} ({ke.type})
          </li>
        ))}
      </ul>
    </div>
  );
}       
export default ListsAndKes;
// This code defines a React component that renders a list of condiments (ketchup and others).