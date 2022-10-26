import { createRealmContext } from '@realm/react';
import { Todo } from './Todo';

export const TodoRealmContext = createRealmContext({
	schema: [Todo],
});
