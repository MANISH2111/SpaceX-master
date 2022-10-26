import { Realm } from '@realm/react';

class Todo extends Realm.Object {
	_id!: Realm.BSON.ObjectId;
	todo!: string;
	isComplete!: boolean;
	createdAt!: Date;
	userId!: string;
	owner_id!: string;

	static generate(todo: string, userId?: string) {
		return {
			_id: new Realm.BSON.ObjectId(),
			todo,
			isComplete: false,
			createdAt: new Date(),
			userId: userId,
			owner_id: userId,
		};
	}

	static schema = {
		name: 'Todo',
		primaryKey: '_id',
		properties: {
			_id: 'objectId',
			todo: 'string',
			isComplete: { type: 'bool', default: false },
			createdAt: 'date',
			userId: 'string',
			owner_id: 'string',
		},
	};
}
export { Todo };
