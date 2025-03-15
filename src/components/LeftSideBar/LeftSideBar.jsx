import { useAppContext } from '../../context/AppContext';
import './LeftSideBar.css';

const themes = [
  { id: 'tema1', label: 'Tema 1' },
  { id: 'tema2', label: 'Tema 2' },
  { id: 'tema3', label: 'Tema 3' },
  { id: 'tema4', label: 'Tema 4' },
];

const LeftSidebar = () => {
  const { selectedTheme, setSelectedTheme } = useAppContext();

  return (
    <aside className="left-sidebar">
      <ul>
        {themes.map((theme) => (
          <li
            key={theme.id}
            className={selectedTheme === theme.id ? 'active' : ''}
            onClick={() => setSelectedTheme(theme.id)}
          >
            {theme.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;