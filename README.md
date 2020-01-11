# NgGiphySearch

This project is an [Angular](https://angular.io/docs) application (version 8.2.14 when published) which implements a search form where we can introduce a term, and performs a giphy search usign the [GIPHY image search API](https://developers.giphy.com/docs/api/endpoint#search) and loads the results in an image gallery, showing a pagination when it's needed.

### Setup

1. After cloning or unzip the file run `npm i` to perform the Angular and other dependecy installation

2. **Development server**: To run the development server `ng serve` or `npm run start`

3. **Production build**: To create a production build we can use the command `ng build --prod` or `npm run build`

4. **Run production build**: To run the production build created in the previous point, we use command `npm run serve:prod` which will initiate an _http-server_ loading the files generate in _/dist/ng-giphy-search_. However commands `ng serve --prod` or `npm run start:prod` will initiate the angular webpack development serving a production build.

5. **Unit tests**: Run the command `ng test` or `npm run test` to start the Angular unit testing

### Components

1. **AppComponent**

   - It loads the GiphyService. Manages the output events from its children components: Subscribe to events which send the search word and/or page offset to search the giphy using the GiphyService.

   - It renders the 3 other component templates and the app routing

2. **SearchBarComponent**

   - It renders the search form (ReactiveForm) whose input text field is required and will filter swear words from a list, while typping (e.g. fool) and hidding such word with \*\*\*\*

   - When form is submitted and valid, it emits an event with the search word whose parent, AppComponent, is subscribed.

   - When form is not valid it will show the error happening below the search bar

3. **ImageGalleryComponent**

   - It renders an array of images given as input

   - When the array is empty is interpreted as there were not results found, showing such message

4. **PaginationComponent**

   - It renders a list of buttons to manage the pagination, emitting an event when that value is updated

   - It will render a first, previous, number(s), next and last buttons to navigate through the different pages and triggering the active page update.

### Services

1. **GiphyService**

   - It implements a searchGiphy function which performs a request to the GIPHY image search API. It returns and Observable that the component subscribed will get the result data.

   - Set the default limit of items per request to 25

### Aditional developer's notes

For changing the dev server port you can check how to do it here: https://stackoverflow.com/a/51175153/1186541. Either adding in angular.json e.g. `port: 8080` in the serve -> options of the project or run `ng serve --port 8080` using the cli.

`FormsModule` is necessary to be added to use the `[(ngModel)]` two-way data bindings: https://angular.io/guide/template-syntax#import-formsmodule-to-use-ngmodel

**Reactive Forms** key differences with Template-driven forms: https://angular.io/guide/forms-overview#key-differences
