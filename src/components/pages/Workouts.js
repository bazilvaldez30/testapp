import { useEffect, useState } from "react"
import { listWorkouts } from "../../graphql/queries"
import { deleteWorkout } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

import {
  Card,
  Flex,
  Heading,
  Text,
  View,
  Grid,
  Button,
  withAuthenticator
} from "@aws-amplify/ui-react";
import { Container } from "react-bootstrap";

const Workouts = () => {
  const [ workouts, setWorkout ] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, [])

  async function fetchWorkouts(){
    const apiData = await API.graphql({query: listWorkouts});
    const workoutsFromApi = apiData.data.listWorkouts.items;
    setWorkout(workoutsFromApi);
  }

  const removeWorkout = async (id) => {
    const newWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkout(newWorkouts)
    await API.graphql({
      query: deleteWorkout,
      variables: { input: { id }}
    })
  }

  return (
    <>
    <Container >
    <Flex className="row" direction="row" m="5">
        {workouts.map((workout) => (
          <Card variation="outlined" width={"350px"}>
            <Flex
              key={workout.id}
              direction="column"
              justifyContent="center"
              alignItems={"center"}
            >
            <Flex alignItems="center" alignContent={"center"}>
              <Heading>
                Title:
              </Heading>
              <Text as="strong">{workout.title}</Text>
            </Flex>
            <Flex alignItems="center">
              <Heading>
                Load:
              </Heading>
              <Text as="strong">{workout.load}</Text>
            </Flex>
            <Flex  alignItems="center">
              <Heading>
                Reps:
              </Heading>
              <Text as="strong">{workout.reps}</Text>
            </Flex>
            <Button variation="link" onClick={() => removeWorkout(workout.id)}>
                Delete workout
            </Button>
            </Flex>
  
          </Card>
        ))}
    </Flex>
    </Container>
      {/* <Button onClick={signOut}>Sign Out</Button> */}
      
      {/* <Form src="https://zvzuragyakvysse.form.io/user/register" />
      <Form src="https://zvzuragyakvysse.form.io/user/login" /> */}
    </>
  )
}

export default Workouts