import React from 'react';

import Loading from 'components/Loading';
import MuiButton from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import palette from 'constants/palette';
import { ButtonProps, StyleProps } from './model';

const styles = makeStyles({
  button: (props: StyleProps) => ({
    color: palette[`${props.color}Contrast`] || '#FFF',
    margin: '5px',
    minWidth: 150,
    height: 36,
    backgroundColor: palette[props.color] || palette.primary,
  }),
});

const Button: React.FC<ButtonProps> = ({
  loading,
  disabled,
  children,
  color,
  onClick,
}) => {
  const classes = styles({ color });

  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      className={classes.button}
      disabled={disabled || loading}
    >
      {loading ? <Loading /> : children}
    </MuiButton>
  );
};

export default Button;
