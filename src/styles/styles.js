import { StyleSheet, css } from 'aphrodite';

const appStyles = StyleSheet.create({
  wrapper: {
    fontSize: '16px',
  },
  inlineBlock: {
    display: 'inline-block',
  },
  dividerSmall:{
    marginLeft:'5px',
    marginRight: '5px'
  },
  dividerBig:{
    marginLeft:'10px',
    marginRight: '10px'
  },
  statsLabel: {
    fontSize: '18px',
    lineHeight: '24px',
    position: 'relative',
    top: '2px'
  }
});

export default appStyles;
