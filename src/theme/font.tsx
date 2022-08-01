import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* Heading */
      @font-face {
        font-family: 'Magilio'
        src: url('@assets/fonts/Magilio.otf') format('otf')
      }
      /* Sub Heading */
      @font-face {
        font-family: 'Alegreya Semibold'
        src: url('@assets/fonts/Alegreya-SemiBold.ttf') format('ttf')
      }
      /* Body */
      @font-face {
        font-family: 'Alegreya Sans Regular'
        src: url('@assets/fonts/AlegreyaSans-Regular.ttf') format('ttf')
      }
      /* Caption */
      @font-face {
        font-family: 'Alegreya Sans Light'
        src: url('@assets/fonts/AlegreyaSans-Light.ttf') format('ttf')
      }
      `}
  />
);

export default Fonts;
