import '../App.css';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

export default function Scoring() {
    return( 
        <>
            <GlobalHeader/>
            <p>Scoring Rules & Guidelines</p>
            <p className="scorehelp">
                After a team goes out, count the number of red canastas and enter it into the red canasta field on the scorecard.  Add up the number of black canastas and red threes and enter it into the black canasta and red three field on the scorecard.  Add up the values of all played cards (cards on the table and cards from completed canastas) based on the values listed in table two and enter this number into the "Card Values" field (note: if you have already counted red threes, do not count them again in this step).  For the losing team, add up the values of your unplayed cards (cards left in your hand and foot) and enter that number into the negative field.  If any player drew the exact correct amount of cards at the beginning of the round, that player recieves a 100 point bonus.  Add up the total bonuses for each team and select the appropriate bonus amount.
            </p>
            <p>Table 1, Item & Action Values</p>
            <table className="scoreguide">
                <tbody>
                    <tr className="scoreguide">
                        <th className="scoreguide">Item</th>
                        <th className="scoreguide">Point Value</th>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Red (Natural) Canasta</td>
                        <td className="scoreguide">500 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Black (Unnatural) Canasta</td>
                        <td className="scoreguide">300 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Red Three</td>
                        <td className="scoreguide">300 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Previously Played Cards</td>
                        <td className="scoreguide">Sum of Individual Values (see table 2)</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Unplayed Cards (losing team)</td>
                        <td className="scoreguide">Minus Sum of Individual Values (see table 2)</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Unplayed Cards (winning team)</td>
                        <td className="scoreguide">0 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Drawing Bonus</td>
                        <td className="scoreguide">Varies (see explanation)</td>
                    </tr>
                </tbody>
            </table>
            <p>Table 2, Individual Card Values</p>
            <table className="scoreguide">
                <tbody>
                    <tr className="scoreguide">
                        <th className="scoreguide">Card</th>
                        <th className="scoreguide">Point Value</th>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Black 3</td>
                        <td className="scoreguide">0 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Red 3</td>
                        <td className="scoreguide">300 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Any 4, 5, 6, 7, 8, or 9</td>
                        <td className="scoreguide">5 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Any 10, Jack, Queen, or King</td>
                        <td className="scoreguide">10 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Any 2 or Ace</td>
                        <td className="scoreguide">20 Points</td>
                    </tr>
                    <tr className="scoreguide">
                        <td className="scoreguide">Joker</td>
                        <td className="scoreguide">50 Points</td>
                    </tr>
                </tbody>
            </table>
            <GlobalFooter/>
        </>
    )
}