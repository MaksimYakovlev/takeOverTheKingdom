import style from './NewGame.module.css'
import Button from '@material-ui/core/Button';

function NewGame() {
  return (
    <div className = {style.Button}>
      <Button variant="contained" size="large" color="primary" disableElevation>
        New Game
      </Button>
    </div>
  );
}
export default NewGame;
