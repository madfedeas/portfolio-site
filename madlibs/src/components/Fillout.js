import { slideInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const Fillout = ({verbed1, adj1, surname1, verbed2, adj2, verbing1, verb1,
    noun1, noun2, familymember1, number1, adj3, plnoun1, verb2, familymember2,
    plnoun2, city1, verbed3, surname2, adj4, color1, noun3, verbing2, occupation1,
    adj5, noun4, plfamilymember1, adj6, noun5, adj7, adverb1, occupation2,
    soundeffect, handleWord, onSubmit}) => {
    return (
        <form className={css(styles.slideInLeft)} onSubmit={onSubmit}>
            <p className="formfloat">
            Enter a past-tense verb: 
            <input type="text" name ="verbed1" value={verbed1} onChange={handleWord} />
            Enter an adjective: 
            <input type="text" name="adj1" value={adj1} onChange={handleWord} />
            Enter a surname/last name: 
            <input type="text" name="surname1" value={surname1} onChange={handleWord} />
            Enter a past-tense verb: 
            <input type="text" name="verbed2" value={verbed2} onChange={handleWord} />
            Enter an adjective: 
            <input type="text" name="adj2" value={adj2} onChange={handleWord} />
            Enter a verb ending in -ing: 
            <input type="text" name="verbing1" value={verbing1} onChange={handleWord} />
            Enter a verb: 
            <input type="text" name="verb1" value={verb1} onChange={handleWord} />
            Enter a noun: 
            <input type="text" name="noun1" value={noun1} onChange={handleWord} />
            Enter a noun: 
            <input type="text" name="noun2" value={noun2} onChange={handleWord} />
            Enter a family member: 
            <input type="text" name="familymember1" value={familymember1} onChange={handleWord} />
            Enter a number: 
            <input type="text" name="number1" value={number1} onChange={handleWord} />
            </p>
            <p className="formfloat">
            Enter an adjective: 
            <input type="text" name="adj3" value={adj3} onChange={handleWord} />
            Enter a plural noun: 
            <input type="text" name="plnoun1" value={plnoun1} onChange={handleWord} />
            Enter a verb: 
            <input type="text" name="verb2" value={verb2} onChange={handleWord} />
            Enter a family member: 
            <input type="text" name="familymember2" value={familymember2} onChange={handleWord} />
            Enter a plural noun: 
            <input type="text" name="plnoun2" value={plnoun2} onChange={handleWord} />
            Enter a city: 
            <input type="text" name="city1" value={city1} onChange={handleWord} />
            Enter a past-tense verb: 
            <input type="text" name="verbed3" value={verbed3} onChange={handleWord} />
            Enter a surname/last name: 
            <input type="text" name="surname2" value={surname2} onChange={handleWord} />
            Enter an adjective: 
            <input type="text" name="adj4" value={adj4} onChange={handleWord} />
            Enter a color: 
            <input type="text" name="color1" value={color1} onChange={handleWord} />
            Enter a noun: 
            <input type="text" name="noun3" value={noun3} onChange={handleWord} />
            </p>
            <p className="formfloat">
            Enter a verb ending in -ing: 
            <input type="text" name="verbing2" value={verbing2} onChange={handleWord} />
            Enter an occupation: 
            <input type="text" name="occupation1" value={occupation1} onChange={handleWord} />
            Enter an adjective: 
            <input type="text" name="adj5" value={adj5} onChange={handleWord} />
            Enter a noun: 
            <input type="text" name="noun4" value={noun4} onChange={handleWord} />
            Enter plural family members: 
            <input type="text" name="plfamilymember1" value={plfamilymember1} onChange={handleWord} />
            Enter an adjective: 
            <input type="text" name="adj6" value={adj6} onChange={handleWord} />
            Enter a noun: 
            <input type="text" name="noun5" value={noun5} onChange={handleWord} />
            Enter an adjective: 
            <input type="text" name="adj7" value={adj7} onChange={handleWord} />
            Enter an adverb: 
            <input type="text" name="adverb1" value={adverb1} onChange={handleWord} />
            Enter an occupation: 
            <input type="text" name="occupation2" value={occupation2} onChange={handleWord} />
            Enter a sound effect: 
            <input type="text" name="soundeffect" value={soundeffect} onChange={handleWord} />
            </p>
            <input type="submit" id="submit" name="submit" value="Let's Read!" />
        </form>
    )
};

const styles = StyleSheet.create({
    slideInLeft: {
      animationName: slideInLeft,
      animationDuration: '2s'
    }
  });

export default Fillout;