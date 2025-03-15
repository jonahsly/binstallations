import { useAppContext } from '../../context/AppContext';
import Option1Main from './views/Option1Main';
import Option2Main from './views/Option2Main';
import Option3Main from './views/Option3Main';
import Option4Main from './views/Option4Main';
import Option5Main from './views/Option5Main';

const MainContent = () => {
  const { selectedOption } = useAppContext();

  switch (selectedOption) {
    case 'option1': return <Option1Main />;
    case 'option2': return <Option2Main />;
    case 'option3': return <Option3Main />;
    case 'option4': return <Option4Main />;
    case 'option5': return <Option5Main />;
    default: return <Option1Main />;
  }
};

export default MainContent;