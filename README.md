# azure-resume

This resume is built on Azure, using Azure Blob Storage, Functions, CosmosDB, and GitHub Actions.

## Front-end resources

The front-end is a static site with HTML, CSS, and JavaScript. It's includes a visitor counter. The visitor counter data is fetched via an API call to an Azure Function.
  
## Back-end resources

The back-end is an HTTP triggered Azure Function with Cosmos DB input and output binding. When the function is triggered, it retrieves the CosmosDB item, adds +1 to it, and returns its value to the caller.

## Testing Resources

The website is tested using .net Xunit