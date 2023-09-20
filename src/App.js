import React, { useState } from 'react'
import { Container, Divider, Button } from 'semantic-ui-react'
import JobType from './JobType';
import Description from './Description';
import Conditions from './Conditions';
import Experience from './Experience';

function App() {
  const [selectedJobType, setSelectedJobType] = useState('');

  const handleJobTypeChange = (newValue) => {
    setSelectedJobType(newValue);
  };
  return (
    <div>
      <Container>
        <JobType onSelectJobType={handleJobTypeChange}/>
        <Description/>
        <Divider horizontal></Divider>
        <Conditions/>
        <Divider horizontal></Divider>

        {selectedJobType == 'true'
        ? <Experience/>
        : <p></p>
        }
        <Button floated='right' type='submit'>Post</Button>
      </Container>
    </div>
  );
}

export default App;
