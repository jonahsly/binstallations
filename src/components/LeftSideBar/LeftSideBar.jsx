import { useAppContext } from '../../context/AppContext';
import Option1Left from './views/Option1Left';
import Option2Left from './views/Option2Left';
import Option3Left from './views/Option3Left';
import Option4Left from './views/Option4Left';
import Option5Left from './views/Option5Left';



const LeftSidebar = () => {
  const { selectedOption } = useAppContext();

  switch (selectedOption) {
    case 'option1': return <Option1Left />;
    case 'option2': return <Option2Left />;
    case 'option3': return <Option3Left />;
    case 'option4': return <Option4Left />;
    case 'option5': return <Option5Left />;
    default: return <Option1Left />;
  }
};

export default LeftSidebar;