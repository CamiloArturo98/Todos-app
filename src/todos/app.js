import html from './app.html?raw';

export const MyApp = ( idElement ) => {  

(()=>{  


    const myapp = document.createElement('div');
    myapp.innerHTML = html;
    document.querySelector( idElement ).append( myapp );
})();

};