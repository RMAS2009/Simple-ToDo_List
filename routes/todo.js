const router = require('express').Router();

const Todo = require('../models/ToDo');



//routes
router.post("/add/todo",(req,res)=>{
    const {todo} = req.body;

  const newTodo = new Todo({todo});

  //save the todo
   newTodo.save()
   .then(()=>{
    console.log("Succesfully addes todo!");
     res.redirect("/")

   })
   .catch((err)=> console.log(err));


})

.get("/delete/todo/:_id",(req,res)=>{
    const {_id} = req.params;

    Todo.deleteOne({_id})
    .then(() => {
console.log("deleted success");
res.redirect("/");
})
.catch((err)=> console.log(err));

});

module.exports = router;
