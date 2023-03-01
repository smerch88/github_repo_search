import { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export const RepoCard = ({ item }) => {
  const [isTextOverflow, setIsTextOverflow] = useState(true);

  const handleCardClick = () => {
    setIsTextOverflow(!isTextOverflow);
  };

  const handleLearnMoreClick = () => {
    window.open(item.html_url, '_blank');
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography>{item.name}</Typography>
          <Typography>Created on {item.created_at}</Typography>
          <Typography>Language: {item.language}</Typography>
          <Typography
            sx={{
              textOverflow: isTextOverflow ? 'ellipsis' : 'unset',
              whiteSpace: isTextOverflow ? 'nowrap' : 'unset',
              overflow: isTextOverflow ? 'hidden' : 'unset',
            }}
          >
            Description: {item.description}
          </Typography>
          <Typography>Forks: {item.forks_count}</Typography>
          <Typography>Watchers: {item.watchers}</Typography>
          <Typography>Visibility: {item.visibility}</Typography>
          <a
            href={item.owner.html_url}
            target="blank"
            rel="noopener noreferrer"
          >
            <Typography>Owner: {item.owner.login}</Typography>
          </a>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
