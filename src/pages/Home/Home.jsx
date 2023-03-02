import { Container, Typography } from '@mui/material';

import img1 from '../../images/homePageInstructions/Screenshot_1.jpg';
import img2 from '../../images/homePageInstructions/Screenshot_2.jpg';
import img3 from '../../images/homePageInstructions/Screenshot_3.jpg';
import img4 from '../../images/homePageInstructions/Screenshot_4.jpg';
import img5 from '../../images/homePageInstructions/Screenshot_5.jpg';
import img6 from '../../images/homePageInstructions/Screenshot_6.jpg';
import img8 from '../../images/homePageInstructions/Screenshot_8.jpg';
import img9 from '../../images/homePageInstructions/Screenshot_9.jpg';

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" component="h1" mb={4}>
          How to use the Github Repo Search App
        </Typography>
        <ol>
          <li>
            <Typography variant="h6" component="h2">
              Enter your search query
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              In the search bar at the top of the page, type in the name of the
              repository you want to find.
            </Typography>
            <img src={img1} alt="screenshot of search bar" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Filter your results (optional)
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              You can filter your search results by date, number of stars, and
              other criteria. Also you can set number of repos displayed on
              every page.
            </Typography>
            <img src={img2} alt="screenshot of filters" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Sort Order
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              You can sort after such parameters as Best Match, Stars, Forks,
              Update Date, Help Wanted Issues.
            </Typography>
            <img src={img3} alt="screenshot of repository details" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Order
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              It could be Ascending or Descending depends on your needs.
            </Typography>
            <img src={img4} alt="screenshot of code tab" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Results
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              You see total number of results and pagination. But be careful,
              only first 1000 results are shown.
            </Typography>
            <img src={img5} alt="screenshot of fork button" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Notifications
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              As defauld settings allows limited number of requests, it
              important to see what is going on. You can add .env file to extend
              limit to 5000.
            </Typography>
            <img src={img6} alt="screenshot of new pull request button" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Click it
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              Click a card to expand cut elements as Name or Description. Alsoo
              see avatar of Author.
            </Typography>
            <img src={img8} alt="screenshot of watch button" />
          </li>
          <li>
            <Typography variant="h6" component="h2">
              Errors
            </Typography>
            <Typography variant="body1" component="p" mb={2}>
              Its included to let you know about limitations or problems with
              api key implementation.
            </Typography>
            <img src={img9} alt="screenshot of open issues tab" />
          </li>
        </ol>
      </Container>
    </>
  );
};

export default Home;
