import { useAppContext } from '../../context/AppContext';

const DropdownMenu = () => {
  const { selectedOption, setSelectedOption } = useAppContext();

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="option1">Vista 1</option>
      <option value="option2">Vista 2</option>
      <option value="option3">Vista 3</option>
      <option value="option4">Vista 4</option>
      <option value="option5">Vista 5</option>
    </select>
  );
};

export default DropdownMenu;
