import { createTheme} from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
      subtitle1: {
        fontSize: 50,
        textAlign: 'center',
        color: 'green'
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: 'italic',
      },
    },
  });

  export default theme;