// This is the main page of the application
// It is the first page that is loaded when the application is started
// It is also the page that is loaded when the user clicks on the "Home" button
// in the navigation bar
import React from 'react';
import { Link } from '../routes/links';
import { Button, Container, Card } from 'reactstrap';

const MainPage = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <Container fluid>
        <Card className='text-center'>
          <h1 className="display-3">Welcome to the TestMeCn application!</h1>
          <p className="lead">This is a simple application that allows you to create and take Chinese characters tests to test your progresss in learning Chinese.</p>
          <p className="lead">To get started, click on the "Login" button in the navigation bar.</p>
          <p className="lead">If you do not have an account, click on the "Register" button in the navigation bar.</p>
        </Card>
      </Container>
    </div>
  );
};

export default MainPage;