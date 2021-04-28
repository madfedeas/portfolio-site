import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const Header = ({showStory, pageTitle}) => {
    return (
        <header className={css(styles.bounce)}>
        <h1>Let's Play MadLibs!</h1>
        <h2>{pageTitle}</h2>
      </header>
    )
};

const styles = StyleSheet.create({
    bounce: {
      animationName: bounce,
      animationDuration: '1.5s',
      animationIterationCount: '3',
    }
});

export default Header;