import { CollectionView } from '../views/CollectionView';
import { User, UserProps } from '../models/User';

//We can also just implement User Show, but I seperated out to have different templates.
export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element): void {
        const name = model.get('name');
        const age = model.get('age');
        const id = model.get('id');

        itemParent.innerHTML = this.template(id, name, age);
    }

    template(id: any, name: any, age: any): string {
        return `
            <div>User Name: ${name}</div>
            <div>User Age: ${age}</div>
            <div>User Id: ${id}</div>
            <br/>
        `;
    }
}
