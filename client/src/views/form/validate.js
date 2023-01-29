
export default function validate(recipe) {
    let errors = {};
    let regularExpression = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      /* let regExpUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g; */
    
    if (!recipe.title.trim()) {
        errors.title = "Your recipe need a title!";
    } else if (!regularExpression.test(recipe.title.trim())) {
        errors.title = "Title field only accepts letters and blank spaces";
    } else if (!recipe.summary) {
        errors.summary = "You need give a brief explanation about your recipe";
    } else if (!recipe.steps) {
        errors.steps = "Must tell us how to make that delicius recipe";
        /* }else if(!regExpUrl.test(recipe.image.trim())){
            errors.image = "Must be a URL direction"*/
    }
    return errors;
    }

