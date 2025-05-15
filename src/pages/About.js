import '../App.css';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

export default function About() {
    const leftStyle = {'text-align':'left'};

    return( 
        <>
            <GlobalHeader/>
            <div className="version">
                <h3 style = {leftStyle}>About:</h3>
                <p style={leftStyle}>This site was created to assist with scoring in the hand and foot card game for beginners. To learn how to play, visit the "Game Rules" page. To learn how the scoring system works, visit the "Scoring Rules" page. To access the online scorecard, visit the "Scorecard" page.</p>
                <br/>

                <h3 style = {leftStyle}>Changelog:</h3>
                <h4 style={leftStyle}>Version 1.6</h4>
                <p style={leftStyle}>Released: 5/14/2025 (Most Recent)<br/>Description: Backend improvements (rewritten in react), added game rules page, added customizable team colors, changes to about page, reloading the page no longer resets the scores or team names.</p>

                <h4 style={leftStyle}>Version 1.5</h4>
                <p style={leftStyle}>Released: 4/15/24<br/>Description: Backend improvements, improvements to data validation.</p>
           
                <h4 style={leftStyle}>Version 1.4</h4>
                <p style={leftStyle}>Released: 6/27/23<br/>Description: Added an icon for the webpage, redesigned the look of the scorecard, replaced scorecard field placeholders with field validation, added navbar, added "Scoring Rules" page, added "About" page.</p>
            
                <h4 style={leftStyle}>Version 1.3</h4>
                <p style={leftStyle}>Released: 9/29/21 <br/>Description: Fixed a bug where the clear button for team two did not work, the number zero is now displayed upon startup, the bonus is now a selection rather than a free response.</p>
            
                <h4 style={leftStyle}>Version 1.2</h4>
                <p style={leftStyle}>Released: 9/28/21<br/>Description: Fields now clear automatically after clicking done, other changes.</p>
           
                <h4 style={leftStyle}>Version 1.1</h4>
                <p style={leftStyle}>Released: 7/21/21<br/>Description: The first version of the Hand & Foot Scoresheet.</p>
            </div>
            <GlobalFooter/>
        </>
    )
}