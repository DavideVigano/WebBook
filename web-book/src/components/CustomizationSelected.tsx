import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface Props {
    updateChoice: (newValue: string) => void;
}

function CustomizationSelected({ updateChoice }: Props) {
    const [view, setView] = React.useState('button');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
        updateChoice(nextView);
    };

    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="button" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="tab" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="scroll" aria-label="scroll">
                <ViewQuiltIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
export default CustomizationSelected