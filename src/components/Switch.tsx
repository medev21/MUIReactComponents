// DEPENDENCIES
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
// THEMES
import { palette } from 'src/theme/mainTheme';
// TYPES
import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

export interface SwitchProps extends MuiSwitchProps {
formLabel: string | React.ReactNode;
}

export const Switch = ({ onChange, formLabel, ...props }: SwitchProps) => {
    return (
        <FormControlLabel
            sx={{
            marginLeft: 0,
            }}
            control={
                <MuiSwitch
                    onChange={onChange}
                    disableRipple
                    sx={{
                        width: '64px',
                        height: '32px',
                        padding: '0px',
                        marginRight: '8px',
                        '& .MuiSwitch-switchBase': {
                            padding: '4px',
                            '&.Mui-checked': {
                                transform: 'translateX(32px)',
                                color: palette.neutral[100],
                                '& + .MuiSwitch-track': {
                                    opacity: 1,
                                    backgroundColor: palette.primary.main, // primary blue track when checked
                                },
                                // add opacity when toggle its disabled
                                '&.Mui-disabled + .MuiSwitch-track': {
                                    opacity: 0.4,
                                },
                            },
                        },
                        '& .MuiSwitch-thumb': {
                            width: '24px',
                            height: '24px',
                            backgroundColor: palette.neutral[100],
                        },
                        '& .MuiSwitch-track': {
                            borderRadius: 50,
                            backgroundColor: palette.neutral[800], // gray track when off
                            opacity: 1,
                        },
                    }}
                    {...props}
                />
            }
            label={formLabel}
        />
    );
};
