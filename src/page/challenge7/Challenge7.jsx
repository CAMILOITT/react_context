import { useEffect, useState } from 'react';
import AxiosConfig from './Axios';
import './Challenge7.css';
import { Button, ButtonGroup } from '@mui/material';

export default function Challenge7() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [totalCountLike, setTotalCountLike] = useState(0);
  const [totalCountDislike, setTotalCountDislike] = useState(0);
  const [message, setMessage] = useState('');
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setDislike(0);
    setLike(0);
    return AxiosConfig.get('/jokes/random').then((res) => setMessage(res.data));
  }

  function incrementLike() {
    if (dislike === 1) {
      setDislike(0);
      setLike(1);
      setTotalCountDislike(totalCountDislike - 1);
      setTotalCountLike(totalCountLike + 1);
      return;
    }
    if (like === 1) {
      setLike(0);
      setTotalCountLike(totalCountLike - 1);
      return;
    }
    setLike(1);
    setTotalCountLike(totalCountLike + 1);
  }
  function incrementDislike() {
    if (like === 1) {
      setDislike(1);
      setLike(0);
      setTotalCountDislike(totalCountDislike + 1);
      setTotalCountLike(totalCountLike - 1);
      return;
    }
    if (dislike === 1) {
      setDislike(0);
      setTotalCountDislike(totalCountDislike - 1);
      return;
    }
    setDislike(1);
    setTotalCountDislike(totalCountDislike + 1);
  }
  return (
    <div className="main">
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt="logo chucknorris"
        className="main__imgChucknorris"
      />
      <div className="main__chuckJokes">
        <img src={message.icon_url} alt="img" className="chuckJokes__avatar" />
        <p className="chuckJokes__joke">{message.value}</p>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className="chuckJokes__groupBtn"
        >
          <Button onClick={getData}>generar nuevo chiste</Button>
          <Button onClick={incrementLike}>like</Button>
          <Button onClick={incrementDislike}>dislike</Button>
        </ButtonGroup>
      </div>
      <div className="main__totalLikes">
        <span className="totalLikes__likes">
          chistes buenos: {totalCountLike}
        </span>
        <span className="totalLikes__dislikes">
          chistes malos: {totalCountDislike}
        </span>
      </div>
    </div>
  );
}
