import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity} = activityStore;

    // remove errors if activity is falsey, though we should only see this component when activity is truthy
    if (!activity) return <LoadingComponent />;   
           
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>{activity.date}</Card.Meta>
                <Card.Description>{activity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/activities/${activity.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to={'/activities'} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}