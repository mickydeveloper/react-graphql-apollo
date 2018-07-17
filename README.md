# EDC React Redux TypeScript boiler plate
Feel free to create Pull Requests for changes or optimazation for this boiler plate 

The idea behind the containers and components is inspired by the article: https://medium.freecodecamp.org/understanding-higher-order-components-6ce359d761b

# To run the local api make sure to install cosmosdb emulator
https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator

If you get a port error try to:
run it in the console with a port flag like so:

`cd C:\Program Files\Azure Cosmos DB\`

`CosmosDB.Emulator.exe /Port=8000 (example port)`

**To open the database explorer righclick on the cosmos db icon and select "Open data Explorer"**

to run the api: 
`npm run api`

to see the api documentation and run the queries:
http://localhost:4000/graphiql

Api is using apollo engine remember to get your own api key:
https://engine.apollographql.com/login

const engine = new ApolloEngine({
  apiKey: 'YOUR_API_KEY'
});

# To run the project
Make sure you have the newest version of node intalled

to start project run: 

`npm install`

`npm start`


#Additional template parts: 

## Font Awesome
https://fontawesome.com/

Simple use:
place in your html 

`<i class="fas fa-user"></i>`







