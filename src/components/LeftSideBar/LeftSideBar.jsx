import { useAppContext } from '../../context/AppContext';
import { useLanguage } from "../../context/LanguageContext";
import './LeftSideBar.css';

const themes = [
  { id: 'tema1', label: 'Generalidades' },
  { id: 'tema2', label: 'Provisión de Agua' },
  { id: 'tema3', label: '- Sistemas de Cañerías' },
  { id: 'tema4', label: '- Accesorios y Componentes' },
  { id: 'tema5', label: '- Agua Fría' },
  { id: 'tema6', label: '- Agua Caliente' },
  { id: 'tema7', label: 'Desagües' },
  { id: 'tema8', label: '- Sistemas de Cañerías' },
  { id: 'tema9', label: '- Accesorios y Componentes' },
  { id: 'tema10', label: '- Desagüe Primario' },
  { id: 'tema11', label: '- Desagüe Secundario' },
  { id: 'tema12', label: '- Desagüe Pluvial' },
];

const LeftSidebar = () => {
  //const { t } = useLanguage();
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
            {/*{ t (theme.label)}*/}

            {theme.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;