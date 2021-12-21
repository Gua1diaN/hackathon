import React from 'react';

import { CardBody, Card, CardHeader, Button } from 'reactstrap';

const SimpleWrapper = (props) => {
  const { addButton, addFunction, buttonText, children, importButton, importFunction, importText, sectionHeading  } = props;

  const button = (
    addButton ? 
    <Button size="sm" color="primary" className="m-2" onClick={(event) => addFunction(event)}>
      { buttonText ? buttonText : 'New'}
    </Button>
    : null
  );

  const buttonImport = (
    importButton ? 
    <Button size="sm" color="primary" className="m-2" onClick={(event) => importFunction(event)}>
      { importText ? importText : 'New'}
    </Button>
    : null
  );

  return (
    <Card className="card-box mb-3">
      {sectionHeading && (
        <CardHeader>
          <div className="card-header--title font-size-md font-weight-bold py-2">
            {sectionHeading}
          </div>
          {buttonImport}
          {button}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default SimpleWrapper;
