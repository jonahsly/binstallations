import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './LeftSideBar.css';

type ThemeItem = {
  id: string;
  label: string;
};

type ThemeGroup = ThemeItem & {
  children?: ThemeItem[];
};

// Parent topics and subtopics used by the sidebar navigation.
export const themeGroups: ThemeGroup[] = [
  { id: 'tema1', label: 'Generalidades' },
  {
    id: 'tema2',
    label: 'Provision de Agua',
    children: [
      { id: 'tema3', label: 'Sistemas de Canerias' },
      { id: 'tema4', label: 'Componentes del Sistema' },
      { id: 'tema5', label: 'Agua Fria' },
      { id: 'tema6', label: 'Agua Caliente' },
    ],
  },
];

// Flat index for quick lookups (mobile header label, validations, etc.).
export const themes: ThemeItem[] = themeGroups.flatMap((group) => [group, ...(group.children ?? [])]);

type LeftSidebarProps = {
  id?: string;
  className?: string;
  isMobile?: boolean;
  onClose?: () => void;
};

const LeftSidebar: React.FC<LeftSidebarProps> = ({ id, className = '', isMobile = false, onClose }) => {
  const { selectedTheme, setSelectedTheme } = useAppContext();
  const sidebarClassName = ['left-sidebar', className].filter(Boolean).join(' ');

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
    // On mobile, selecting a topic should also close the drawer.
    if (isMobile) onClose?.();
  };

  return (
    <aside id={id} className={sidebarClassName}>
      <ul className="left-sidebar-list">
        {/* Render parents first and group related subtopics directly below each parent. */}
        {themeGroups.map((group) => {
          const hasChildren = Boolean(group.children?.length);
          const isParentSelected = selectedTheme === group.id;
          // Highlight the parent when any of its children is active.
          const hasActiveChild = group.children?.some((child) => child.id === selectedTheme) ?? false;

          return (
            <li key={group.id} className="theme-group">
              <button
                type="button"
                className={`theme-item theme-parent ${isParentSelected ? 'active' : ''} ${hasActiveChild ? 'active-parent' : ''}`}
                onClick={() => handleThemeSelect(group.id)}
              >
                {group.label}
              </button>

              {hasChildren && (
                <ul className="theme-sublist">
                  {group.children!.map((child) => (
                    <li key={child.id}>
                      <button
                        type="button"
                        className={`theme-item theme-child ${selectedTheme === child.id ? 'active' : ''}`}
                        onClick={() => handleThemeSelect(child.id)}
                      >
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
