import '../App.css';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

export default function Rules() {
    const leftStyle = {'text-align':'left'};
    const centerStyle = {'text-align':'center'};

    return( 
        <>
            <GlobalHeader/>
            <div className='version'>
                <h3 style={centerStyle}>How To Play</h3>

                <h4 style={leftStyle}>Setup</h4>
                <p style={leftStyle}>Hand & foot requires 6 decks of cards. Combine 6 decks, including jokers, and thouroughly shuffle them. Then, place the decks at the center of the table, and flip one card up in between them (the "discard pile"). If the card that starts the discard pile is a red 3, any 2, or a joker, shuffle it back into the deck and pick a different card. Each game requires four players (two sets of partners). Each player should sit diagonally from their partner. At the beginning of each round, every player should attempt to grab 22 cards from the center stacks. After grabbing, count them into two stacks of 11 (left, right, left, right, etc.). If any player picked up 22 cards exactly, they recieve a 100 point bonus. Once all players have counted out two stacks of 11, they should exchange one with the player on their left and one with the player on their right. Each player can now pick up one stack (the "hand") and set aside the other stack (the "foot).</p>

                <h4 style={leftStyle}>Rounds</h4>
                <p style={leftStyle}>Each game of hand and foot has four rounds: the round of 50, round of 90, round of 120, and round of 150. Complete the setup instructions at the beginning of each round. The number of each round indicates the amount of points that a team needs to go down (more on this below).</p>
                
                <h4 style={leftStyle}>Objective</h4>
                <p style={leftStyle}>The objective of the game is to accumulate more points than the other team at the end of four rounds. You can accumulate points by playing cards to make canastas and red threes. A canasta is a collection of 7 identically-numbered cards, or 7-identically-numbered cards combined with wild cards.  Canastas without wild cards are called "red" or "natural", while canastas with wild cards are called "black" or "unnatural" canastas. A canasta must always have more normal cards than wild cards.  2's and jokers are wild cards.  In addition to canastas, players can also play red threes to accumulate points.  To do this, the player must simply place the red three on the table during their turn and draw another card from the stack of cards in the center.  Note that black threes not playable and cannot make the canastas, so they function only as discard cards.  See the "scoring rules" page for specific point values.</p>

                <h4 style={leftStyle}>Taking Your Turn</h4>
                <p style={leftStyle}>The first player to take their turn is the youngest player (in the round of 50) or the player who went out the previous round (in the rounds of 90, 120, and 150). To begin your turn, you can either draw two cards (one from each pile in the center of the table), or pickup the top five cards from the pile.  If you choose to pickup the pile, you must be able to play the top card from the pile, and you must have two identically-numbered cards in your hand and play those as well. If your team has not gone down yet, then you are not permitted to use the subsequent 4 cards in the pile to achieve the required number of points.</p>
                <p style={leftStyle}>The first turn (going down): There are special requirements for the turns before a team has gone down. To start placing canastas on the board, you must be able to place a minimum amount of points down, as specified by the round number. The point value of each card is specified on the scoring rules page. Red threes do not count towards this amount. Once you have satisfied this requirement and placed the cards down, you can freely place cards down for the rest of the round.</p>
                <p style={leftStyle}>Placing canastas: Placing down an option (which can become a canasta if the option is completed) requires three cards: either two normal cards and a wild card or three normal cards. You can continue placing identically-numbered normal cards or wild cards on this option until there are 7 cards, as long as the number of normal cards always exceeds the number of wild cards. Once there are 7 cards on a single option, the option is "closed". Move the option to a seperate area of the table and classify it as either red (no wild cards) or black (contains wild cards).</p>
                <p style={leftStyle}>Entering your foot: Once you have no cards remaining in your hand, you can pickup your foot.  If you reached 0 hand cards without discarding, you are "directly" into your foot and can begin playing it on the same turn.  If you had to discard to reach 0 hand cards, you are "indirectly" into your foot and must wait until your next turn to play it.</p>                
                <p style={leftStyle}>Ending your turn: To end your turn, you must discard a card in the center pile. You can only discard something that you are not able to play. If all of your cards play, you must play them then "float", which means you ended your turn without a discard.  Then, the next player at the table (in a clockwise roation) begins their turn.</p>

                <h4 style={leftStyle}>Ending The Round (Going Out)</h4>
                <p style={leftStyle}>To go out, both you and your partner must be in your foot, and your team must have 3 or more black canastas and 2 or more red canastas. Once these are all true, if either partner discards a card and has no other cards remaining, the round is over and you can begin scoring the round.</p>
            </div>
            <GlobalFooter/>
        </>
    )
}