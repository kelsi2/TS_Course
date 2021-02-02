# Express and TypeScript Server

- Building an Express app with different routes including login, login confirmation, protected, and denied screens.

## What I Learned

1. TypeScript doesn't usually work well with JavaScript libraries like Express. The problem is that until the request object properties are passed through body parser middleware, the body properties don't exist. Middleware is adding properties to the object that TypeScript is not aware of. This means TypeScript can't inspect them to make sure there are no errors. Middlewares are counterproductive to TypeScript, they are built to work with JavaScript.
2. Type definition files aren't always accurate. In the case of Express, the type def file assumes we are using body parser middleware and there will always be a body property. This prevents TS from giving an error when we aren't using body parser correctly (such as no app.use line in index.ts).
3. Inputs to a server (or any program with external inputs) are not guaranteed to exist or be of the correct type. This is exacerbated by type definition files.
4. To fix all of the above problems we edit the type definition for body to say { [key: string]: string | undefined }. We don't normally change type def files but this works for this case. This is not a permanent fix because as soon as we reinstall dependencies any changes will disappear. This ensures TS is able to do its job and check our code for us. The type file has been updated since to have a stricter type definition so this point is less applicable now.
5. A better solution for this is to create an interface similar to the above. See loginRoutes.ts RequestWithBody interface. This is not ideal because we need to remember to use this interface type each time we are making a request.
6. Converting initial code (basically JS code with bare minimum types) into TS code (using classes). This is worth the time if you get better type safety by helping TS do a better job catching errors and/or enhancing developer experience. We are doing this using TS Decorators.

### Aside: Decorators

-
