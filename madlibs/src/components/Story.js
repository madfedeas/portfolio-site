import { slideInRight, fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const Story = ({verbed1, adj1, surname1, verbed2, adj2, verbing1, verb1,
    noun1, noun2, familymember1, number1, adj3, plnoun1, verb2, familymember2,
    plnoun2, city1, verbed3, surname2, adj4, color1, noun3, verbing2, occupation1,
    adj5, noun4, plfamilymember1, adj6, noun5, adj7, adverb1, occupation2,
    soundeffect, tryAgain}) => {
    return (
        <>
        <div id="story" className={css(styles.slideInRight)}>
        <p>I'm sure you're all wondering why I {(verbed1==="") ? "______" : verbed1} you here today. 
            Unfortunately, I am to be the bearer of some {(adj1==="") ? "______" : adj1} news. The great Alfred {(surname1==="") ? "______" : surname1},  who you all knew and {(verbed2==="") ? "______" : verbed2} has died a sudden death due to {(adj2==="") ? "______" : adj2} {(verbing1==="") ? "______" : verbing1}.
            While we all must {(verb1==="") ? "______" : verb1} in our own way, I hope that the reading of Mr. {(surname1==="") ? "______" : surname1}'s last will and {(noun1==="") ? "______" : noun1} will bring some {(noun2==="") ? "______" : noun2} to you.
        </p>
        <p>"To my dearest {(familymember1==="") ? "______" : familymember1}: I leave you you my {(number1==="") ? "______" : number1} {(adj3==="") ? "______" : adj3} {(plnoun1==="") ? "______" : plnoun1} in the hopes that you can {(verb2==="") ? "______" : verb2} them in a way I never could.
        </p>
        <p>To my lovely {(familymember2==="") ? "______" : familymember2}: I leave you all of my {(plnoun2==="") ? "______" : plnoun2}. 
            Except for the {(plnoun2==="") ? "______" : plnoun2} that I keep in {(city1==="") ? "______" : city1}, those should never be {(verbed3==="") ? "______" : verbed3}.
        </p>
        <p>To Mrs. {(surname2==="") ? "______" : surname2}, my {(adj4==="") ? "______" : adj4} friend: I leave you that {(color1==="") ? "______" : color1} {(noun3==="") ? "______" : noun3} you've always complimented me on. 
            And if you were just {(verbing2==="") ? "______" : verbing2} me to be nice, well, it wasn't worth that much money anyway.
        </p>
        <p>And to my {(occupation1==="") ? "______" : occupation1}: I leave you my entire {(adj5==="") ? "______" : adj5} {(noun4==="") ? "______" : noun4}. 
            I know my {(plfamilymember1==="") ? "______" : plfamilymember1} will be incredibly {(adj6==="") ? "______" : adj6} to hear this news, but you, my dear friend, deserve the {(noun5==="") ? "______" : noun5}."
        </p>
        <p>Hey now, settle down everyone! There's no reason to get {(adj7==="") ? "______" : adj7}! I will {(adverb1==="") ? "______" : adverb1} review the will with the {(occupation2==="") ? "______" : occupation2}, but there's no reason to get...
        </p>
        <p>BANG!</p>
        <p>CRASH!</p>
        <p>{(soundeffect==="") ? "______" : soundeffect.toUpperCase()}!</p>
        <p>...freaking entitled {(plfamilymember1==="") ? "______" : plfamilymember1}!!!</p>
        </div>
        <button className={css(styles.fadeIn)} onClick={tryAgain}>Try Again?</button>
        </>
    )
};

const styles = StyleSheet.create({
    slideInRight: {
      animationName: slideInRight,
      animationDuration: '2s'
    },
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '3s'
    }
  });

export default Story;