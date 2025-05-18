// DEPENDENCIES
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckBox, {
CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox';
import React from 'react';
// THEME
import { palette } from 'src/theme/mainTheme';

export interface CheckboxProps extends MuiCheckboxProps {
formLabel: string | React.ReactNode;
}

export const Checkbox = ({
    value,
    formLabel,
    ...muiCheckBoxProps
}: CheckboxProps) => {
    return (
        <FormControlLabel
            control={
                <MuiCheckBox
                    {...muiCheckBoxProps}
                    checked={!!value}
                    sx={{
                    color: palette.neutral[900],
                    '&.Mui-checked': {
                    color: palette.primary.main,
                    },
                    }}
                    disableRipple
                />
            }
            label={formLabel}
            sx={{
                '& .MuiFormControlLabel-label': {
                    fontSize: '16px',
                    color: palette.neutral[900],
                },
            }}
        />
    );
};
