// src/components/SettingsModal.jsx

import { X } from 'lucide-react';
import { useStyles } from '../contexts/StyleContext';
import { 
  FONT_OPTIONS, 
  BACKGROUND_OPTIONS, 
  FONT_COLOR_OPTIONS,
  ANIMATION_OPTIONS 
} from '../constants/styleOptions';

export const SettingsModal = ({ isOpen, onClose }) => {
  const { styles, updateStyles } = useStyles();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Customize Your Proposal</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Font Style Selection */}
          <div>
            <label className="block mb-2 font-medium">Font Style</label>
            <select 
              value={styles.fontFamily}
              onChange={(e) => updateStyles({ fontFamily: e.target.value })}
              className="w-full p-2 border rounded"
            >
              {FONT_OPTIONS.map(font => (
                <option key={font.value} value={font.value}>{font.label}</option>
              ))}
            </select>
          </div>
          
          {/* Font Color Selection */}
          <div>
            <label className="block mb-2 font-medium">Font Color</label>
            <div className="grid grid-cols-4 gap-2">
              {FONT_COLOR_OPTIONS.map(color => (
                <button
                  key={color.value}
                  onClick={() => updateStyles({ fontColor: color.value })}
                  className={`w-8 h-8 rounded-full border ${
                    styles.fontColor === color.value ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          {/* Animation Selection */}
          <div>
            <label className="block mb-2 font-medium">Animation</label>
            <select 
              value={styles.animation}
              onChange={(e) => updateStyles({ animation: e.target.value })}
              className="w-full p-2 border rounded"
            >
              {ANIMATION_OPTIONS.map(animation => (
                <option key={animation.value} value={animation.value}>
                  {animation.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Background Theme */}
          <div>
            <label className="block mb-2 font-medium">Background Theme</label>
            <div className="grid grid-cols-2 gap-2">
              {BACKGROUND_OPTIONS.map(bg => (
                <button
                  key={bg.value}
                  onClick={() => updateStyles({ background: bg.value })}
                  className={`p-4 rounded border ${
                    styles.background === bg.value ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ background: bg.value }}
                >
                  <span className="text-sm font-medium" style={{ 
                    color: bg.textColor
                  }}>
                    {bg.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};