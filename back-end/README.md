```
npm init -y
```

```
npm install --save express
```

```
npm install --save @babel/core @babel/node @babel/preset-env
```

```
npx babel-node src/server.js
```

```
npm install --save body-parser
```

```
npm install --save-dev nodemon
```

```
npx nodemon --exec npx babel-node src/server.js
```

---

**Why MongoDB?**

Nonrelational database:
- Can push data to database without worrying about format (in other words, accepts any JSON object)
- Structure of data does not have to be defined in advance
- SQL not required
- Allows for creation of modulas, reusable components that can be arranged into a fully-functioning site

* [MongoDB](https://www.mongodb.com/)
* [MongoDB Compass](https://www.mongodb.com/try/download/compass)

```
{
  "_id": {
    "$oid": "630bcb6ac0460b333b0d55f9"
  },
  "name": "learn-react",
  "upvotes": 0,
  "comments": []    
}
```

```
{
  "_id": {
    "$oid": "630bcc65c0460b333b0d55fc"
  },
  "name": "learn-node",
  "upvotes": 0,
  "comments": []    
}
```

```
{
  "_id": {
    "$oid": "630bcc77c0460b333b0d55fd"
  },
  "name": "my-thoughts-on-resumes",
  "upvotes": 0,
  "comments": []    
}
```