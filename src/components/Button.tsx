import { forwardRef } from "react";
import { ButtonProps, Button as MuiButton} from '@mui/material';
import { palette } from 'src/theme/mainTheme';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const sx = {
        border: props.variant === 'text' ? 'none' : `2px solid ${palette.primary.main}`,
        borderWidth: `2px !important`,
        boxShadow: 'unset !important',
        backgroundColor:
            props.variant === 'outlined' || props.variant === 'text'
            ? 'transparent'
            : palette.primary.main,
        color:
            props.variant === 'outlined' || props.variant === 'text'
            ? palette.primary.main
            : palette.neutral[100],
        paddingY: '9.75px',
        '& span svg path': {
                fill: props.variant === 'outlined' || props.variant === 'text' ? palette.primary.main : palette.neutral[100],
        },
        '&:hover': {
            backgroundColor:
                props.variant === 'outlined' ? palette.primary.main : 'transparent',
            color: props.variant === 'outlined' ? palette.neutral[100] : palette.primary.main,
            '& span svg path': {
                fill: props.variant === 'outlined' ? palette.neutral[100] : palette.primary.main,
            },
            borderColor: palette.primary.main,
        },
        '&:hover .button-text': {
            textDecoration: props.variant === 'text' ? 'underline' : 'none',
            textUnderlineOffset: props.variant === 'text' ? '8px' : 'none',
        },
        '&:disabled': {
            borderColor: palette.neutral[500],
            backgroundColor:
                props.variant === 'outlined' || props.variant === 'text'
                ? 'transparent'
                : palette.neutral[500],
            color:
                props.variant === 'outlined' || props.variant === 'text'
                ? palette.neutral[500]
                : palette.neutral[100],
            '& span svg path': {
                fill: props.variant === 'outlined' || props.variant === 'text' ? palette.neutral[500] : palette.neutral[100],
            },
        },
    };

    return (
        <MuiButton
            {...props}
            ref={ref}
            sx={{
            paddingX: '24px',
            borderRadius: 50,
            textTransform: 'unset',
            height: '48px',
            ...sx,
            ...props.sx,
            }}
            disableRipple
            startIcon={props.startIcon}
        >
            <span className='button-text'>{children}</span>
        </MuiButton>
    );
}
);
