import './style.css';
import { MyApp } from './src/todos/app';
import todoStore from "./src/store/todo-store";

todoStore.run();

MyApp( '#myapp' );
