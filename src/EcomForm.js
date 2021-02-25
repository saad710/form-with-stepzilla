import React from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import Step2 from './Step2';

const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <Step2/>;
const step3Content = <h1>Step 3 Content</h1>;

const EcomForm = () => {
    return (
        <div className='step-progress'>
        <StepProgressBar
  startingStep={0}
  
  steps={[
    {
      label: 'Step 1',
      subtitle: '10%',
      name: 'step 1',
      content: step1Content
    },
    {
      label: 'Step 2',
      subtitle: '50%',
      name: 'step 2',
      content: step2Content,
    },
    {
      label: 'Step 3',
      subtitle: '100%',
      name: 'step 3',
      content: step3Content,
    }
  ]}
/>;
    </div>
    );
};

export default EcomForm;