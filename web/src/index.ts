import { User } from './models/User';

const user = new User({ name: 'thomas', age: 15 });

user.events.on('change', () => {
    console.log('change');
});

user.events.trigger('change');
