// DEPENDENCIES
import MuiFormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
// THEME
import { palette } from 'src/theme/mainTheme';
// TYPES
import { FormLabelProps as MuiFormLabelProps, StackProps } from '@mui/material';

export interface FormLabelProps extends MuiFormLabelProps {
    endAdornment?: React.ReactNode;
    label: string;
    stackProps?: StackProps;
    startAdornment?: React.ReactNode;
}

export const FormLabel = ({
    endAdornment,
    label,
    startAdornment,
    sx,
    stackProps,
}: FormLabelProps) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={1}
            mb={1}
            {...stackProps}
        >
            {startAdornment}
            <MuiFormLabel
                component="legend"
                sx={{
                    textTransform: 'uppercase',
                    height: 24,
                    fontSize: '12px',
                    lineHeight: '24px',
                    color: palette.neutral[800],
                    ...sx,
                }}
            >
                {label}
            </MuiFormLabel>
            {endAdornment}
        </Stack>
    );
};
