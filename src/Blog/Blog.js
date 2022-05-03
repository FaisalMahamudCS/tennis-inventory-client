import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h4>Difference Between JavaScript and Node JS</h4>
            <p>JavaScript is programming language which is used for scripting on web app.Node Js is a JavaScript runtime which is built on chrome V8 engine.
                We cannot run javascript outside browser.But we can run javascript in  node JS.Javascript is mainly used in client slide(front end) where node js is used in handling
                server slide(backend) like api,module,handling I/0.Node js has access to local file system and can run on locally. 
            </p>
            <h4>When Should You use Node JS and When you should use Mongodb</h4>
            <p>Node js is used to handle backend.We can make REST api for handling create,update,delete,Read operation.For storing these data we need mongoDB.
                For example we have a product .So if  we want to store our product we will need mongoDB. Mongo will create ,update,delete,run and 
                other modification we need to make api and call in Node js and connect to mongodb.than we can fetch the data from mongodb using node            </p>
                <h4>Difference Between Sql and NoSql</h4>
                <p>Sql is structured Query Language.it is usd for relational database like mysql,sql server,postgreSQL,Oracle Database,Sqlite.
                    In relational database data is stored in different table. Nosql is non relational database  where data
                    doesn't processed as table form.we can use it for vast data management like facebook,twitter.It can handle large scale of database
                    No sql database can be doucment based or tree based where sql is query based.
                    </p>

                    <h4>What is the perpous of JWT and How JWT Work?

                    </h4>
                    <p>JWT is JSON Web Tokens.It is used for authorization.It make sure user who send request to server
                is the same user logged in during authentication.When user send post request to browser with username and password than
                server create JWT for user with secure.Than it send back the JWT to browser.Than Client side send request with JWT and server slide
                varify JWT signature and get user from JWT. 

                    </p>
        </div>
      
    );
};

export default Blog;