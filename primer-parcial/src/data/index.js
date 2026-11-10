import segundoPage from './pages/segundo.js';
import terceroPage from './pages/tercero.js';
import deportesPage from './pages/deportes.js';
import galeriaPage from './pages/galeria.js';
const getPageContext = (pagePath)=>{
    console.log("Page Path to Provide:", pagePath);
    let pageData = {};
    switch (pagePath) {
        case '/segundo.html':
            pageData = segundoPage;
            break;
        case '/tercero.html':
            pageData = terceroPage;
            break;
        case '/deportes.html':
            pageData = deportesPage;
            break;    
        case '/galeria.html':
            pageData = galeriaPage;
            break;    
    }
    console.log(
        "Data to Inject:",
        JSON.stringify(
            pageData,
            null,
            2
        )
    );
    return pageData;
}

export default getPageContext;