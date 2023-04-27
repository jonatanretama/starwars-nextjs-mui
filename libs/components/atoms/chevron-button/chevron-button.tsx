import { ChevronDownIcon } from 'public/icons';
import { FloatingBox } from './chevron-button.styles';

export const ChevronButton = () => (
  <FloatingBox>
    <ChevronDownIcon sx={{ width: '40px', height: '40px' }} />
  </FloatingBox>
);
