// THEME
import { palette } from 'src/theme/mainTheme';
// DEPENDENCIES
import { forwardRef } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';
// TYPES
import { RadioProps as MuiRadioProps } from '@mui/material/Radio';

export interface RadioProps extends MuiRadioProps {
formLabel: string | React.ReactNode;
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
    ({ value, formLabel, ...muiRadioProps }, ref) => {
        return (
            <FormControlLabel
                control={
                    <MuiRadio
                        {...muiRadioProps}
                        ref={ref}
                        value={value}
                        sx={{
                            color: palette.neutral[900],
                            paddingY: 0,
                            '&.Mui-checked': {
                                color: palette.primary.main,
                            },
                        }}
                        disableRipple
                    />
                }
                label={formLabel}
            />
        );
    }
);

Radio.displayName = 'Radio';
