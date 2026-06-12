import { Button } from '../src/components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = () => (
  <Button variant="primary">
    Buy Ticket
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary">
    Learn More
  </Button>
);

export const Ghost = () => (
  <Button variant="ghost">
    Cancel
  </Button>
);
