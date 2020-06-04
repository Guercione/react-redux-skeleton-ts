import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from 'components/inputs/Button';

import pallete from 'constants/palette';
import { ErrorTemplateProps } from './model';

const styles = makeStyles({
  content: {
    height: '100vh',
    backgroundColor: pallete.primary,
    padding: '0 1em',
    '& .MuiTypography-root': { color: pallete.secondary },
  },
});

const ErrorTemplate: React.FC<ErrorTemplateProps> = ({
  code,
  title,
  subtitle,
}) => {
  const classes = styles();

  function handleButtonBack() {
    window.location.href = '/';
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-end"
      className={classes.content}
    >
      <Typography variant="h1">{code}</Typography>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body1">{subtitle}</Typography>
      <Button color="highlight" onClick={handleButtonBack}>
        Back to home
      </Button>
    </Grid>
  );
};

export default ErrorTemplate;
