import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import useFetchAPI from "../components/FetchAPI";

const Searched = () => {
  let params = useParams();
  const { data: search, isLoading, isError, error } = useFetchAPI(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=18f7fdcd25ea43f78a4b397bddc46734&query=${params.search}`
  );
  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>{error.message}</p>
 
  return (
    <Grid>
      {search.results?.map((item) => {
        return (
          <Card key={item.id}>
            <NavLink to={"/recipe/"+item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </NavLink>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
