import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const user = User.buildUser({ name: '', age: 0 });
const root = document.getElementById('root');
if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();

    console.log(userEdit);
} else {
    throw new Error('Root element not found');
}

const users = User.buildUserCollection();

user.on('save', () => {
    users.fetch();
});

users.on('change', () => {
    const root = document.getElementById('list');

    if (root) {
        root.innerHTML = '';
        new UserList(root, users).render();
    }
});

users.fetch();
