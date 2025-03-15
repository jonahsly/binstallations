import { useAppContext } from '../../context/AppContext';
import Option1Right from './views/Option1Right';
import Option2Right from './views/Option2Right';
import Option3Right from './views/Option3Right';
import Option4Right from './views/Option4Right';
import Option5Right from './views/Option5Right';

const RightSidebar = () => {
  const { selectedOption } = useAppContext();

  switch (selectedOption) {
    case 'option1': return <Option1Right />;
    case 'option2': return <Option2Right />;
    case 'option3': return <Option3Right />;
    case 'option4': return <Option4Right />;
    case 'option5': return <Option5Right />;
    default: return <Option1Right />;
  }
};

export default RightSidebar;