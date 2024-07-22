import { Todo } from "../todos/Models/app-model";

const Filters = { 
    All: 'all',
    Completed : 'completed',
    Pending : 'Pending'
}


const state = {  
    todos : [
        new Todo( 'Running' ),
        new Todo( 'Gym' ),
        new Todo( 'Study' )
    ],
    filter : Filters.All,
}


const run = ()=>{ 
    console.log( state );
    console.log( 'Store is running now 🥑' );
};


const loadStore = () => {  
    throw new Error('This not has implemented yet');
}

const getTodo = ( filter = Filters.All ) => { 
    switch( filter ) { 
        case Filters.All : 
        return [...state.todos];
        case Filters.Completed : 
        return state.todos.filter( todo => todo.done );
        case Filters.Pending : 
        return state.todos.filter( todo => !todo.done );

        default : throw new Error( `Òption ${ filter } is not valid` );
    };
    
}

const newTodo = ( todo ) => {  
    if(!todo) throw new Error( 'You dont any todo yet' );
    state.todos.push(new Todo( todo ));

}

const todoToggle = (idTodo) => {  
    state.todos = state.todos.map( todo => { 
        if( todo.id === idTodo ) { 
            todo.done = !todo.done;
        }
        return todo;
    } )

};

const deleteTodo = (idTodo) => {  
    state.todos = state.todos.filter( todo => todo.id !==idTodo );

}

const deleteAll = () => { 
    state.todos = state.todos.filter( todo => todo.done );
}

const selectFilter = ( newFilter = Filters.All ) => {  
    
    state.filter = newFilter;

}

const whatIsYourSelection = () => { 
    return state.filter;
}


export default {  
    
    deleteAll,
    deleteTodo,
    getTodo,
    loadStore,
    newTodo,
    run,
    selectFilter,
    todoToggle,
    whatIsYourSelection,
}