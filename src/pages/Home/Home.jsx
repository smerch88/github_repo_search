import { Button, Container, Typography, useTheme } from '@mui/material';

import img1 from '../../images/homePageInstructions/Screenshot_1.jpg';
import img2 from '../../images/homePageInstructions/Screenshot_2.jpg';
import img3 from '../../images/homePageInstructions/Screenshot_3.jpg';
import img4 from '../../images/homePageInstructions/Screenshot_4.jpg';
import img5 from '../../images/homePageInstructions/Screenshot_5.jpg';
import img6 from '../../images/homePageInstructions/Screenshot_6.jpg';
import img8 from '../../images/homePageInstructions/Screenshot_8.jpg';
import img9 from '../../images/homePageInstructions/Screenshot_9.jpg';

const Home = () => {
  const theme = useTheme();

  const handleCheckItOutClick = () => {
    window.open('https://smerch88.github.io/githubstats/', '_blank');
  };

  return (
    <>
      <Container>
        <Typography variant="h2" component="h1" mb={4}>
          Welcome to my App!!!
        </Typography>
        <Typography variant="h3" component="h2" mb={4}>
          How to use the Github Repo Search App
        </Typography>
        <ol>
          <li>
            <Typography variant="h6" component="h3">
              Enter your search query
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              In the search bar at the top of the page, type in the name of the
              repository you want to find.
            </Typography>
            <img src={img1} width="80%" alt="screenshot of search query" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Filter your results (optional)
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              You can filter your search results by date, number of stars, and
              other criteria. Also you can set number of repos displayed on
              every page.
            </Typography>
            <img src={img2} width="80%" alt="screenshot of filters" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Sort Order
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              You can sort after such parameters as Best Match, Stars, Forks,
              Update Date, Help Wanted Issues.
            </Typography>
            <img src={img3} width="80%" alt="screenshot of Sort Order" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Order
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              It could be Ascending or Descending depends on your needs.
            </Typography>
            <img src={img4} width="80%" alt="screenshot of Order" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Results
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              You see total number of results and pagination. But be careful,
              only first 1000 results are shown.
            </Typography>
            <img src={img5} width="80%" alt="screenshot of Results" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Notifications
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              As defauld settings allows limited number of requests, it
              important to see what is going on. You can add .env file to extend
              limit to 5000.
            </Typography>
            <img src={img6} width="20%" alt="screenshot of Notifications" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Click it
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              Click a card to expand cut elements as Name or Description. Alsoo
              see avatar of Author.
            </Typography>
            <img src={img8} width="40%" alt="screenshot of  Click a card" />
          </li>
          <li>
            <Typography variant="h6" component="h3">
              Errors
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              Its included to let you know about limitations or problems with
              api key implementation.
            </Typography>
            <img src={img9} width="20%" alt="screenshot of Errors" />
          </li>
        </ol>
        <Typography variant="h3" component="h2" mb={4}>
          Check also my Github Profile Search App
        </Typography>
        <Button
          fullWidth
          sx={{ marginBottom: theme.spacing(4) }}
          variant="contained"
          color="primary"
          onClick={handleCheckItOutClick}
        >
          CHECK IT OUT
        </Button>
      </Container>
    </>
  );
};

export default Home;
