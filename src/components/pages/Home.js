import { Container } from 'react-bootstrap';
import { Form } from 'react-formio';

import { API, graphqlOperation } from "aws-amplify"

import { 
        createWorkout as createWorkoutMutation, 
        updateWorkout as updateWorkoutMutation 
} from "../../graphql/mutations"
import { useState } from 'react';
import { Heading, View } from '@aws-amplify/ui-react';

const Home = () => {

  const [input, setInput] = useState('')
 
  async function createWorkout(e) {
  
    const { title, reps, load } = e.data;
    await API.graphql({
      query: createWorkoutMutation,
      variables: { input: {title,reps,load}},
    });
    // e.target.reset();
  }

  const onChange1 = (e) => {
    setInput(e.data)
    console.log(input)
  }

  return (
    <>
      {/* <div className="workouts">
          {workouts && workouts.map(workout => (
              <WorkoutDetails workout={workout} key={workout._id}/>
          ))}
      </div>   */}
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Heading className='mt-5 mb-5' level={3} textAlign="center">Create Workout</Heading>
        <View className="col-6">
          <Form 
            src="https://zvzuragyakvysse.form.io/createworkout" 
            onSubmit={(e) => createWorkout(e)}
          />
        </View>
      </Container>
    </>
  )
}

export default Home