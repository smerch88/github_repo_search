import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { typographyStyle } from './RepoCard.Styled';

import { Link } from 'react-router-dom';

export const RepoCard = ({ item }) => {
  const [isCardClicked, setIsCardClicked] = useState(true);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  const handleLearnMoreClick = () => {
    window.open(item.html_url, '_blank');
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography sx={typographyStyle}>Name: {item.name}</Typography>
          <Typography sx={typographyStyle}>
            Created on {item.created_at}
          </Typography>
          <Typography sx={typographyStyle}>
            Language: {item.language}
          </Typography>
          <Typography sx={typographyStyle}>
            Description: {item.description}
          </Typography>
          <Typography sx={typographyStyle}>
            Forks: {item.forks_count}
          </Typography>
          <Typography sx={typographyStyle}>
            Watchers: {item.watchers}
          </Typography>
          <Typography sx={typographyStyle}>
            Visibility: {item.visibility}
          </Typography>
          {!isCardClicked && (
            <Box sx={{ width: '40px' }}>
              <img src={item.owner.avatar_url} alt="user_avatar" width="100%" />
            </Box>
          )}
          <Box
            component={Link}
            to={item.owner.html_url}
            target="blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <Typography sx={typographyStyle}>
              Owner: {item.owner.login}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick} variant="outlined">
          Check It
        </Button>
      </CardActions>
    </Card>
  );
};
