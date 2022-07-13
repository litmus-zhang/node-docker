const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const schema = buildSchema(`
type Query {hello: String}
`)

const rootValue = {
    hello: () => "Hello World from Express Graphql"
}

const app = express()
app.use("/graphql", graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/graphql`)
})

